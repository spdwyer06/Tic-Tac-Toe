import React, {Component} from 'react';

export default class Square extends Component{

    // Since the Square's state is being passed down through props it's not necessary to keep track of the state 
    // constructor(props){
         // All React component classes that have a constructor should start with a super(props) call
    //     super(props);
    //     this.state = {
    //         value: null
    //     };
    // }

    render(){
        return(
            // onClick set this.state.value to be X => When you click on a square an X is placed
            <button className='square' onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}