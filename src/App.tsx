import {AppProviders} from "./providers/app-providers";
import {MuiMode} from "./components/mui/mui-mode";

function App() {

    return (
        <AppProviders>
            <div className="App">
                <h1>React Vite Jest</h1>
                <MuiMode/>
            </div>
        </AppProviders>
    );
}

export default App;
