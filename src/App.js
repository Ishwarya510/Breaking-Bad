import React from 'react';
import BreakingCard from './BreakingCard';
import  API_URL  from './Api';
import "./BreakingCard.css";

class App extends React.Component {

  state = {
    feeds: []
  };

  fetchbreakingbad = () => {
    fetch(API_URL, {
      method: "GET"
    })
      .then(data => data.json())
      .then(response => this.setState({ feeds: response }))
    .catch(error=>console.log(error))
  }
  componentDidMount() {
  this.fetchbreakingbad()
}
render(){
    return (
      <div>
        <p  className="App">breaking bad</p>
        {
          
          this.state.feeds.map(obj => (
            <BreakingCard data={obj}/>))
          
        }
        
      </div>
    );
    }
}

export default App;