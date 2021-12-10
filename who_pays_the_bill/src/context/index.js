import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';

const MyContext = React.createContext();

class MyProvider extends Component {
    
    state = {
        stage: 1,
        players: [],
        result: ''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState)=>({
            players:[...prevState.players, name]
        }))
    }

    removePlayerHandler = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx, 1)
        this.setState({
            players: newArray
        })
    }

    nextHandler = () => {
        const {players} = this.state

        if(players.length < 2){
            toast.error("You need more than one player", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 1500
            })
        } else {
            this.setState({
                stage: 2
            }, ()=>{
                setTimeout(()=>{
                    this.generateLoser()
                }, 1000)
            })
        }
    }

    generateLoser = () => {
        const {players} = this.state;
        this.setState({
            result: players[Math.floor(Math.random() * players.length)]
        })
    }

    resetGame = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ""
        })
    }

    render(){
        return(
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addPlayerHandler: this.addPlayerHandler,
                    removePlayerHandler: this.removePlayerHandler,
                    nextHandler: this.nextHandler,
                    getNewLoser: this.generateLoser,
                    resetGame: this.resetGame
                }}>
                    {this.props.children}
                </MyContext.Provider>
                <ToastContainer/>
            </>
        )
    }

}

export{
    MyContext, 
    MyProvider
}
