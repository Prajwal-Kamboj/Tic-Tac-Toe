import React from 'react';
import Grid from './Components/grid';

class App extends React.Component{

    render(){
        return <div className='game'>
            <h1><b>TIC TAC TOE</b></h1>
            <Grid/>
        </div>;
    }
}

export default App;