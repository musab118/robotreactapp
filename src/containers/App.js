import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';






class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots:users}));
        }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        console.log(event.target.value);
    }
   
    
    render() {
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
       
     console.log('render');

        return (
        <div className = 'tc'>
            <h1 className = 'f2 f1-l fw2 white-90 mb0 lh-title'>Robot Friends</h1>
            <SearchBox  searchChange = {this.onSearchChange}/>
           <Scroll>
               <CardList robots = {filteredRobot} />
           </Scroll>
            
           

            
        </div>
        );
    }
}



export default App;