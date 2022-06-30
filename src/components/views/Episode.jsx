import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getEpisodeById } from '../../features/episodesSlice'
import useEpisode from '../../hooks/useEpisode'

import ComponentGrouper from '../common/ComponentGrouper'
import CharacterCard from '../cards/CharacterCard'
import BackButton from '../buttons/BackButton'

const Episode = () => {
  const [characters, setCharacters] = useState([])
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(false)

  const { getCharactersByEpisode } = useEpisode()
  const location = useParams()

  const episode = useSelector(state => state.episodes.episode)
  const isLoading = useSelector(state => state.episodes.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEpisodeById(location.episodeId))
  }, [])
  useEffect(() => {
    getAllCharacters()
  }, [episode])

  const getAllCharacters = async () => {
    if (episode.characters) {
      setIsLoadingCharacter(true)
      getCharactersByEpisode(episode).then(res => {
        setIsLoadingCharacter(false)
        if (res) setCharacters(res)
      })
    }
  }

  return (
    <section className="container-fluid">
      <BackButton />
      <div className="text-center">
        { isLoading === 'loading' && <div>Cargando...</div> }
        <h1>{ episode?.name }</h1>
        <p className="pt-4 mt-2">{ episode?.air_date }</p>
        <p>{ episode?.episode }</p>
        <h2 className="mt-2">Characters</h2>
        { isLoadingCharacter && <div>Cargando...</div> }
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
    </section>
  )
}

export default Episode
