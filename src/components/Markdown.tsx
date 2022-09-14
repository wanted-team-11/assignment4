import styled from "styled-components";
import { StyleVariables } from "../styles/GlobalStyle";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <S_Code className={className} {...props}>
              {children}
            </S_Code>
          );
        },
      }}
    />
  );
};

export default Markdown;

const S_Code = styled.code`
  border-radius: 6px;
  padding: 0.2em 0.4em;
  font-size: 85%;
`;
