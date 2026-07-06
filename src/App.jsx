import Header from "./components/layout/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="app-main">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
