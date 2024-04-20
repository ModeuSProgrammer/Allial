import React from "react";
import Section from "./section";
import Box from "./box";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMenuDay } from "../actions/menu";

const MenuD = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetMenuDay())
  }, [dispatch])

  const date = new Date()
  const day = date.getDate()
  const mounth = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1)
  const yaer = date.getFullYear()
  const DateMenu = day + '.' + mounth + '.' + yaer

  const menu = useSelector(state => state.menu.menu)
  const first = useSelector(state => state.menu.menu.First)
  const second = useSelector(state => state.menu.menu.Second)
  const dessert = useSelector(state => state.menu.menu.Dessert)
  const drink = useSelector(state => state.menu.menu.Drink)

  return (
    <div>
      <Section className="section section-single">
        <Box className="box box-main-two">
          <div className="container-one">
            <div className="container-list">
              <h2>Меню на день</h2>
              {menu.first != undefined ? (
                <div className="list-menu-day">
                  <div>
                    <h5>Первое</h5>
                    <h5>Второе</h5>
                    <h5>Напиток</h5>
                    <h5>Десерт</h5>
                    <br />
                    <h5>Дата</h5>
                  </div>
                  <div className="list-menu-value">
                    <h5>{first}</h5>
                    <h5>{second}</h5>
                    <h5>{dessert}</h5>
                    <h5>{drink}</h5>
                    <br />
                    <h5>{DateMenu}</h5>
                  </div>
                </div>
              ) : (
                <div className="list-menu-day">
                  <div>
                    <h5>Первое</h5>
                    <h5>Второе</h5>
                    <h5>Напиток</h5>
                    <h5>Десерт</h5>
                    <br />
                    <h5>Дата</h5>
                  </div>
                  <div className="list-menu-value">
                    <h5>-</h5>
                    <h5>-</h5>
                    <h5>-</h5>
                    <h5>-</h5>
                    <br />
                    <h5>{DateMenu}</h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Section>
    </div>
  )
}

export default MenuD