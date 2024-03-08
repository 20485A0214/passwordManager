import Login from '../Login'
import './index.css'

const LoginContainer = () => (
  <div className="login-main-container">
    <Login />
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
      alt="password manager"
      className="main-image-container"
    />
  </div>
)

export default LoginContainer
