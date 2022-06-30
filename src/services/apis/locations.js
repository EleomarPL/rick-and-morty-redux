import axios from 'axios'
import { BASE_API } from '../BASE_API'

const LOCATION_API = `${BASE_API}/location`

export const searchLocationByNameAxios = async (name) => {
  const response = await axios.get(`${LOCATION_API}?name=${name}`)
  return response.data
}
export const getLocationByIdAxios = async (id) => {
  const response = await axios.get(`${LOCATION_API}/${id}`)
  return response.data
}
