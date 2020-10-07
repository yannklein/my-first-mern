import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:3000/api',
// })

const api = axios;

export const insertMovie = payload => api.post(`/api/movies`, payload)
export const getAllMovies = () => api.get(`/api/movies`)
export const updateMovieById = (id, payload) => api.put(`/api/movies/${id}`, payload)
export const deleteMovieById = id => api.delete(`/api/movies/${id}`)
export const getMovieById = id => api.get(`/api/movies/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
