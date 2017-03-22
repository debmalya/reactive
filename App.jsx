import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>Generate Random Number</button>
            <h4>Random number: {parseInt(Math.random()*1000000)}</h4>
         </div>
      );
   }
}

export default App;
