import Footer from "../components/footer";
import Header from "../components/header";

import Section from "../components/section";
import Box from "../components/box";
import Button from "../components/button";

function LogIn() {
  return (
    <div className="page">
      <Header />
      <Section className="section section-single">
        <Box className="box box-main">
          <div className="container-one">
            <form>
              <h2>Авторизация</h2>
              <input type="email" min={1} max={50} placeholder="Почта"></input>
              <input type="password" min={1} max={50} placeholder="Пароль"></input>
              <Button className="button" text="Вход"></Button>
            </form>
          </div>
        </Box>
      </Section>

      <Footer />
    </div>
  );
}

export default LogIn;