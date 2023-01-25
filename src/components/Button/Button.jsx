import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={loadMore}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
