import { Container } from "@mui/system";
import React from "react";
import Header from "./components/Header/Header";
import PagesRoute from "./pages/PagesRoute";

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: "4rem" }}>
        Hello world
      </Container>
    </>
  );
};

export default App;
