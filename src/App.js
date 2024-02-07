import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import LoginSheet from "./components/LoginSheet";

const App = () => {
  return (
    <Router>
      <div>
        <Banner />
      </div>
      <div>
        <LoginSheet />
      </div>
    </Router>
  );
};

export default App;
