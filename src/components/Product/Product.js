import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]['name']);
  
  const getPrice = () => {
    const selectedSize = props.sizes.find(size => size.name === currentSize);
    return props.basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  }

  const price = getPrice();
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={props.title} name={props.name} color={currentColor} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm name={props.name} sizes={props.sizes} size={currentSize} setSize={setCurrentSize} colors={props.colors} color={currentColor} setColor={setCurrentColor} price={price} />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
