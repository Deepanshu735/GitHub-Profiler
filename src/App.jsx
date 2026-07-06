import styled from "styled-components";
import Header from "./components/layout/Header";
import AppRoutes from "./routes";

const AppShell = styled.div`
  min-height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function App() {
  return (
    <AppShell>
      <Header />

      <MainContent>
        <AppRoutes />
      </MainContent>
    </AppShell>
  );
}

export default App;
