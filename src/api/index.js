
import axios from 'axios'

const baseUrl = 'https://swapi.co/api'


async function listStarship () {
  const response = await axios.get(`${baseUrl}/starships/`)
  return response
}

async function starshipNext (url) {
  const response = await axios.get(url)
  return response
}

async function starshipPrev (url) {
  const response = await axios.get(url)
  return response
}

async function listCharacter() {
  const response = await axios.get(`${baseUrl}/people/`)
  return response
}

async function characterNext (url) {
  const response = await axios.get(url)
  return response
}

async function characterPrev (url) {
  const response = await axios.get(url)
  return response
}


export default {
  listStarship,
  starshipNext,
  starshipPrev,

  listCharacter,
  characterNext,
  characterPrev,

}
