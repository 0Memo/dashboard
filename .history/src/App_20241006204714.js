import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from './scenes/global/Sidebar';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/dashboard";
import Form from "./scenes/dashboard";
import Line from "./scenes/dashboard";
import Pie from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import Dashboard from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;