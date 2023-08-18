import React,{useState,createContext, useContext} from 'react';

export const MovieContext=createContext();

export const MovieProvider=(props)=>{
    const[movies,setMovies]=useState();
    return(
        <MovieContext.Provider value={{movies,setMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
};
export function useMovieContext(){
    return useContext(MovieContext);
}