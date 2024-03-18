const SET_MENU_DAY = "SET_POSSITION"

const defaultState = {
  menu: {
    date: null,
    First: null,
    Second: null,
    Dessert: null,
    Drink: null,
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_MENU_DAY: return { ...state, menu: action.payload }

    default:
      return state
  }
}

export const getMenuDay = (menuDay) => ({ type: SET_MENU_DAY, payload: menuDay })
