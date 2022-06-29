import PropTypes from 'prop-types'

const Icon = ({ className = '', stylesToAdd = {}, withSpace = false }) => {
  return (
    <i className={ className }
      style={ {
        color: 'var(--text-primary)',
        paddingRight: withSpace ? '0.5rem' : '0',
        ...stylesToAdd
      } }
    />
  )
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  stylesToAdd: PropTypes.object,
  withSpace: PropTypes.bool
}

export default Icon
