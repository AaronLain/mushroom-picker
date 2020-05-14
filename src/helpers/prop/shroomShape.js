import PropTypes from 'prop-types';

const shroomShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isMagic: PropTypes.bool.isRequired,
  isPoisonous: PropTypes.bool.isRequired,
  isDeadly: PropTypes.bool.isRequired,
  inBasket: PropTypes.bool.isRequired,
});

export default { shroomShape };
