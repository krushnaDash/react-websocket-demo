import React from 'react';
  import Websocket from 'react-websocket';
  
  class ReactWebsocketEx extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        count: 90
      };
    }
 
    handleData(data) {
      console.log(data)
    }
 
    render() {
      return (
        <div>
          Count: <strong>{this.state.count}</strong>
 
          <Websocket url='ws://localhost:9000/chat-stream' debug = {true}
              onMessage={this.handleData.bind(this)}/>
        </div>
      );
    }
  }
 
  export default ReactWebsocketEx;