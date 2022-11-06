import AppContext from "./AppContext";
import { useTheme } from "./components/hooks/useTheme";
import Nav from "./components/Nav";
import LeftBar from "./components/LeftBar";

function App() {
  const {theme, setTheme} = useTheme();

  return (
    <AppContext.Provider value={{
      theme,
      setTheme
    }}>
      <div className="App">
        <div className="wrap_content">
          <LeftBar/>
          <Nav/>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
