import PropTypes from 'prop-types'

import Icon from '../common/Icon'
import SpinnerButton from '../common/SpinnerButton'

const PreviusPageButton = ({ isLoading = false, previusPage, handlePreviusPage }) => {
  return (
    <button className="btn btn-primary align-items-center"
     disabled={ isLoading || previusPage === null }
      onClick={ handlePreviusPage }
    >
      { isLoading && <SpinnerButton /> }
      <Icon className="bi bi-caret-left-fill" />
      Previus Page
    </button>
  )
}

PreviusPageButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  previusPage: PropTypes.string,
  handlePreviusPage: PropTypes.func.isRequired
}

export default PreviusPageButton
