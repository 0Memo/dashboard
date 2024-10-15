import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToggleColorModeProvider } from "../src/components/ThemeContext";
import Bar from "./scenes/bar";
import Calendar from "./scenes/calendar";
import Contacts from "./scenes/contacts";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import Form from "./scenes/form";
import Geography from "./scenes/geography";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Invoices from "./scenes/invoices";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Team from "./scenes/team";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ToggleColorModeProvider>

      <CssBaseline />
      <div className="app">
        <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        <main className="content">
          <Topbar toggleDrawer={toggleDrawer} />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/invoices" element={<Invoices />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/bar" element={<Bar />}></Route>
            <Route path="/pie" element={<Pie />}></Route>
            <Route path="/line" element={<Line />}></Route>
            <Route path="/geography" element={<Geography />}></Route>
          </Routes>
        </main>
      </div>
    </ToggleColorModeProvider>
  );
}

export default App;
