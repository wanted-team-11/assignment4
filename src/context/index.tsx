import { useState, createContext, ReactNode } from "react";
import { Issue } from "../types";
import axios from "axios";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

interface AssignmentContextProps {
  isLoading: boolean;
  getListByPageNumber: (pageNumber: number) => Promise<void>;
  issueList: Issue[];
  getIssueDetail: (issueNum: string) => void;
  issueDetail: Issue | undefined;
  getNextListPage: () => void;
  pageNum: number;
  setPage: (num: number) => void;
}
export const AssignmentContext = createContext<AssignmentContextProps>({
  isLoading: false,
  getListByPageNumber: (pageNumber: number) => Promise.resolve(),
  issueList: [],
  getIssueDetail: (issueNum: string) => {},
  issueDetail: undefined,
  getNextListPage: () => {},
  pageNum: 0,
  setPage: (num: number) => {},
});

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli/",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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

  const setPage = (val: number) => {
    setPageNum(val);
  };

  const getNextListPage = () => {
    setPageNum((prevNum) => prevNum + 1);
  };

  const getListByPageNumber = async (pageNumber: number) => {
    try {
      setPageNum((prevNum) => prevNum + 1);
      setIsLoading(true);
      const response = await axiosInstance.get<Issue[]>(
        `issues?sort=comments&page=${pageNumber}`
      );
      setIssueList((prev) => [...prev, ...response.data]);
    } catch (e) {
      console.error(e);
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
    getNextListPage,
    pageNum,
    setPage,
  };

  return (
    <AssignmentContext.Provider value={value}>
      {children}
    </AssignmentContext.Provider>
  );
};

export default ContextProvider;
