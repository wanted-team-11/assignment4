import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AssignmentContext } from "../context";

const IssueListPage = () => {
  const { isLoading, getListByPageNumber, issueList } =
    useContext(AssignmentContext);

  useEffect(() => {
    getListByPageNumber("1");
  }, []);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {issueList.map((issue) => (
            <NavLink key={issue.id} to={`issue-detail/${issue.number}`}>
              {issue.title}
            </NavLink>
          ))}
        </ul>
      )}
    </>
  );
};

export default IssueListPage;
