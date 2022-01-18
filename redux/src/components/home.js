import React, {Component} from 'react'
import {connect} from 'react-redux'

import {moviesList} from '../store/actions/index'
import { getUsers } from '../store/actions/index'

class Home extends Component {

    getMoviesHandler(){
        this.props.dispatch(moviesList())
    }

    getUsersHandler(){
        this.props.dispatch(getUsers())
    }

    render(){
        console.log(this.props)
        const movies = this.props.movies
        return(
            <>
                {(movies.moviesList) ? movies.moviesList.map(item=>(
                    <div key={item.id}>
                        Name: {item.name}
                    </div>
                )) : null}
                <button onClick={()=>this.getMoviesHandler()}>
                    Get movies
                </button>
                <button onClick={()=>this.getUsersHandler()}>
                    Get users
                </button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Home)
