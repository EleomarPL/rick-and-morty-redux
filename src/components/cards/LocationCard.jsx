import styled from 'styled-components'
import PropTypes from 'prop-types'

import BaseCard from './BaseCard'

const LocationCard = ({ location }) => {
  return (
    <BaseCard
      title={ location.name }
    >
      <p className="card-text">Type: <Span>{ location.type }</Span></p>
      <p className="card-text">Dimension: <Span>{ location.dimension }</Span></p>
    </BaseCard>
  )
}

LocationCard.propTypes = {
  location: PropTypes.object.isRequired
}

const Span = styled.span`
  color: var( --text-secondary)
`

export default LocationCard
