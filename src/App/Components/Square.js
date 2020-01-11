import React from 'react';
import './index.css';

class Square extends React.Component{

  
    render = () => {
        return (
            <div className='square'> 
                <button 
                    className="button"  
                    onClick={() => this.props.onClick()}
                    disabled= {this.props.value===null ?false:true}
                >
                    {this.props.value}
                </button>
            </div>
        );
    }
}



export default Square;