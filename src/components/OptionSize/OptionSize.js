import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => (
	<div className={styles.sizes}>
	<h3 className={styles.optionLabel}>Sizes</h3>
	<ul className={styles.choices}>
		{props.sizes.map(size => (
			<li key={size.name}>
				<button
					type="button"
					className={clsx(size.name === props.size && styles.active)}
					onClick={() => props.setSize(size.name)}
				>
					{size.name}
				</button>
			</li>
		))}
	</ul>
</div>
)

OptionSize.propTypes = {
	sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
	size: PropTypes.string.isRequired,
	setSize: PropTypes.func.isRequired,
}

export default OptionSize;