import Header from "./components/Header";
import History from "./components/History";

function App() {
  return (
    <div className="mx-24 mt-10 bg-slate-400">
      <Header />
      <main>
        <History />
      </main>
    </div>
  );
}

export default App;
