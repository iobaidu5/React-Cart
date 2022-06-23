import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const dummyData = [
    {
      id: 1,
      title: "First Book",
      price: 20,
      description: "My First Book"
    },
    {
      id: 2,
      title: "Second Book",
      price: 40,
      description: "My Second Book"
    }
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {dummyData.map((item) => (
        <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
      ))};
      </ul>
    </section>
  );
};

export default Products;
