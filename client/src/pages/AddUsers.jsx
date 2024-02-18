import Image from "../components/Image";
import Section from "../components/section";
import Box from "../components/box";
import Button from "../components/button";

function AddUsers() {
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><a href="/admin">Главная</a></li>
            <li><a href="/adduser">Пользователи</a></li>
            <li><a href="/addfood">Блюда</a></li>
            <li><a href="/logout">Выход</a></li>
          </ul>
        </nav>
      </header>

      <Section className="section section-single">
        <Box className="box box-main-two">
          <div className="container-one container-users">
            <form>
              <h2>Добавить пользователя</h2>
              <input type="email" min={1} max={50} placeholder="Почта"></input>
              <input type="password" min={1} max={50} placeholder="Пароль"></input>
              <Button className="button" text="Добавить"></Button>
            </form>
            <form>
              <h2>Удалить пользователя</h2>
              <input type="email" min={1} max={50} placeholder="Почта"></input>
              <Button className="button" text="Удалить"></Button>
            </form>
          </div>
        </Box>
      </Section>

      <footer>
        <div className="container container-footer">
          <div className="block-logo" >
            <Image source="/img/logo.png" alt="Аллиал" className={"logo"} />
          </div>
          <nav className="footer-nav">
            <ul className="navigation">
              <li><a href="/admin">Главная</a></li>
              <li><a href="/adduser">Пользователи</a></li>
              <li><a href="/addfood">Блюда</a></li>
              <li><a href="/logout">Выход</a></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div>
  );
}

export default AddUsers;