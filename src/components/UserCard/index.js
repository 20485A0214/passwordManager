import LoginContainer from '../LoginContainer'
import YourPassword from '../YourPasswords'

import './index.css'

const UserCard = () => (
  <div className="user-card-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="app-logo"
    />
    <LoginContainer />
    <YourPassword />
  </div>
)

export default UserCard
