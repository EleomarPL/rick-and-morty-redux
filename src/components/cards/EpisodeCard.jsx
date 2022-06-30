import styled from 'styled-components'
import PropTypes from 'prop-types'

import BaseCard from './BaseCard'

const EpisodeCard = ({ episode }) => {
  return (
    <BaseCard
      title={ episode.name }
    >
      <p className="card-text">Air_date: <Span>{ episode.air_date }</Span></p>
      <p className="card-text">Episode: <Span>{ episode.episode }</Span></p>
    </BaseCard>
  )
}

EpisodeCard.propTypes = {
  episode: PropTypes.object.isRequired
}

const Span = styled.span`
  color: var( --text-secondary)
`

export default EpisodeCard
