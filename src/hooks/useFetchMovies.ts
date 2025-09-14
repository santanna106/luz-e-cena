import React, { useEffect, useState } from 'react'
import type { Movie } from '../types';
import { getMovies } from '../api';

export const useFetchMovies = () => {




    const [movies, setMovie] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const movies = await getMovies();
            setMovie(movies)
        } catch (error) {
            setError("Erro ao buscar filmes. Tente novamente");
            console.error(error);
        } finally {
            setIsLoading(false);
        }

        return

    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return { movies, isLoading, error };

}

