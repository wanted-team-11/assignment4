import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AssignmentContext } from "../context";

const IssueDetailPage = () => {
  const { number } = useParams();
  const { getIssueDetail, issueDetail } = useContext(AssignmentContext);
  useEffect(() => {
    if (number) {
      getIssueDetail(number);
    }
  }, []);

  return <div>{issueDetail?.title}</div>;
};

export default IssueDetailPage;
