import React from "react";
import Section from "./section";
import Box from "./box";

class CreateMenu extends React.Component {
  render() {

    return (
      <div>
        <Section className="section section-single">
          <Box className="box box-main-two">
            <div className="container-one">
              <div className="container-create-menu">
                <h2>Планирование меню на день</h2>
                <form>
                  <div className="crate-menu-date">
                    <input type="date" />
                  </div>
                  <div className="create-menu-list">
                    <div className="create-menu-title">
                      <h5>Первое</h5>
                      <h5>Второе</h5>
                      <h5>Напиток</h5>
                      <h5>Десерт</h5>
                    </div>
                    <div className="create-menu-selects">
                      <select>
                        <option>1</option>
                      </select>
                      <select>
                        <option>1</option>
                      </select>
                      <select>
                        <option>1</option>
                      </select>
                      <select>
                        <option>1</option>
                      </select>
                    </div>
                    <div className="create-menu-button">
                      <button>Удалить</button>
                      <button>Создать</button>
                    </div>
                  </div>
                  <div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Section>
      </div>
    )
  }
}

export default CreateMenu