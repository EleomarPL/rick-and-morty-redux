import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CharacterCard from '../components/cards/CharacterCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'
import { searchByName } from '../features/charactersSlice'

const Characters = () => {
  const characters = useSelector(state => state.characters.value)
  const status = useSelector(state => state.characters.status)
  const dispach = useDispatch()

  const [searcher, setSearcher] = useState('')

  useEffect(() => {
    dispach(searchByName(searcher))
  }, [searcher])

  return (
    <div className="container-fluid">
      <InputSearchWithDebounder namePage="Personaje"
        setSearcher={ setSearcher }
      />
      { status === 'loading' && <div>Cargando...</div> }
      <ComponentGrouper>
        { characters &&
          characters.map(character => (
            <CharacterCard key={ character.id }
              character={ character }
            />
          ))
        }
      </ComponentGrouper>
    </div>
  )
}

export default Characters
