import "./App.css";
import { LoginComponent } from "./components/login.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PrivateRoute} from "./routes/private.route";
import { HomeComponent } from "./components/home.component";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route exact element={<PrivateRoute />}>
          <Route exact path="/home" element={<HomeComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
