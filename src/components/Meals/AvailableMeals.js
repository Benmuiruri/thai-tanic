import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'meal1',
    name: 'Prawns in Tamarid sauce',
    description: 'Stir fried prawns with roasted chilli',
    price: 9.99,
  },
  {
    id: 'meal2',
    name: 'Pork skewers',
    description:
      'Pork on skewer marinated with Thai spice and coconut served with peanut sauce',
    price: 19.99,
  },
  {
    id: 'meal3',
    name: 'Beef with oyster sauce ',
    description: 'Beef with mushroom, spring onion and bel pepper',
    price: 9.59,
  },
  {
    id: 'meal4',
    name: 'Pad Thai vegetarian',
    description: 'Healthy...and green...',
    price: 8.99,
  },
  {
    id: 'meal5',
    name: 'Green curry',
    description:
      'Famous Thai green curry with coconut milk, bamboo shoot and basil with your choice of chicken, beef or pork. Serve with your choice of rice or noodles',
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
