import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relativeList=[
            {relativeListItem: 'Sidhu Moose Wala', key: 0},
            {relativeListItem: 'Jon Bossmmana', key: 1},
            {relativeListItem: 'Diljit Dosanjh', key: 2}
            ];

        return(
            
            <div id="main">
            <ol>
               {/* Do not remove the main div */ relativeList.map(relative =>{
            return (
            <li key={relative.key}<{relative.relativeListItem}</li>
);
})}
</ol>
);
            </div>
        )
    }
}


export default App;
