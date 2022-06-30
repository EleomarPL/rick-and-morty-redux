import styled from 'styled-components'
import PropTypes from 'prop-types'

import BaseCard from './BaseCard'

const CharacterCard = ({ character }) => {
  return (
    <BaseCard title={ character.name }
      elementTop={
        <img src={ character.image } className="card-img-top" alt={ character.name } />
      }
      link={ '/characters/' + character.id }
    >
      <p className="card-text">Status: <Span>{ character.status }</Span></p>
      <p className="card-text">Especie: <Span>{ character.species }</Span></p>
      <p className="card-text">Gender: <Span>{ character.gender }</Span></p>
    </BaseCard>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}

const Span = styled.span`
  color: var( --text-secondary)
`

export default CharacterCard
