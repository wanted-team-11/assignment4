import { useState, createContext, ReactNode } from "react";
import { Issue } from "../types";
import axios from "axios";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

interface AssignmentContextProps {
  isLoading: boolean;
  getListByPageNumber: (pageNum: string) => void;
  issueList: Issue[];
  getIssueDetail: (issueNum: string) => void;
  issueDetail: Issue | undefined;
}
export const AssignmentContext = createContext<AssignmentContextProps>({
  isLoading: false,
  getListByPageNumber: (pageNum: string) => {},
  issueList: [],
  getIssueDetail: (issueNum: string) => {},
  issueDetail: undefined,
});

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli/",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const [issueDetail, setIssueDetail] = useState<Issue>();

  const getIssueDetail = async (issueNumber: string) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(`issues/${issueNumber}`);
      setIssueDetail(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getListByPageNumber = async (pageNumber: string) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `issues?sort=comments&page=${pageNumber}`
      );
      setIssueList(response.data);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    isLoading,
    getListByPageNumber,
    issueList,
    getIssueDetail,
    issueDetail,
  };

  return (
    <AssignmentContext.Provider value={value}>
      {children}
    </AssignmentContext.Provider>
  );
};

export default ContextProvider;
