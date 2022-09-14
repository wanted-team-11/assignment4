import styled from "styled-components";
import { StyleVariables } from "../styles/GlobalStyle";
import { CommentIcon, TargetIcon, PullRequest } from "../assets";
import { Issue } from "../types";

interface IssuListIssueItemProps {
  issue: Issue;
  onClickGoDetailPage: (issueNumber: number) => void;
}

const IssueListIssueItem = ({
  issue,
  onClickGoDetailPage,
}: IssuListIssueItemProps) => {
  const {
    number,
    user: { login },
    title,
    created_at,
    comments,
    pull_request,
  } = issue;

  const createdAt = new Intl.DateTimeFormat().format(new Date(created_at));

  const onClickIssueItem = () => onClickGoDetailPage(issue.number);

  return (
    <S_IssueItemContainer onClick={onClickIssueItem}>
      <S_LeftBox>
        <S_TitleItem>
          <S_IssueTitle>
            {pull_request ? <PullRequest /> : <TargetIcon />}
            <S_IssueTitleText>{title}</S_IssueTitleText>
          </S_IssueTitle>
        </S_TitleItem>

        <S_IssueInfoItem>
          <S_Author>
            #{number} opened on {createdAt} by {login}
          </S_Author>
        </S_IssueInfoItem>
      </S_LeftBox>

      <S_RightBox>
        <S_CommentCount>
          <CommentIcon /> {comments}
        </S_CommentCount>
      </S_RightBox>
    </S_IssueItemContainer>
  );
};

export default IssueListIssueItem;

const S_IssueItemContainer = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  justify-content: center;
  max-width: 768px;
  margin: 0 auto 10px;
  cursor: pointer;
  color: white;
`;

const S_LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const S_TitleItem = styled.div`
  font-size: ${StyleVariables.listTitleFontSize};
  line-height: 2;
`;

const S_IssueNumber = styled.span``;

const S_IssueTitle = styled.div`
  display: flex;
  align-items: center;
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const S_IssueTitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
`;

const S_IssueInfoItem = styled.div`
  font-size: 12px;
`;

const S_Author = styled.span`
  color: ${StyleVariables.listNumberFontColor};
`;

const S_Date = styled.span``;

const S_RightBox = styled.div``;

const S_CommentCount = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
  text-align: top;
  gap: 10px;
`;
