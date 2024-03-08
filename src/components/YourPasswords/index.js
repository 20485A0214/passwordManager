import './index.css'

const YourPassword = () => (
  <div className="your-container">
    <div className="sub-your-container">
      <div className="sub2-you-container">
        <p className="your-paragraph">Your Passwords</p>
        <button type="button" className="password-button">
          1
        </button>
      </div>
      <div className="sub2-you-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          alt="search"
          className="search-container"
        />
        <input type="search" placeholder="search" className="your-input" />
      </div>
    </div>
    <hr className="horizantal-line" />
    <div className="checkbox-container">
      <input type="checkbox" id="your-checkbox" />
      <label htmlFor="your-checkbox" className="label-paragraph">
        Show Passwords
      </label>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      alt="no passwords"
      className="no-passwords"
    />
  </div>
)

export default YourPassword
