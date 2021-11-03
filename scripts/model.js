/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Model {
  //не отвечает за отображение
  //описывает данные и методы по их изменению
  constructor() {
    //initial data
    this.state = {}
    this.clearState = this.clearState.bind(this)
    this.onInputChanged = this.onInputChanged.bind(this)
    this.signUp = this.signUp.bind(this)
    this.signIn = this.signIn.bind(this)
  }


  clearState() {
    this.state = {}
  }

  onInputChanged(e) {
    const {name, value} = e.target
    this.state = {...this.state, [name]: value}
  }

  signUp() {
    const base = JSON.parse(localStorage.getItem('users')) || []
    return new Promise((resolve, reject) => {
        base.push(this.state)
        localStorage.setItem('users', JSON.stringify(base))
        resolve('signedUp')
      }
    )
  }

  signIn() {
    const base = JSON.parse(localStorage.getItem('users')) || []
    return new Promise((resolve, reject) => {
      const hash = base.reduce((init, user) => {
        init[user.email] = user.password
        return init
      }, {})
      if (hash[this.state.email] && hash[this.state.email] === this.state.password) {
        resolve('signin')
      } else {
        reject('error')
      }
    })
  }

  getCards() {
    return [
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 1,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 2,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 3,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 1,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 2,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 3,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 1,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 2,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
      {
        name: 'Zachary AdkiAdkiAdki',
        avatar: "./images/avatar.png",
        status: 3,
        time: 'Thu Sept 10, 2021 4 pm – 5 pm',
        result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels'
      },
    ]
  }

}
