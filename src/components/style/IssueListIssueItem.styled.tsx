import styled from "styled-components";
import { StyleVariables } from "../../styles/GlobalStyle";

export const IssueItemContainer = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  justify-content: center;
  max-width: 768px;
  margin: 0 auto 10px;
  cursor: pointer;
  color: white;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const TitleItem = styled.div`
  font-size: ${StyleVariables.listTitleFontSize};
  line-height: 2;
`;

export const IssueNumber = styled.span``;

export const IssueTitle = styled.div`
  display: flex;
  align-items: center;
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const IssueTitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
`;

export const IssueInfoItem = styled.div`
  font-size: 12px;
`;

export const Author = styled.span`
  color: ${StyleVariables.listNumberFontColor};
`;

export const Date = styled.span``;

export const RightBox = styled.div``;

export const CommentCount = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
  text-align: top;
  gap: 10px;
`;
