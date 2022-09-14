import React from "react";
import styled from "styled-components";
import { Issue } from "../types";
import * as S from "./style/IssueListIssueItem.styled";

interface IssuListIssueItemProps {
  issue: Issue;
  onClickGoDetailPage: (issueNumber: number) => void;
}

const IssueListIssueItem = ({
  issue,
  onClickGoDetailPage,
}: IssuListIssueItemProps) => {
  const {
    number,
    user: { login },
    title,
    created_at,
    comments,
  } = issue;

  const createdAt = new Intl.DateTimeFormat().format(new Date(created_at));

  const onClickIssueItem = () => onClickGoDetailPage(issue.number);

  return (
    <S.IssueItemContainer onClick={onClickIssueItem}>
      <S.LeftBox>
        <S.TitleItem>
          <S.IssueNumber>#{number}</S.IssueNumber>
          <S.IssueTitle>{title}</S.IssueTitle>
        </S.TitleItem>

        <S.IssueInfoItem>
          <S.Author>작성자: {login}</S.Author>
          {/* // "2022-08-11T07:08:46Z" */}
          <S.Date>작성일: {createdAt}</S.Date>
        </S.IssueInfoItem>
      </S.LeftBox>

      <S.RightBox>
        <S.CommentCount>코멘트: {comments}</S.CommentCount>
      </S.RightBox>
    </S.IssueItemContainer>
  );
};

// Issue 번호 : number
// Issue 작성자: user.login
// Issue 타이틀: title
// Issue 작성일: created_at
// Issue 코멘트 수: comments

export default IssueListIssueItem;
