import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import BackButton from '../buttons/BackButton'
import { getCharacterById } from '../../features/charactersSlice'
import ComponentGrouper from '../common/ComponentGrouper'
import EpisodeCard from '../cards/EpisodeCard'

const Character = () => {
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false)
  const [episodes, setEpisodes] = useState([])
  const { characterId } = useParams()

  const character = useSelector(state => state.characters.character)
  const isLoading = useSelector(state => state.characters.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacterById(characterId))
  }, [])
  useEffect(() => {
    getAllEpisodes()
  }, [character])

  const getAllEpisodes = async () => {
    console.log({ character })
    if (character.episode) {
      setIsLoadingEpisodes(true)
      const getEpisodes = []
      for (const episode of character.episode) {
        const resolve = await axios.get(episode)
        getEpisodes.push(resolve.data)
      }
      setEpisodes(getEpisodes)
      setIsLoadingEpisodes(false)
    }
  }
  return (
    <section className="container-fluid">
      <BackButton />
      <div className="text-center">
      { isLoading === 'loading' && <div>Cargando...</div> }
        <h1>{ character?.name }</h1>
        <p className="pt-4 mt-2">{ character?.status }</p>
        <p>{ character?.species }</p>
        <p>{ character?.gender }</p>
        <h2 className="mt-2">Origin</h2>
        <p className="pt-4 mt-2">{ character?.origin?.name }</p>
        <h2 className="mt-2">Episodes</h2>
        { isLoadingEpisodes && <div>Cargando...</div> }
        <ComponentGrouper>
          { episodes &&
            episodes.map(episode => (
              <EpisodeCard
                key={ episode.id }
                episode={ episode }
              />
            ))
          }
        </ComponentGrouper>
      </div>
    </section>
  )
}

export default Character
