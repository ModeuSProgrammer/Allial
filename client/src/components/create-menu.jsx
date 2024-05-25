import React, { useEffect, useState } from "react"
import Section from "./section"
import Box from "./box"

import { postPossition, CreateMenus } from "../actions/menu"
import { useDispatch, useSelector } from "react-redux"

const CreateMenu = () => {
  const dispatch = useDispatch()
  let UserRoleID = useSelector(state => state.user.currentUser.RoleID)
  let UserEmail = useSelector(state => state.user.currentUser.email)

  //получение title
  const [valueListOne, SetList1] = useState("")
  const [valueListTwo, SetList2] = useState("")
  const [valueListThree, SetList3] = useState("")
  const [valueListFour, SetList4] = useState("")

  const [MenuDay, SetDayMenu] = useState("")
  // для установки списка
  const [possitionMenu1, setPossitionMenu1] = useState([])
  const [possitionMenu2, setPossitionMenu2] = useState([])
  const [possitionMenu3, setPossitionMenu3] = useState([])
  const [possitionMenu4, setPossitionMenu4] = useState([])
  // для получения списка
  useEffect(() => {
    postPossition(UserRoleID, 1).then(setPossitionMenu1).catch(console.error)
    postPossition(UserRoleID, 2).then(setPossitionMenu2).catch(console.error)
    postPossition(UserRoleID, 3).then(setPossitionMenu3).catch(console.error)
    postPossition(UserRoleID, 4).then(setPossitionMenu4).catch(console.error)
  }, [])

  // для изменения списка
  const handleSelectChange1 = (e) => { SetList1(e.target.value) }
  const handleSelectChange2 = (e) => { SetList2(e.target.value) }
  const handleSelectChange3 = (e) => { SetList3(e.target.value) }
  const handleSelectChange4 = (e) => { SetList4(e.target.value) }

  return (
    <Section className="section section-single">
      <Box className="box">
        <div className="container-one">
          <div className="container-create-menu">
            <h2>Планирование меню на день</h2>
            <form onSubmit={(e) => { e.preventDefault(); CreateMenus(UserRoleID, UserEmail, MenuDay, valueListOne, valueListTwo, valueListThree, valueListFour) }} >
              <div className="crate-menu-date">
                <input type="date" value={MenuDay} onChange={(e) => SetDayMenu(e.target.value)} required />
              </div>
              <div className="create-menu-list">
                <div className="create-menu-title">
                  <h5>Первое</h5>
                  <h5>Второе</h5>
                  <h5>Напиток</h5>
                  <h5>Десерт</h5>
                </div>
                <div className="create-menu-selects">
                  <select value={valueListOne} onChange={handleSelectChange1} required>
                    <option> </option>
                    {possitionMenu1.map((value, index) => (
                      <option key={index}>{value}</option>
                    ))}
                  </select>

                  <select value={valueListTwo} onChange={handleSelectChange2} required>
                    <option> </option>
                    {possitionMenu2.map((value, index) => (
                      <option key={index}>{value}</option>
                    ))}
                  </select>

                  <select value={valueListThree} onChange={handleSelectChange3} required>
                    <option> </option>
                    {possitionMenu3.map((value, index) => (
                      <option key={index}>{value}</option>
                    ))}
                  </select>

                  <select value={valueListFour} onChange={handleSelectChange4} required>
                    <option> </option>
                    {possitionMenu4.map((value, index) => (
                      <option key={index}>{value}</option>
                    ))}
                  </select>
                </div>
                <div className="create-menu-button">
                  <input type="submit" text="Cоздать" className="button" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Section >
  )
}

export default CreateMenu