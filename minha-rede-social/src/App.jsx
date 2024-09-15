import { Routes, Route } from "react-router-dom";
import { Theme } from "./Shared/Components/Theme/style";
import Layout from "./Layout";
import Home from "./Views/Home";
import Perfil from "./Views/Perfil";
import Error from "./Views/Error";
import Welcome from "./Views/Welcome";

const App = () => {
  return(
    <Theme>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Theme>
  )
}

export default App;