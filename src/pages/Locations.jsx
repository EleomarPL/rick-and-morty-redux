import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LocationCard from '../components/cards/LocationCard'
import ComponentGrouper from '../components/common/ComponentGrouper'

import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'
import { searchByName } from '../features/locationsSlice'

const Locations = () => {
  const locations = useSelector(state => state.locations.value)
  const status = useSelector(state => state.locations.status)
  const dispatch = useDispatch()

  const [searcher, setSearcher] = useState('')

  useEffect(() => {
    dispatch(searchByName(searcher))
  }, [searcher])

  return (
    <div className="container-fluid">
      <InputSearchWithDebounder namePage="Locacione"
        setSearcher={ setSearcher }
      />
      { status === 'loading' && <div>Cargando...</div> }
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
