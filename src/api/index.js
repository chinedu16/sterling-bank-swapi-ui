
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


async function listPlanet() {
  const response = await axios.get(`${baseUrl}/planets/`)
  return response
}

async function planetNext (url) {
  const response = await axios.get(url)
  return response
}

async function planetPrev (url) {
  const response = await axios.get(url)
  return response
}


async function planetSearch(search) {
  const response = await axios.get(`${baseUrl}/planets/?search=${search}`)
  return response
}

async function characterSearch(search) {
  const response = await axios.get(`${baseUrl}/people/?search=${search}`)
  return response
}

async function starshipSearch(search) {
  const response = await axios.get(`${baseUrl}/starships/?search=${search}`)
  return response
}

export default {
  listStarship,
  starshipNext,
  starshipPrev,
  starshipSearch,

  listCharacter,
  characterNext,
  characterPrev,
  characterSearch,

  listPlanet,
  planetNext,
  planetPrev,
  planetSearch

}
