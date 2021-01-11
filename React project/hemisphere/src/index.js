import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from "./HemisphereDisplay";

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     );

//     return (
//         <div>
//             Latitude: {position.coords.GeolocationCoordinates.latitude}
//         </div>
//     )
// }

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            latitude: null,
            errorMessage: ""
        }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position);
                this.setState({latitude: position.coords.latitude});
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }
    componentDidUpdate(){
        console.log("component did update")
    }

    render(){
        if(this.state.errorMessage && !this.state.latitude){
            return (
                <div> {this.state.errorMessage} </div>
            )
        }
        else if(!this.state.errorMessage && this.state.latitude){
            return (
                <div><HemisphereDisplay latitude={this.state.latitude}/></div>
            )
        }
        else{
            return (
                <div>Loading...</div>
            )
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)