import axios from 'axios';

import { setUser } from "../store/userReducer"

export function login(email, password) {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:7777/api/auth`, {
        email,
        password
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
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
      alert(error.response.data.message);
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
    alert(response.data.message);
  } catch (error) {
    console.error(error);
    alert('Ошибка создания пользователя');
  }
}

export async function DeleteUser(email) {
  try {
    const response = await axios.delete(`http://localhost:7777/api/adduser?email=${email}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    alert(response.data.message);
  } catch (error) {
    console.error(error);
    alert('Ошибка аутентификации');
  }
}
