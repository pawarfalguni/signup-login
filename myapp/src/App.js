import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Component/Dashboard";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Routing from "./Routing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
