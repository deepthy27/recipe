import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from './home.css';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      searchString: '',
     
    }
  }
 
//   delete = (event)=>{
//     return new Promise((resolve, reject) => {
//       console.log(event.id)
//       axios.delete(`http://localhost:3000/employees/${event.id}`).then(function (response) {
//         resolve(response);
//         swal("Done!", "Successfully Deleted", "success")
//         window.location.reload();
//       }).catch(function (error) {
//         reject(error);
//       });
//     });
   
//   }
handleChange = (e) => {
    this.setState({ searchString: this.refs.search.value });
  }
  componentDidMount() {
    this.getData().then(response => {
      this.setState({ lists: response.data });
      console.log(this.state.lists)
    });
    this.refs.search.focus();
  }
//   update = (data) =>{
//     console.log(data.id)
//     this.props.history.push('/update/' + data.id);
//   }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/recipes').then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
    let _lists = this.state.lists;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _lists = _lists.filter(function(list) {
        return list.food.toLowerCase().match(search);
      });
    }
    return(
      <div >
          <div class="row recipesclr">
          <input className="search form-control container"
                type="text"
                value={this.state.searchString}
                ref="search"
                onChange={this.handleChange}
                placeholder="search for yummyy crave :)"
              />
              {/* <img className="searchimg" src="https://previews.123rf.com/images/koltukovalek/koltukovalek1809/koltukovalek180900001/108108667-hungry-emoticon-or-emoji-icon-yummy-big-smiley-in-a-flat-design-on-a-yellow-background-vector-emotic.jpg"/> */}
          {
          _lists.map((item, i) => {
                                return (
                                    <div key={i}>
                                       <div class=" item"><h5><b>{item.food}</b></h5></div>
                                       <div class="col-sm-3"><img  src={item.img} alt="food image" className="food"/></div>
                                    </div>
                                    
                                )
                            })
                        }
        </div>                              
                  </div>
    )
  }
}
export default Recipes;

