import axios from 'axios';

export async function addFood(roles, food, title, weight) {
  try {
    const response = await axios.post(`http://localhost:7777/api/addfood`, {
      roles, food, title, weight
    }, {
      headers: { Authorization: `Beaerer ${localStorage.getItem('token')}` }
    })
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message)
  }
}
export async function postPossition(roles, possition) {
  try {
    console.log(roles, possition)
    const response = await axios.post(`http://localhost:7777/api/possitionMenu`, {
      roles, possition
    }, {
      headers: { Authorization: `Beaerer ${localStorage.getItem('token')}` }
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
      headers: { Authorization: `Beaerer ${localStorage.getItem('token')}` }
    })

    return alert(response.data.message)
  } catch (error) {
    return alert(error.response.data.message)
  }
}