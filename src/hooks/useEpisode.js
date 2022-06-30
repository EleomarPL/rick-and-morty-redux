import axios from 'axios'

const useEpisode = () => {
  const getCharactersByEpisode = async (episode) => {
    const getCharacters = []
    for (const character of episode.characters) {
      const resolve = await axios.get(character)
      getCharacters.push(resolve.data)
    }
    return getCharacters
  }

  return { getCharactersByEpisode }
}

export default useEpisode
