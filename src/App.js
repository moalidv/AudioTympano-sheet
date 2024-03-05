import Diagram from "./components/Diagram";
import Header from "./components/Header";
import History from "./components/History";

function App() {
  return (
    <div className="mx-24 mt-10">
      <Header />
      <main>
        <History />
        <Diagram />
      </main>
    </div>
  );
}

export default App;
