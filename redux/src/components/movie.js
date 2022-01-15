import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import { movieData } from "../store/actions" 

const Movie = (props) => {

    const movies = useSelector(state=>state.movies)
    const dispatch = useDispatch()

    const getMovie = () => {
        dispatch(movieData())
    }

    console.log(movies)
    return(
        <>
            {movies.movieData ? 
                <div>
                    Name: {movies.movieData.name} <br/>
                    Director: {movies.movieData.director} <br/>
                    Year: {movies.movieData.year} <br/>
                </div>
            : null}
            <button onClick={()=>getMovie()}>
                Get movie
            </button>
        </>
    )
}

export default Movie

// import React from "react"
// import {connect} from 'react-redux'

// const Movie = (props) => {
//     console.log(props)
//     return(
//         <>
//             Movie
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         movies: state.movies
//     }
// }

// export default connect(mapStateToProps)(Movie)
