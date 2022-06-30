import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NextPageButton from '../components/buttons/NextPageButton'
import PreviusPageButton from '../components/buttons/PreviusPageButton'
import LocationCard from '../components/cards/LocationCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import GroupButtons from '../components/common/GroupButtons'

import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'
import { getNextPage, getPreviusPage, searchByName } from '../features/locationsSlice'

const Locations = () => {
  const locations = useSelector(state => state.locations.value)
  const status = useSelector(state => state.locations.status)
  const nextPage = useSelector(state => state.locations.nextPage)
  const previusPage = useSelector(state => state.locations.previusPage)
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
      <InputSearchWithDebounder namePage="Locations"
        setSearcher={ setSearcher }
      />
      { status === 'loading' && <div>Cargando...</div> }
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
      <ComponentGrouper>
        { locations &&
          locations.map(location => (
            <LocationCard key={ location.id }
              location={ location }
            />
          ))
        }
      </ComponentGrouper>
    </div>
  )
}

export default Locations
