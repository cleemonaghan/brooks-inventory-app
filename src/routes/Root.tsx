import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { themeOptions } from "../theme";
import Dashboard from "./dashboard/Dashboard";
import AdminPortal from "./adminPortal/AdminPortal";
import EmployeePortal from "./employeePortal/EmployeePortal";
import ManagerPortal from "./managerPortal/ManagerPortal";

// router singleton
const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

const theme = responsiveFontSizes(createTheme(themeOptions));

export default function App() {
  return <RouterProvider router={router} />;
}

// Exported for testing
export function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* All routes are wrapped by a pathless layout route with the navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<EmployeePortal />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/manager" element={<ManagerPortal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
