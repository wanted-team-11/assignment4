import styled from "styled-components";

export const IssueItemContainer = styled.li`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  justify-content: center;
  margin-bottom: 10px;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const TitleItem = styled.div``;

export const IssueNumber = styled.span``;

export const IssueTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IssueInfoItem = styled.div`
  font-size: 12px;
`;

export const Author = styled.span``;

export const Date = styled.span``;

export const RightBox = styled.div``;

export const CommentCount = styled.span``;
