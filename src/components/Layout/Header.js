import foodImg from '../../assets/meals.jpg';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Thai Tanic</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={foodImg} alt='some Thai food' />
      </div>
    </>
  );
};

export default Header;
