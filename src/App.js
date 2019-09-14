import React , { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component{

  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:""
    }
  } 
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }


  render(){

    const {monsters, searchField} = this.state;
    const filterMonster = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
        <h1>Gang of Monsters</h1>
       <SearchBox placeholder='Search monsters'  handleChange={this.handleChange}/>
        <CardList monsters={filterMonster}/>
     </div>
    );
  }

  handleChange=(e) => {
    this.setState({searchField:e.target.value})
  }
  
}

export default App;
