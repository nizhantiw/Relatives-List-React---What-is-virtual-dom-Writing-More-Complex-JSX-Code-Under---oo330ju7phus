import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives=["Sidhu Moosewala", "Diljit Dosanjh", "Jon Bomassas"]
            

        return(
            
     <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    );
  }
}

export default App;
