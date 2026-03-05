import { create } from 'zustand';
import  getData  from '../api/getMovies.js' 

const movies = await getData()

export const useMovies = create((set) => ({
    listMovies: movies
}))