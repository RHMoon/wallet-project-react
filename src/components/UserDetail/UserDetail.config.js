import PropTypes from 'prop-types';

const defaultProps = {
    name: "Guest"
}

const propTypes = {
    name: PropTypes.string
}

const config = {
    defaultProps,
    propTypes
}

export default config;