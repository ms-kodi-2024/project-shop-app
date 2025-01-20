import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const handleSizeChange = size => setCurrentSize(size);
  const handleColorChange = color => setCurrentColor(color);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`Kodilla shirt in ${currentColor}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
          <p>Selected size: {currentSize}</p>
          <p>Selected color: {currentColor}</p>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
                <li key={size}>
                  <button 
                    type="button" 
                    className={clsx({ [styles.active]: currentSize === size })}
                    onClick={() => handleSizeChange(size)}>
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => (
                <li key={color}>
                  <button 
                    type="button" 
                    className={clsx(styles[`color${color}`], { [styles.active]: currentColor === color })}
                    onClick={() => handleColorChange(color)}>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
