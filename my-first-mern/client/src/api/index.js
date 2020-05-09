import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:3000/api',
// })

export const insertMovie = payload => axios.post(`/movie`, payload)
export const getAllMovies = () => axios.get(`/movies`)
export const updateMovieById = (id, payload) => axios.put(`/movie/${id}`, payload)
export const deleteMovieById = id => axios.delete(`/movie/${id}`)
export const getMovieById = id => axios.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
