import PropTypes from 'prop-types';

const Star = ({selected = false, onClick = f => f}) =>
    <div className={(selected) ? 'star selected' : 'star'} onClick={onClick}>
    </div>;

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

Star.displayName = 'Star';

export default Star;
