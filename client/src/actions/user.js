import axios from 'axios'

export async function Auth(email, password) {
  try {
    const res = await axios.post(`http://localhost:7777/api/auth`, {
      email,
      password
    })
    alert('успех')
  }
  catch (err) {
    console.error(err)
    alert(err)
  }
}

export async function Regist(RoleID, email, password) {
  try {
    const res = await axios.post(`http://localhost:7777/api/auth`, {
      RoleID,
      email,
      password
    })
  }
  catch (err) {
    console.error(err)
    alert(err)
  }
}