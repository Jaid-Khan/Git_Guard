import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reviews from "./pages/Reviews";
import Repositories from "./pages/Repositories";
import ReviewDetails from "./pages/ReviewDetails";
import Settings from "./pages/Settings";
import SetupGuide from "./pages/SetupGuide";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/reviews/:id" element={<ReviewDetails />} />

        <Route path="/repositories" element={<Repositories />} />

        <Route path="/settings/:repoName" element={<Settings />} />

        <Route path="/setup" element={<SetupGuide />} />
      </Route>
    </Routes>
  );
}

export default App;
