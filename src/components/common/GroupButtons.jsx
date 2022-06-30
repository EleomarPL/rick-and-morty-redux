import PropTypes from 'prop-types'

const GroupButtons = ({ children }) => {
  return (
    <div className="d-flex justify-content-between my-2">
      {children}
    </div>
  )
}

GroupButtons.propTypes = {
  children: PropTypes.node.isRequired
}

export default GroupButtons
