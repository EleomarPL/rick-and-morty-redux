import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPage, getPreviusPage, searchByName } from '../features/charactersSlice'

import NextPageButton from '../components/buttons/NextPageButton'
import PreviusPageButton from '../components/buttons/PreviusPageButton'
import CharacterCard from '../components/cards/CharacterCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'
import GroupButtons from '../components/common/GroupButtons'

const Characters = () => {
  const characters = useSelector(state => state.characters.value)
  const status = useSelector(state => state.characters.status)
  const nextPage = useSelector(state => state.characters.nextPage)
  const previusPage = useSelector(state => state.characters.previusPage)
  const dispatch = useDispatch()

  const [searcher, setSearcher] = useState('')

  useEffect(() => {
    dispatch(searchByName(searcher))
  }, [searcher])

  const handleNextPage = () => {
    dispatch(getNextPage(nextPage))
  }
  const handlePreviusPage = () => {
    dispatch(getPreviusPage(previusPage))
  }

  return (
    <div className="container-fluid">
      <InputSearchWithDebounder namePage="Characters"
        setSearcher={ setSearcher }
      />
      <GroupButtons>
        <PreviusPageButton previusPage={ previusPage }
          isLoading={ status === 'loading' }
          handlePreviusPage={ handlePreviusPage }
        />
        <NextPageButton nextPage={ nextPage }
          isLoading={ status === 'loading' }
          handleNextPage={ handleNextPage }
        />
      </GroupButtons>
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
