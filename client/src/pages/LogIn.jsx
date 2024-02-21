import Section from "../components/section";
import Box from "../components/box";
import Image from "../components/Image";
import Button from "../components/button";

import { Auth } from '../actions/user';
import { useState } from "react";


function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const AuthClick = () => {
    Auth(email, password)
    alert('sss')
  }
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
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
              <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} min={1} max={50} placeholder="Почта" />
              <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} min={1} max={50} placeholder="Пароль" />
              <Button className="button" text="Вход" onClick={AuthClick}></Button>
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
              <li><a href="/">Главная</a></li>
              <li><a href="/menuday">Меню на день</a></li>
              <li><a href="/auth">Авторизация</a></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div>
  );
}

export default LogIn;