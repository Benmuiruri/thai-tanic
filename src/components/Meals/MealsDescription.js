import classes from './MealsDescription.module.css' 

const MealsDescription = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Thai Food, Delivered to your doorstep </h2>
      <p>
        Thai Tanic Food App specializes in delivering authentic Thai cuisine,
        with the credo being five-star food at three-star prices.
      </p>
      <p>
        Popular meals include the som tam, a spicy salad made from papaya, and
        red and green curries. The curries are made using coriander, Thai ginger
        and lime leaves giving each dish a unique and delicious flavour.
      </p>
      <p>
        Thai Tanic also offers a number of spicy and non-spicy noodles. The
        soups on the menu include tom yum, sweet and sour, and tom kha gai.
      </p>
    </section>
  );
};

export default MealsDescription;
