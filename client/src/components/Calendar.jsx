import React, { useEffect, useState } from "react";
import Section from "./section";
import Box from "./box";
import { useDispatch, useSelector } from "react-redux";
import { GetMenuDayCalendar } from "../actions/menu";

const Calendar = () => {
  const date = new Date()
  //Для отображение дат календаря
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const countCalendarDate = new Date(y, m, 0).getDate()
  console.log(countCalendarDate)

  //отображение месяца
  const month = date.getMonth()
  const Month = (num) => {
    switch (num) {
      case 0: return "Январь"
      case 1: return "Февраль"
      case 2: return "Март"
      case 3: return "Апрель"
      case 4: return "Май"
      case 5: return "Июнь"
      case 6: return "Июль"
      case 7: return "Август"
      case 8: return "Сентябрь"
      case 9: return "Октябрь"
      case 10: return "Ноябрь"
      case 11: return "Декабрь"
      default: return "Месяц"
    }
  }
  //Для смены меню
  let DateMenu
  const [Menu, SetMenu] = useState('')
  const [flag, SetFlag] = useState(true) // переключатель блоков
  const MenuCalendar = async (days) => {
    let day = days < 10 ? ('0' + days) : (days)
    const mounth = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1)
    const yaer = date.getFullYear()
    DateMenu = yaer + '-' + mounth + '-' + day
    SetFlag(false)
    const val = await GetMenuDayCalendar(DateMenu)
    SetMenu(val)
  }
  return (
    <div>
      {flag ? (
        <div>
          <Section className="section section-two">
            <Box className="box">
              <div className="calendar-numbers">
                <h2>{Month(month)}</h2>
                <div className="calendar-button">
                  {Array.from({ length: countCalendarDate }, (_, index) => (
                    <h6 key={index} className="calendar-number" onClick={() => MenuCalendar(index + 1)} >{index + 1}</h6>
                  ))}
                </div>
              </div>
            </Box>
          </Section>
        </div >
      ) : (
        <div>
          <Section className="section section-changer">
            <Box className="box">
              <div className="block-menu-calendar">
                <h2>Меню</h2>
                <h4>{DateMenu}</h4>
                <div className="block-menu-calendar-info">
                  {Menu != '' ? (
                    <div className="list-menu-day">
                      <div>
                        <h5>Первое</h5>
                        <h5>Второе</h5>
                        <h5>Десерт</h5>
                        <h5>Напиток</h5>
                      </div>
                      <div className="list-menu-value">
                        <h5>{console.log(Menu)}</h5>
                        <h5>{Menu.First}</h5>
                        <h5>{Menu.Second}</h5>
                        <h5>{Menu.Dessert}</h5>
                        <h5>{Menu.Drink}</h5>
                      </div>
                    </div>
                  ) : (
                    <div className="list-menu-day">
                      <h5> Меню на данный день нет</h5>
                    </div>
                  )}
                </div>
                <button className="button" onClick={() => { SetFlag(true); SetMenu('') }}>Назад</button>
              </div>
            </Box>
          </Section>
        </div>
      )}
    </div>
  )
}

export default Calendar