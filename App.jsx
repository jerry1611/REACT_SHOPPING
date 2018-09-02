import React from 'react';
import Search from './components/search';

class App extends React.Component {
   render() {
      return (
         <div>
            <Search  />
            <button>Submit</button>
            <button>Reset</button>
         </div>
      );
   }
}
export default App;