import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
      { locations &&
        locations.map(location => (
          <div key={ location.id }>
            <h2>{ location.name }</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Locations
