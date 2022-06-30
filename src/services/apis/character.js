import axios from 'axios'
import { BASE_API } from '../BASE_API'

const CHARACTER_API = `${BASE_API}/character`

export const searchCharacterByNameAxios = async (name) => {
  const response = await axios.get(`${CHARACTER_API}?name=${name}`)
  return response.data
}
export const getCharacterByIdAxios = async (id) => {
  const response = await axios.get(`${CHARACTER_API}/${id}`)
  return response.data
}
