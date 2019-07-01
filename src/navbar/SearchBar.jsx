import React from "react";


function SearchBar() {
    let myStyles = {
        marginLeft: 'auto'
    }
    return (
        <div style={myStyles}>
            <input type="text"/>
            <button>Tweet</button>            
        </div>
    );
}

export default SearchBar;