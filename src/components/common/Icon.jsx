import PropTypes from 'prop-types'

const Icon = ({ className = '', styles = {} }) => {
  return (
    <i className={ className }
      style={ {
        color: 'var(--text-primary)',
        ...styles
      } }
    />
  )
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  styles: PropTypes.object
}

export default Icon
