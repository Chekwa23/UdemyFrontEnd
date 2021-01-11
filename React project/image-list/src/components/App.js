import React, { Component } from 'react';
import axios from "axios";
import ImageList from "./ImageList";
import SearchInput from "./SearchInput";

class App extends Component{

    constructor(props){
        super(props);

        // this.onSearchSubmit = this.onSearchSubmit.bind(this);

        this.state = {
            images: []
        }
    }

    // async onSearchSubmit (entry){
    //     const response = await axios.get(`https://pixabay.com/api/?key=19839667-560112778ad5883963488b66a&q=${entry}&image_type=photo`);
    //     this.setState({images: response.data.hits});
    // }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=19839667-560112778ad5883963488b66a&q=${entry}&image_type=photo`);
        this.setState({images: response.data.hits});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: "30px"}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;