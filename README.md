# 원티드 프리온보딩 6차 4차 과제

## 💡 11팀

> 참여 인원 (이미지 클릭시 개인 레포지토리로 이동)

| [<img src="https://avatars.githubusercontent.com/u/16061038?v=4" width="120px" /> ](https://www.github.com/GUGIG) | [<img src="https://avatars.githubusercontent.com/u/62875596?v=4" width="120px" /> ](https://www.github.com/dlsxody1) | [<img src="https://avatars.githubusercontent.com/u/57490711?v=4" width="120px" /> ](https://www.github.com/gkdfo40) | [<img src="https://avatars.githubusercontent.com/u/97019802?v=4" width="120px" /> ](https://www.github.com/hjpark625) | [<img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="120px" /> ](https://www.github.com/ggsno) | [<img src="https://avatars.githubusercontent.com/u/111843724?v=4" width="120px" /> ](https://www.github.com/lee12779) | [<img src="https://avatars.githubusercontent.com/u/66675699?v=4" width="120px" /> ](https://www.github.com/happyeveryone96) | [<img src="https://avatars.githubusercontent.com/u/62886997?v=4" width="120px" />](https://www.github.com/HyunSeungBeom) |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **[팀장]정재훈**                                                                                                  | **김인태**                                                                                                           | **김항래**                                                                                                          | **박희주**                                                                                                            | **오강산**                                                                                                        | **이미란**                                                                                                            | **정진우**                                                                                                                  | **현승범**                                                                                                               |

---

> 역할

| 이름                                            | 역할                                                                                                                                   |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **정재훈** , **김항래** ,**박희주** ,**정진우** | 인피니트 스크롤 intersection observer api,디자인 및 목록 컴포넌트화 , 클릭시 issue-detail 페이지로 이동 ,인피니트 스크롤시 로딩중 표현 |
| **김인태**, **오강산** ,**이미란**, **현승범**  | 이슈 상세 화면에 표현, 이슈 상세데이터 받을 때 로딩 표현, 마크다운 데이터를 렌더링                                                     |

<br />
<br />

## 🌈 실행 방법

    $ git clone https://github.com/wanted-team-11/assignment4.git
    $ cd assignment4
    $ npm install
    $ npm start

<br />
<br />

---

## ⭐ 배포 링크

<br />

> https://team-11-github-issues.netlify.app/

<br />
<br />

---

## 📚 기술스택

<br />

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![typescript](https://img.shields.io/badge/typescript-4.8.3-3178C6?logo=typescript)
![styledComponents](https://img.shields.io/badge/styled--components-5.3.5-DB7093?logo=styledcomponents)
![axios](https://img.shields.io/badge/axios-0.27.2-5E22D6)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.3.0-blue?logo=react-router)
![contextAPI](https://img.shields.io/badge/context%20API-%20-brightgreen)
![intersection observer](https://img.shields.io/badge/Intersection%20Observer-%20-red)
![react-markdown](https://img.shields.io/badge/react--markdown-%208.0.3-red)

- 선정 이유

  - TypeScript
    - 정적 타입 지원하므로 컴파일 단계에서 오류를 사전에 포착할 수 있으며 이를 통해 미리 디버깅이 가능함
  - Styled-Components
    - CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동적으로 생성하기에 코드 경량화에 효과적
    - 컴포넌트 기반 개발 방법에 적합하고 가장 많이 사용되는 CSS-in-JS 라이브러리
    - JS 상수와 함수를 쉽게 공유하여 props를 활용한 조건부 렌더링에 용이
    - 컴포넌트화하여 재활용 가능
  - Axios
    - Request와 Reply를 JSON 형태로 자동 변경
    - fetchAPI와 차이점으로 fetchAPI는 요청 후 Promise로 JSON형태로 변환을 해야하지만 axios는 애초에 JSON으로 응답을 해줘서 간결한 코드 작성이 가능
  - React-Router-Dom
    - React의 SPA(Single Page Application)특성상 하나의 페이지(HTML)에서 모든 렌더링이 이루어짐
    - React의 이러한 강점을 활용하기 위해 페이지의 로딩없이 페이지에 필요한 컴포넌트를 렌더링 하기 위해 사용
  - Context API
    - api 통신 관리
    - 데이터 전역적 공유를 통한 props drilling 방지
  - intersection observer
    - 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩
    - 사용자에게 결과가 표시되는 여부에 따라 작업이나 애니메이션을 수행할 지 여부를 결정
  - React-Markdown
    - 리액트에서 마크다운을 처리할 때 dangerouslySetInnerHTML에 의존이 크거나 버그가 있기 때문
      <br />

<br />

---

## 📁 폴더 구조

    root
    |-- tsconfig.json
    |-- README.md
    |-- package.json
    |-- package-lock.json
    |-- .gitignore
    |-- .husky
    |-- public
    |   |-- index.html
    |-- src
        |-- assets
        |-- compoenents
        |-- page
        |-- context
        |-- styles
        |-- App.tsx
        |-- index.tsx

---

## ✅ 요구 사항

- API
  - GitHub REST API
  - token을 발급하지 않으면 시간 당 60회로 API 호출 횟수 제한 됨, 개발 시에는 access token을 발급받아 60회 제한 없이 개발, 이후 과제 제출 및 배포단계에서는 access token을 넣지 않도록 수정<br/>
    [[githup REST API](https://docs.github.com/en/rest)]

1. 이슈 목록 화면
   - 이슈 목록 가져오기 API 활용
   - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
   - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
   - 다섯번째 셀에는 광고 이미지 출력
     - 광고 이미지 클릭 시 [https://thingsflow.com/ko/home](https://thingsflow.com/ko/home)로 이동
   - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)
2. 이슈 상세 화면
   - 이슈의 상세 내용 표시
   - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
3. 공통 헤더
   - 두 페이지는 공통 헤더를 공유.
   - 헤더에는 Organization Name / Repository Name이 표시.

---

## 📝 구현 기능

  <br />

- 공통구현 사항
  - Context API:
    - 외부 API 통신 (Github) - axios 사용
    - 외부 데이터 state (Issue list, Issue Detail)
    - 데이터 로딩상태, 에러상태, 헤더 텍스트 등


https://user-images.githubusercontent.com/16061038/190247218-2c061ac4-36b5-4f41-a45d-0c17eeb35bda.mov


- 이슈 목록 화면
  - 최초 30개 데이터를 받아 map으로 보여줘야 할 리스트 렌더링
  - `div`태그를 하나 제작해 스크롤 바닥 도달 감지 역할 부여 (옵저버)
  - 스크롤 맨 밑으로 도달할 때마다 다음 30개 데이터 요청 및 리스트에 추가 & 렌더링
    - 옵져버가 감지 될 때마다 page값 1씩 올려 API의 parameter에 담아 요청
  - 매 로딩 시 spinner 이미지 화면하단에 삽입




https://user-images.githubusercontent.com/16061038/190248687-76d9804a-679a-478e-ac84-56e03e0bd090.mov




- 이슈 상세 화면
  - 이슈 상세 id(useParam) 받아 이슈 상세 정보 요청 및 렌더링
    - 이슈 목록 페이지에서 정보를 넘겨줄 경우 새로고침시 데이터가 날아가므로, 대신 상세정보를 새로 요청하도록 구현
  - 마크다운 형식으로 받아온 데이터를 react-markdown을 활용해 읽기 편한 형식으로 렌더링
  - detail 페이지를 불러올 때 로딩중인 상태를 알려주기 위한 spinner 이미지 삽입

---

## 🙏 Commit Convention

|   Type   | Description                   |
| :------: | ----------------------------- |
|   feat   | Add a new feature             |
|   fix    | Fix the bug                   |
|  design  | UI design changes such as CSS |
|  style   | code formatting               |
| refactor | Refactoring the code          |
|   docs   | Modify the document           |
|  chore   | etc.                          |
