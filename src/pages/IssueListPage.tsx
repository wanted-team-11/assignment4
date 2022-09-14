import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import IssueListIssueItem from "../components/IssueListIssueItem";
import { AssignmentContext } from "../context";
import LogoImg from "../assets/things-flow-logo.png";
import Spinner from "../assets/Spinner.gif";
import styled from "styled-components";
import { StyleVariables } from "../styles/GlobalStyle";

const IssueListPage = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    getListByPageNumber,
    issueList,
    setHeader,
    isNoMore,
    isError,
    getNextPageList,
  } = useContext(AssignmentContext);

  const headerTitle = issueList[0]?.repository_url
    ?.split("https://api.github.com/repos/")
    .join("");

  useEffect(() => {
    if (headerTitle) {
      setHeader(headerTitle);
    }
  }, [setHeader]);

  const onClickGoDetailPage = (issueNumber: number) => {
    navigate(`/issue-detail/${issueNumber}`);
  };

  const bottomLoader = useRef<HTMLDivElement>(null);

  const [pg, setPg] = useState(1);

  const handleObserver = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      observer.unobserve(bottomLoader.current as HTMLDivElement);
      if (isNoMore) {
        observer.disconnect();
        return;
      }
      setPg((prev) => prev + 1);
      getNextPageList();
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (bottomLoader.current) {
      observer.observe(bottomLoader.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [handleObserver]);

  if (isError) {
    return <div>Oops, something went wrong...</div>;
  }

  return (
    <>
      <S_IssueListContainer>
        {issueList.map((issue, index) => {
          return (
            <Fragment key={issue.number}>
              {index === 4 && (
                <a href="https://thingsflow.com/ko/home">
                  <S_AdItem>
                    <img src={LogoImg} alt="ad" />
                  </S_AdItem>
                </a>
              )}
              <IssueListIssueItem
                issue={issue}
                onClickGoDetailPage={onClickGoDetailPage}
              />
            </Fragment>
          );
        })}
      </S_IssueListContainer>
      <S_InfiniteScrollDetector ref={bottomLoader}>
        {isLoading && <S_LoadingImg src={Spinner} />}
      </S_InfiniteScrollDetector>
    </>
  );
};

export default IssueListPage;

const S_IssueListContainer = styled.ul`
  background: ${StyleVariables.backgroundColor};
  margin: 0;
  padding: 10px 0 0;
`;

const S_AdItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57.5px;
  img {
    height: 100%;
  }
`;

const S_InfiniteScrollDetector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const S_LoadingImg = styled.img`
  height: 100%;
`;
