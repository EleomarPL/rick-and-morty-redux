import axios from 'axios'

const useCharacter = () => {
  const getEpisodesByCharacter = async (character) => {
    const getEpisodes = []
    for (const episode of character.episode) {
      const resolve = await axios.get(episode)
      getEpisodes.push(resolve.data)
    }
    return getEpisodes
  }

  return { getEpisodesByCharacter }
}

export default useCharacter
