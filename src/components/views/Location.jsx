import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getLocationById } from '../../features/locationsSlice'
import useLocation from '../../hooks/useLocation'

import BackButton from '../buttons/BackButton'
import ComponentGrouper from '../common/ComponentGrouper'
import CharacterCard from '../cards/CharacterCard'

const Location = () => {
  const [characters, setCharacters] = useState([])
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(false)

  const { getCharactersByLocation } = useLocation()
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
      getCharactersByLocation(location).then(res => {
        setIsLoadingCharacter(false)
        if (res) setCharacters(res)
      })
    }
  }
  return (
    <section className="container-fluid">
      <BackButton />
      <div className="text-center">
      { isLoading === 'loading' && <div>Loading...</div> }
        <h1>{ location?.name }</h1>
        <p className="pt-4 mt-2">{ location?.type }</p>
        <p>{ location?.dimention }</p>
        <h2 className="mt-2">Characters</h2>
        { isLoadingCharacter && <div>Loading...</div> }
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
