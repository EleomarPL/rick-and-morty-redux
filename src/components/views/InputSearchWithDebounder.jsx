import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import { useEffect, useMemo } from 'react'

import Icon from '../common/Icon'

const InputSearchWithDebounder = ({ namePage, setSearcher }) => {
  const handleChanges = (event) => {
    setSearcher(event.target.value)
  }
  const handleDebouncerChanges = useMemo(() =>
    debounce(handleChanges, 1000)
  , [])

  useEffect(() => {
    return () => {
      handleDebouncerChanges.cancel()
    }
  }, [])

  return (
    <div className="container d-flex align-items-center justify-content-center mb-4">
      <Icon className="bi bi-search" withSpace={ true } />
      <label htmlFor="search" className="visually-hidden-focusable">
        Buscar:
      </label>
      <input
        type="text"
        placeholder={ `Search ${namePage}` }
        className="form-control"
        id="search"
        onChange={ handleDebouncerChanges }
      />
    </div>
  )
}

InputSearchWithDebounder.propTypes = {
  namePage: PropTypes.string.isRequired,
  setSearcher: PropTypes.func.isRequired
}

export default InputSearchWithDebounder
