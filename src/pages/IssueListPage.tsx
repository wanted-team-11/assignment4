import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import IssueListIssueItem from "../components/IssueListIssueItem";
import { AssignmentContext } from "../context";
import * as S from "./style/IssueListPage.styled";
import LogoImg from "../assets/things-flow-logo.png";

const IssueListPage = () => {
  const navigate = useNavigate();
  const { isLoading, getListByPageNumber, issueList } =
    useContext(AssignmentContext);

  const onClickGoDetailPage = (issueNumber: number) => {
    navigate(`/issue-detail/${issueNumber}`);
  };

  const bottomLoader = useRef<HTMLDivElement>(null);

  const [pg, setPg] = useState(1);

  const handleObserver = async (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const target = entries[0];
    if (target.isIntersecting) {
      observer.unobserve(bottomLoader.current as HTMLDivElement);
      setPg((prev) => prev + 1);
      await getListByPageNumber(pg);
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

  return (
    <>
      <S.IssueListContainer>
        {issueList.map((issue, index) => {
          return (
            <Fragment key={issue.number}>
              {index === 4 && (
                <S.AdItem>
                  <img src={LogoImg} alt="ad" />
                </S.AdItem>
              )}
              <IssueListIssueItem
                issue={issue}
                onClickGoDetailPage={onClickGoDetailPage}
              />
            </Fragment>
          );
        })}
      </S.IssueListContainer>
      {isLoading === false && (
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "purple",
          }}
          ref={bottomLoader}
        >
          loading...
        </div>
      )}
    </>
  );
};

export default IssueListPage;
