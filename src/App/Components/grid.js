import React from 'react';
import Square from './Square';

class Grid extends React.Component{

    state = {
        squares: Array(9).fill(null),
        isX: true,
        counter: 0,
        winner: null
    }

    checkWinner = () => {
        let list = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(var i = 0; i < list.length; i++) {
            if(this.state.squares[list[i][0]] && this.state.squares[list[i][0]] == this.state.squares[list[i][1]] && this.state.squares[list[i][1]] == this.state.squares[list[i][2]]) {
                this.state.winner = (this.state.isX ? 'O' : 'X');
            }
        }
    }

    handleClick(e){
        const squares = this.state.squares.slice();
        squares[e]= this.state.isX ? 'X':'O';
        this.setState({
            squares: squares,
            isX: !this.state.isX,
            counter: this.state.counter+1
        })
    }

    renderSq = (e)=>{
        return <Square  value={this.state.squares[e]}
                        onClick={()=> this.handleClick(e)} 
                        counter = {this.state.counter}
                />
    }

    render(){
        console.log(this.state.squares);
        this.checkWinner();
        if(this.state.counter == 9) window.location.reload();
        const status = 'Next Player is '+ (this.state.isX? 'X':'O');
       
        if(this.state.winner == null) {
            return (
                <div className="wrapper mt-1">
                    <h2 className="mt-1">{status}</h2>
                    <div className="board-row mt-1"> 
                        {this.renderSq(0)} {this.renderSq(1)}  {this.renderSq(2)}
                    </div>
                    <div className="board-row"> 
                        {this.renderSq(3)} {this.renderSq(4)}  {this.renderSq(5)}
                    </div>
                    <div className="board-row"> 
                        {this.renderSq(6)} {this.renderSq(7)}  {this.renderSq(8)}
                    </div>
                </div>
            );
        }
    else return <div className='mt-1'><h2>Winner is {this.state.winner} !!!!</h2></div>
    }

}

export default Grid;