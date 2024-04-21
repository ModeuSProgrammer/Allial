import axios from 'axios'
import { getMenuDay } from '../store/menuReducer'

export async function addFood(roles, food, title, weight) {
  try {
    const response = await axios.post(`http://localhost:7777/api/addfood`, {
      roles, food, title, weight
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    alert(response.data.message)
  } catch (error) {
    alert(error.response.data.message)
  }
}
export async function postPossition(roles, possition) {
  try {
    const response = await axios.post(`http://localhost:7777/api/possitionMenu`, {
      roles, possition
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    if (response.data.message) {
      return alert(response.data.message)
    }
    return response.data
  } catch (error) {
    alert(error.response.data.message)
  }
}

export async function CreateMenus(roles, emailChief, date, one, two, drink, dessert) {
  try {
    const response = await axios.post(`http://localhost:7777/api/create`, {
      roles, emailChief, date, one, two, drink, dessert
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    return alert(response.data.message)
  } catch (error) {
    return alert(error.response.data.message)
  }
}

export function GetMenuDay() {
  return dispatch => {
    try {
      const response = axios.get(`http://localhost:7777/api/menuday`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      const Menu = async () => {
        const datas = await response
        return dispatch(getMenuDay(datas.data.menu))
      }
      Menu()
    } catch (error) {
      console.log(error)
    }
  }
}



export async function GetMenuDayCalendar(date) {
  try {
    const response = await axios.post(`http://localhost:7777/api/menucalendar?date=${date}`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    return response.data

  } catch (error) {
    console.log(error)
  }
}
export async function DeleteMenuDay(date) {
  try {
    const response = await axios.delete(`http://localhost:7777/api/delMenu?date=${date}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    alert(response.data.message)
  }
  catch (error) {
    console.log(error)
  }
}