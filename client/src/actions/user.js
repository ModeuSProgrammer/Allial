import axios from 'axios'

import { setUser } from "../store/userReducer"

export function login(email, password) {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:7777/api/auth`, {
        email,
        password
      })
      if (response.data.token) {
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
      }
      else {
        localStorage.removeItem('token')
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export function checkAuth() {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const response = await axios.get(`http://localhost:7777/api/check`, {

          headers: { Authorization: `Bearer ${token}` }
        })
        dispatch(setUser(response.data.user))
      }
    }
    catch (error) {
      console.error(error)
      alert(error.response.data.message)
      localStorage.removeItem('token')
    }
  }
}


export async function RegistUser(RoleID, roles, email, password) {
  try {
    const response = await axios.post(`http://localhost:7777/api/adduser`,
      { RoleID, roles, email, password },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    )
    alert(response.data.message)
  } catch (error) {
    console.error(error)
    alert('Ошибка создания пользователя')
  }
}

export async function DeleteUser(email) {
  try {
    const response = await axios.delete(`http://localhost:7777/api/adduser?email=${email}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    alert(response.data.message)
  } catch (error) {
    console.error(error)
    alert('Ошибка аутентификации')
  }
}

export async function SendCommentU(date, text) {
  try {
    const response = await axios.post(`http://localhost:7777/api/sendCom`, { date, text }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    alert(response.data.message)
  }
  catch (error) {
    console.error(error)
    alert('Ошибка Отправки')
  }
}

export async function ShowComment(date) {
  try {
    const token = localStorage.getItem('token') || 0
    if (token) {
      const response = await axios.post(`http://localhost:7777/api/showCom`, { date }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      return (response.data)
    }
  }
  catch (error) {
    console.error(error)
  }
}

export async function DelComment(roleID, IDcomment) {
  try {
    if (roleID == 3) {
      const response = await axios.delete(`http://localhost:7777/api/delCom?IDcomment=${IDcomment}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      alert(response.data.message)
    }
    else {
      alert('Ошибка роли')
    }
  }
  catch (error) {
    console.error(error)
  }
}