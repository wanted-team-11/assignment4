import { useState, createContext, ReactNode } from "react";
import { Issue } from "../types";
import axios from "axios";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

interface AssignmentContextProps {
  isLoading: boolean;
  getListByPageNumber: (pageNumber: number) => Promise<void>;
  getNextPageList: () => void;
  issueList: Issue[];
  getIssueDetail: (issueNum: string) => void;
  issueDetail: Issue | undefined;
  pageNum: number;
  headerTitle: string;
  setHeader: (headerText: string) => void;
  isNoMore: boolean;
  isError: boolean;
}
export const AssignmentContext = createContext<AssignmentContextProps>({
  isLoading: false,
  getListByPageNumber: (pageNumber: number) => Promise.resolve(),
  getNextPageList: () => {},
  issueList: [],
  getIssueDetail: (issueNum: string) => {},
  issueDetail: undefined,
  pageNum: 0,
  headerTitle: "",
  setHeader: (headerText: string) => {},
  isNoMore: false,
  isError: false,
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
  const [headerTitle, setHeaderTitle] = useState("");
  const [isNoMore, setIsNoMore] = useState(false);
  const [isError, setIsError] = useState(false);

  const getIssueDetail = async (issueNumber: string) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(`issues/${issueNumber}`);
      setIssueDetail(response.data);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getNextPageList = () => {
    if (!isNoMore) {
      getListByPageNumber(pageNum + 1);
      setPageNum(pageNum + 1);
    }
  };

  const getListByPageNumber = async (pageNumber: number) => {
    try {
      setPageNum((prevNum) => prevNum + 1);
      setIsLoading(true);
      const response = await axiosInstance.get<Issue[]>(
        `issues?sort=comments&page=${pageNumber}`
      );
      if (response.data.length === 0) {
        setIsNoMore(true);
      }
      setIssueList((prev) => [...prev, ...response.data]);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const setHeader = (headerText: string) => {
    setHeaderTitle(headerText);
  };

  const value = {
    isLoading,
    getListByPageNumber,
    getNextPageList,
    issueList,
    getIssueDetail,
    issueDetail,
    pageNum,
    headerTitle,
    setHeader,
    isNoMore,
    isError,
  };

  return (
    <AssignmentContext.Provider value={value}>
      {children}
    </AssignmentContext.Provider>
  );
};

export default ContextProvider;
