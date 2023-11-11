import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';



class App extends Component  {
    constructor() {
        super()
        this.state={
            robots:robots,
            searchfield:''

        }
    }
    onSearchChange=(event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
    const filteredRobots =this.state.robots.filter(robot =>{
         return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        return (
            <div className="tc"> 
             <h1>ⴽᎾ𝐛Ꮎ┃𝙁𝓇ꭵ𝖊ᵑ₫ₛ┃</h1>
             <SearchBox searchChange={this.onSearchChange}/>
             <scroll>
            <ErrorBoundary>
             <CardList robots={filteredRobots}/>
             </ErrorBoundary>
             </scroll>
             </div>
     );

    }
    
}
export default App;