import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

// export component to be used in other files
export default App;
