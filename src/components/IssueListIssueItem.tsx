import React from "react";
import styled from "styled-components";
import { CommentIcon, TargetIcon } from "../assets";
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
          <S.IssueTitle>
            <TargetIcon />
            <S.IssueTitleText>{title}</S.IssueTitleText>
          </S.IssueTitle>
        </S.TitleItem>

        <S.IssueInfoItem>
          <S.Author>
            #{number} opened on {createdAt} by {login}
          </S.Author>
        </S.IssueInfoItem>
      </S.LeftBox>

      <S.RightBox>
        <S.CommentCount>
          <CommentIcon /> {comments}
        </S.CommentCount>
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
