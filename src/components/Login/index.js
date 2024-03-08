import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Login extends Component {
  state = {
    userList: [],
    website: '',
    userName: '',
    password: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      userName,
      password,
    }

    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      website: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {website, userName, password, userList} = this.state
    console.log(website)
    console.log(password)
    console.log(userName)
    console.log(userList)

    return (
      <form className="form-container" onSubmit={this.onAddContact}>
        <h1 className="form-heading">Add New Password</h1>
        <div className="form-sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="website-image"
          />
          <input
            type="text"
            id="website"
            placeholder="Enter Website"
            className="form-input"
            onChange={this.onChangeWebsite}
          />
        </div>
        <div className="form-sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
            alt="website"
            className="website-image"
          />
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            className="form-input"
            onChange={this.onChangeUserName}
          />
        </div>
        <div className="form-sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
            alt="password"
            className="website-image"
          />
          <input
            type="text"
            id="website"
            placeholder="Enter Password"
            className="form-input"
            onChange={this.onChangePassword}
          />
        </div>
        <button type="submit" className="form-button">
          Add
        </button>
      </form>
    )
  }
}

export default Login
