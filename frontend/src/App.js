import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";

import Home from './Home'
import Spin from "./Spin";
import Result from "./Result"
import PrivateComponents from './PrivateComponents'
import Nopage from "./Nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponents/>}>
          <Route path='/spin' element={<Spin />} />
          <Route path='/result' element={<Result />} />
        </Route>
        <Route path="*" element={<Nopage/>}/>
        <Route path='/' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
