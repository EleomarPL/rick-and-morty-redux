import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPage, getPreviusPage, searchByName } from '../features/locationsSlice'

import NextPageButton from '../components/buttons/NextPageButton'
import PreviusPageButton from '../components/buttons/PreviusPageButton'
import LocationCard from '../components/cards/LocationCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import GroupButtons from '../components/common/GroupButtons'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'

const Locations = () => {
  const locations = useSelector(state => state.locations.value)
  const status = useSelector(state => state.locations.status)
  const statusNext = useSelector(state => state.locations.statusNext)
  const statusPrev = useSelector(state => state.locations.statusPrev)
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
      { status === 'loading' && <div>Loading...</div> }
      <GroupButtons>
        <PreviusPageButton previusPage={ previusPage }
          isLoading={ statusPrev === 'loading' }
          handlePreviusPage={ handlePreviusPage }
        />
        <NextPageButton nextPage={ nextPage }
          isLoading={ statusNext === 'loading' }
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
