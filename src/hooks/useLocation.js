import axios from 'axios'

const useLocation = () => {
  const getCharactersByLocation = async (location) => {
    const getCharacters = []
    for (const character of location.residents) {
      const resolve = await axios.get(character)
      getCharacters.push(resolve.data)
    }
    return getCharacters
  }

  return { getCharactersByLocation }
}

export default useLocation
