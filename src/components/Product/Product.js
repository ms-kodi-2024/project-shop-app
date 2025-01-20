import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]['name']);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const selectedSize = props.sizes.find(size => size.name === currentSize);
    return props.basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  }

  const summary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log(`
        Name: ${props.name}
        Price: ${getPrice()}
        Size: ${currentSize}
        Color: ${currentColor}
      `);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx(size.name === currentSize && styles.active)}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" onClick={summary}/>
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
