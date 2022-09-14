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
