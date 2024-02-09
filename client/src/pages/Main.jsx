import Image from "../components/Image";
import Section from "../components/section";
import Box from "../components/box";

function Main() {
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

      <Section className="section section-one">
        <Box className="box box-main">
          <div className="container-one">
          </div>
        </Box>
      </Section>

      <Section className="section section-two">
        <Box className="box">
          <div className="container-two">
            <Image source="/img/logo.png" alt="Аллиал" className={"logo"} />
            <div className="block block-content-pink-one">
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

    </div >
  );
}

export default Main;
