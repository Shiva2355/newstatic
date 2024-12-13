import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">RA</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://tse4.mm.bing.net/th?id=OIP.tqItO6wCQ43d52PeqHpJFwHaHa&pid=Api&P=0&h=180"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://tse1.mm.bing.net/th?id=OIP.ojSptg-wJn-FjNqPY6_NPAHaHa&pid=Api&P=0&h=180"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header