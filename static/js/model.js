/**
 * @class Model
 *
 * Manages the data of the application.
 */
export default class Model {
  //не отвечает за отображение
  //описывает данные и методы по их изменению
  constructor() {
    //initial data
  }


  signUp(state) {
    console.log(state)
    console.log(this, 'up')
    const base = JSON.parse(localStorage.getItem('users')) || []
    return new Promise((resolve, reject) => {
        base.push(state)
        localStorage.setItem('users', JSON.stringify(base))
        resolve('signedUp')
      }
    )
  }

  signIn(state) {
    const base = JSON.parse(localStorage.getItem('users')) || []
    return new Promise((resolve, reject) => {
      const hash = base.reduce((init, user) => {
        init[user.email] = user.password
        return init
      }, {})
      if (hash[state.email] && hash[state.email] === state.password) {
        resolve('signin')
      } else {
        reject('error')
      }
    })
  }
}
