import React from "react";
import Section from "./section";
import Box from "./box";

class MenuD extends React.Component {
  render() {
    return (
      <div>
        <Section className="section section-single">
          <Box className="box box-main-two">
            <div className="container-one">
              <div className="container-list">
                <h2>Меню на день</h2>
                <div className="list-menu-day">
                  <div className="list-menu-title">
                    <h5>Первое</h5>
                    <h5>Второе</h5>
                    <h5>Напиток</h5>
                    <h5>Десерт</h5>
                    <h5>Дополнительно</h5>
                    <h5>Дата</h5>
                  </div>
                  <div className="list-menu-value">
                    <h5>1</h5>
                    <h5>2</h5>
                    <h5>3</h5>
                    <h5>4</h5>
                    <h5>5</h5>
                    <h5>6 </h5>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Section>
      </div>
    )
  }
}

export default MenuD