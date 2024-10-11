import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();
  
  return (<ColorModeContext.Prvovider></ColorModeContext.Prvovider>
    <div className="app">

    </div>
  );
}

export default App;
