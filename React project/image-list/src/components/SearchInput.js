import React, { Component } from 'react'

class SearchInput extends Component {

    constructor(props){
        super(props);
        // this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            entry: ""
        };
    }

    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({entry: event.target.value});
    }

    // onInputChange(event){
    //     // console.log(event.target.value);
    //     this.setState({entry: event.target.value});
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder="search..." onChange={this.onInputChange} value={this.state.entry}/>
                            {/* <input type="text" placeholder="search..." onChange={(event) => this.setState({entry: event.target.value})} value={this.state.entry}/> */}
                            <i className="search icon" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;