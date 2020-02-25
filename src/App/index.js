import React from 'react';
import Grid from './Components/grid';

class App extends React.Component{

    render(){
        return <div className='game'>
            <h1><b>TIC TAC TOE</b></h1>
            {/* <img width='300px' src={'https://www.pngkey.com/png/full/205-2056860_oh-my-god-tic-tac-toe-logo.png'}/> */}
            <Grid/>
        </div>;
    }
}

export default App;