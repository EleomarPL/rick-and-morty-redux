import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import EpisodeCard from '../components/cards/EpisodeCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'
import { searchByName } from '../features/episodesSlice'

const Episodes = () => {
  const episodes = useSelector(state => state.episodes.value)
  const status = useSelector(state => state.episodes.status)
  const dispatch = useDispatch()

  const [searcher, setSearcher] = useState('')

  useEffect(() => {
    dispatch(searchByName(searcher))
  }, [searcher])

  return (
    <div className="container-fluid">
      <InputSearchWithDebounder namePage="Episodio"
        setSearcher={ setSearcher }
      />
      { status === 'loading' && <div>Cargando...</div> }
      <ComponentGrouper>
        { episodes &&
          episodes.map(episode => (
            <EpisodeCard key={ episode.id }
              episode={ episode }
            />
          ))
        }
      </ComponentGrouper>
    </div>
  )
}

export default Episodes
