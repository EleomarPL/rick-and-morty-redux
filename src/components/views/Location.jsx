import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import BackButton from '../buttons/BackButton'
import { getLocationById } from '../../features/locationsSlice'

import axios from 'axios'
import ComponentGrouper from '../common/ComponentGrouper'
import CharacterCard from '../cards/CharacterCard'

const Location = () => {
  const [characters, setCharacters] = useState([])
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(false)
  const { locationId } = useParams()

  const location = useSelector(state => state.locations.location)
  const isLoading = useSelector(state => state.episodes.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocationById(locationId))
  }, [])
  useEffect(() => {
    getAllCharacters()
  }, [location])

  const getAllCharacters = async () => {
    if (location.residents) {
      setIsLoadingCharacter(true)
      const getCharacters = []
      for (const character of location.residents) {
        const resolve = await axios.get(character)
        getCharacters.push(resolve.data)
      }
      setCharacters(getCharacters)
      setIsLoadingCharacter(false)
    }
  }
  return (
    <section className="container-fluid">
      <BackButton />
      <div className="text-center">
      { isLoading === 'loading' && <div>Cargando...</div> }
        <h1>{ location?.name }</h1>
        <p className="pt-4 mt-2">{ location?.type }</p>
        <p>{ location?.dimention }</p>
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

export default Location
