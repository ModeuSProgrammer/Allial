import Footer from "../components/footer";
import Section from "../components/section";
import Box from "../components/box";
import Button from "../components/button";

function LogIn() {
  return (
    <div className="page">
      <header>
        <nav>
          <ul className="navigation">
            <li><a href="/">Главная</a></li>
            <li><a href="/menuday">Меню на день</a></li>
            <li><a href="/auth">Авторизация</a></li>
          </ul>
        </nav>
      </header>
      
      <Section className="section section-single">
        <Box className="box box-main-two">
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