import styles from './ProductImage.module.scss';

const ProductImage = props => (
	<img 
		className={styles.image}
		alt={props.title}
		src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
)

export default ProductImage;