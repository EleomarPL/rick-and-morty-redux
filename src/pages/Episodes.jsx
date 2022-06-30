import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPage, getPreviusPage, searchByName } from '../features/episodesSlice'

import NextPageButton from '../components/buttons/NextPageButton'
import PreviusPageButton from '../components/buttons/PreviusPageButton'
import EpisodeCard from '../components/cards/EpisodeCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import GroupButtons from '../components/common/GroupButtons'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'

const Episodes = () => {
  const episodes = useSelector(state => state.episodes.value)
  const status = useSelector(state => state.episodes.status)
  const statusNext = useSelector(state => state.episodes.statusNext)
  const statusPrev = useSelector(state => state.episodes.statusPrev)
  const nextPage = useSelector(state => state.episodes.nextPage)
  const previusPage = useSelector(state => state.episodes.previusPage)
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
      <InputSearchWithDebounder namePage="Episodes"
        setSearcher={ setSearcher }
      />
      { status === 'loading' && <div>Cargando...</div> }
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
