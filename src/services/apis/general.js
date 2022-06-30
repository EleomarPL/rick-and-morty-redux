import axios from 'axios'

export const getNextPageAxios = async (nextPage) => {
  const response = await axios.get(`${nextPage}`)
  return response.data
}
export const getPreviusPageAxios = async (previusPage) => {
  const response = await axios.get(`${previusPage}`)
  return response.data
}
