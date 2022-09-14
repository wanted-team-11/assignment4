import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import IssueListIssueItem from "../components/IssueListIssueItem";
import { AssignmentContext } from "../context";

const IssueListPage = () => {
  const navigate = useNavigate();
  const { isLoading, getListByPageNumber, issueList } =
    useContext(AssignmentContext);

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
    if (target.isIntersecting) {
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
  }, []);

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
