import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/style/Container.styled";
import GlobalStyled from "./components/style/Global";
import content from "./content";

const theme = {
  colors: {
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333',
  },
  mobile:'768px',
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyled />
    <Header />
    <Container>
      {content.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </Container>
    <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
