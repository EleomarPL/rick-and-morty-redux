import axios from 'axios'
import { BASE_API } from '../BASE_API'

const EPISODE_API = `${BASE_API}/episode`

export const searchEpisodeByNameAxios = async (name) => {
  const response = await axios.get(`${EPISODE_API}?name=${name}`)
  return response.data
}
export const getEpisodeByIdAxios = async (id) => {
  const response = await axios.get(`${EPISODE_API}/${id}`)
  return response.data
}
