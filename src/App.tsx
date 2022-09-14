// set routes (issue-list, issue-detail)
// when clicked the issue item, go to the detail page
// issue detail page
// detail page should show data (console would be suffice)
// 업무 나누기 하자!!
import { Routes, Route } from "react-router-dom";
import IssueListPage from "./pages/IssueListPage";
import IssueDetailPage from "./pages/IssueDetailPage";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IssueListPage />} />
        <Route path="issue-detail/:number" element={<IssueDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
