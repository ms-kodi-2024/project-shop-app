import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props => {

	const summary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log(`
			Name: ${props.name}
			Price: ${props.price}
			Size: ${props.size}
			Color: ${props.color}
    `);
  }
	
	return (
		<form onSubmit={summary}>
			<OptionSize sizes={props.sizes} size={props.size} setSize={props.setSize}/>
			<OptionColor colors={props.colors} color={props.color} setColor={props.setColor} />
			<Button className={styles.button} type="submit">
				<span className="fa fa-shopping-cart" />
			</Button>
		</form>
	)
};

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  setSize: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductForm;