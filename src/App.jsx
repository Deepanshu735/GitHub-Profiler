import { Routes, Route} from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import UserDetail from "./pages/UserDetail";
import Repos from "./pages/Repos";
import Followers from "./pages/Followers";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/user/:username/followers" element={<Followers />} />
      <Route path="/user/:username" element={<UserDetail />} />
      <Route path="/user/:username/repos" element={<Repos />} />
      

    </Routes>
  );
}

export default App;