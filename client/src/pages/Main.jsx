import Image from "../components/Image"
import Section from "../components/section"
import Box from "../components/box"

import { Link } from "react-router-dom"


const Main = () => {
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/auth">Авторизация</Link></li>
          </ul>
        </nav>
      </header>

      <Section className="section">

        <div className="container-one">
          <div className="main-art">
            <Image source="/img/proba-main.png" alt="Добро пожаловать!
            Ждём вас 10:00 - 18:00 Cб., Вс. - выходной" className="art" />
          </div>
        </div>

      </Section>

      <Section className="section">
        <Box className="box">
          <div className="container-one">
            <div className="block">
              <h4>Ваш путь к космическому успеху<br />начинается с баланса в питании!</h4>
              <hr />
              <p>Добро пожаловать в веб-приложение по организации здорового питания<br />
                для сотрудников Института Космических Исследований РАН!<br />
                <br />Мы заботимся о вашем благосостоянии и производительности, предоставляя
                <br />удобные инструменты для поддержания баланса в вашей диете.<br />
                <br />Наши рецепты, разработанные с учетом потребностей активных профессионалов, помогут вам поддерживать энергию и концентрацию на высоком уровне. </p>
              <p>Давайте вместе сделаем заботу о здоровье приятным и простым процессом, помогая вам достичь новых высот в ваших космических исследованиях!</p>
              <hr />
            </div>
          </div>
        </Box>
      </Section>

      <footer>
        <div className="container container-footer">
          <div className="block-logo" >
            <Link to="/">
              <Image source="/img/Logo3.png" alt="Аллиал" className={"logo"} />
            </Link>
          </div>
          <nav className="footer-nav">
            <ul className="navigation">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/auth">Авторизация</Link></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div >
  )
}

export default Main
