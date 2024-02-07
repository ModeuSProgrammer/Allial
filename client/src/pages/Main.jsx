import Footer from "../components/footer";
import Header from "../components/header";
import Image from "../components/Image";
import Section from "../components/section";
import Box from "../components/box";

function Main() {
  return (
    <div className="page">
      <Header />

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
              <p>Добро пожаловать в веб-приложение по организации здорового питания<br />
                для сотрудников Института Космических Исследований РАН!<br />
                <br />Мы заботимся о вашем благосостоянии и производительности, предоставляя
                <br />удобные инструменты для поддержания баланса в вашей диете.<br />
                <br />Наши рецепты, разработанные с учетом потребностей активных профессионалов, помогут вам поддерживать энергию и концентрацию на высоком уровне. </p>
              <p>Давайте вместе сделаем заботу о здоровье приятным и простым процессом, помогая вам достичь новых высот в ваших космических исследованиях!</p>
            </div>
          </div>
        </Box>
      </Section>

      <Footer />
    </div>
  );
}

export default Main;
