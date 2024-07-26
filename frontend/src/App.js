import Navbar from "./Navbar"
import Control from "./pages/Control"
import Documentation from "./pages/Documentation"
import Home from "./pages/Home"
import { Route, Routes} from "react-router-dom"

function App() {
  // React router handles
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/ >} />
            <Route path="/control" element={<Control/ >} />
            <Route path="/documentation" element={<Documentation/ >} />
          </Routes>
        </div>
      </>
    )
}

export default App;
