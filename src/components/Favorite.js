import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FormModal from './FormModal'
import FavCards from './FavCards'

class FavFlowers extends React.Component {

  constructor(props){
    super(props);
    this.state={
      apiCrudData:[],
      showCrud:false,
      updateData:{},
      showModal:false
    }
  }

  
  componentDidMount = async()=> {
    const req = await axios.get('http://localhost:3002/cocktail/favorite');
    this.setState({
        apiCrudData:req.data,
        showCrud:true
    })
};

  deleteFav = async(id)=> {
    await axios.delete(`http://localhost:3002/cocktail/favorite/${id}`);
    const items = this.state.apiCrudData.filter(i => i._id !== id)
    this.setState({
      apiCrudData:items
    })
  };

  handleModal = (item)=> {
    this.setState({
      showModal:true, updateData:item
    })
  };

  updateFav = async (e)=> {
    const id = this.state.updateData._id;
    const body = {
      strDrink:e.target.strDrink.value,
      strDrinkThumb:e.target.strDrinkThumb.value
    }
    const req = await axios.put(`http://localhost:3002/cocktail/favorite/${id}`, body);
    const newItem = this.state.apiCrudData.map(obj=> {
      if (obj._id === id){
        obj.strDrink=req.data.strDrink
        obj.strDrinkThumb=req.data.strDrinkThumb
        return obj 
      }
      return obj
    });
    this.setState({apiCrudData:newItem});
    this.handleModal({});
    this.setState({showModal:false})

  };


  close = ()=> {
    this.setState({showModal:false})
  }



  render() {
    return(
      <>
        {this.state.showCrud && 
        <FavCards 
      apiCrudData={this.state.apiCrudData}
      deleteFav={this.deleteFav}
      handleModal={this.handleModal}
    />
    }

        {this.state.showModal &&
        <FormModal
        updateData={this.state.updateData}
        updateFav={this.updateFav}
        showModal={this.state.showModal}
        close={this.close}
      />
      }
      </>
    )
  }
}

export default FavFlowers;
