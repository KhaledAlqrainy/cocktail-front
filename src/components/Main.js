import React, { Component } from 'react'
import axios from 'axios'
import ApiData from './ApiData';

export class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            apiData:[],
            showData:false
        }
    }

    componentDidMount = async()=> {
        const req = await axios.get('http://localhost:3002/cocktail');
        this.setState({
            apiData:req.data,
            showData:true
        })
    };

    addingFav = async(idx)=> {
        const req = await axios.post('http://localhost:3002/cocktail/favorite', idx);

    }

    render() {
        return (
            <div>
                {this.state.showData &&
                <ApiData 
                    apiData={this.state.apiData}
                    addingFav={this.addingFav}
                />}
            </div>
        )
    }
}

export default Main
