
import './app.css';

import NavBar from '../nav/nav';
import { Component } from 'react';



class App extends Component  {
    constructor(props){
      super(props);
      this.state={
        data: [{name: '', }, {name: ''}]
      }
    }

    render() {
        return(
        <div className="app">
            <NavBar/>
        </div>
        )
    }
}

export default App;