import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
      { characters &&
        characters.map(character => (
          <div key={ character.id }>
            <h2>{ character.name }</h2>
            <p>{ character.status }</p>
            <p>{ character.species }</p>
          </div>
        ))
      }
    </div>
  )
}

export default Characters
