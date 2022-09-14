import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import IssueListIssueItem from "../components/IssueListIssueItem";
import { AssignmentContext } from "../context";

const IssueListPage = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    getListByPageNumber,
    getNextListPage,
    issueList,
    pageNum,
    setPage,
  } = useContext(AssignmentContext);

  const onClickGoDetailPage = (issueNumber: number) => {
    navigate(`/issue-detail/${issueNumber}`);
  };
  const [pg, setPg] = useState(1);
  console.log("pg: ", pg);

  const bottomLoader = useRef<HTMLDivElement>(null);

  const handleObserver = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("intersecting");
      // observer.unobserve(bottomLoader.current as HTMLDivElement);
      getListByPageNumber(pg);
      setPg((prev) => prev + 1);
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
  }, [handleObserver]);

  return (
    <>
      <ul>
        {issueList.map((issue, index) => (
          <IssueListIssueItem
            // key={issue.number}
            key={index}
            issue={issue}
            onClickGoDetailPage={onClickGoDetailPage}
          />
        ))}
      </ul>
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
