import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider>
      <div className="app">

      </div>
    </ColorModeContext.Provider>
  );
}

export default App;
