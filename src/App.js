import './App.css';
import Characters from "./modules/characters/Characters";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./modules/details/Details";

// import Privat from "./modules/Privat/Privat";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path={"/"}
                    element={<Characters/>}
                />
                <Route
                    path={"details/:id"}
                    element={<Details/>}
                />

            </Routes>
        </BrowserRouter>


    );
}

export default App;
