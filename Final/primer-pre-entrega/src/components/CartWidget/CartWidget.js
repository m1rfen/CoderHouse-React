import searchLogo from '../../img/search.png'
import userLogo from '../../img/user.png'
import shoppingBagLogo from '../../img/shopping-bag.png'



const CardWidget = () => {
  return (
    <nav>
      <ul>
        <a href="#SEARCH">
          <li>
            <img src={searchLogo} alt="" />
          </li>
        </a>
        <a href="#USER">
          <li>
            <img src={userLogo} alt="" />
          </li>
        </a>
        <a href="#CART">
          <li>
            <img src={shoppingBagLogo} alt="" />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default CardWidget;
