import React, {Component} from 'react';

import SearchBox from './components/search-box'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='search_box_position'>
        <SearchBox/>
      </div>
    );
  }

}

export default App;
