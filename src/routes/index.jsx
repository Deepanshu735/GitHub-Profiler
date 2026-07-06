import { Navigate, Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SearchPage/SearchPage";
import UserDetail from "../pages/UserDetail/UserDetail";
import Repos from "../pages/Repos/Repos";
import Followers from "../pages/Followers/Followers";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/user/:username/followers" element={<Followers />} />
      <Route path="/user/:username" element={<UserDetail />} />
      <Route path="/user/:username/repos" element={<Repos />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default AppRoutes;
