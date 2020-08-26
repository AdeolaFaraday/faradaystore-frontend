import Carousel from './react-carousel';

const Header = () => {
    return (
<body>
    <nav>
      <div className="shop-title" onclick="toggleNav()">
        <h3>faradayStore</h3>
      </div>
        <ul class="nav-links">
          <li className="nav-item">Signin</li>
          <li className="nav-item">Shop</li>
          <li className="nav-item">Cart</li>
        </ul>
    </nav>
      {/* <Carousel /> */}
  </body>
    );
};

export default Header;
