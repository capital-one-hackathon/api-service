import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super();
    this.state = {};
  }

  componentDidMount(){
    console.log("HELLO THIS FUNCTION FIRES OFF FIRSTH THING ONCE THE COMPONENT LOADS UP");
    console.log("DON'T WORRY ABOUT STATE MANAGEMENT ON THE CLIENT SIDE IF WE NEED TO PARSE AN API RESPONSE FROM THE SERVER, I'LL TAKE CARE OF IT :). LET ME KNOW IF YOU WOULD LIKE TO LEARN. IT'S SIMPLE STUFF...");
  }



  render(){
    return(
      <div>
        <h1>Hello From The App Component</h1>
        <h2>Write the html like you normally would in this file</h2>
        <br/>
        <header><u><b>To design and/or style components: </b></u></header>
        <ol>
          <li>Go to the static/src/css/main.css file and include your css styles in there.</li>
          <li>It's already loaded once the index.html file is served with the server and all the assets will be precompiled</li>
          <li>All compiled assets could be found inside the static/compiled/bundles.js file</li>
          <li>To give a html element a class name give an html/jsx element className="your-class-name" instead of class="your-class-name"</li>
          <li>giving an id="your-id-name" still works as per usual :)</li>
        </ol>
        <br/>
        <hr/>
        <img className="start-giffy" src="https://media1.tenor.com/images/423d66fd268facb84cf2c3d5e789e75a/tenor.gif?itemid=3556677" alt="goodLuck" />
      </div>
    )
  }
}


export default App;
