import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {showDetails} from './show-details';
import {hideDetails} from './hide-details';
import {editFormF} from './edit-form';
import {removeItem} from './remove-item';




class Recipe extends React.Component{
    
    render(){
        const recipeList = recipes.map((recipe,i)=>
            <li key={"recipe"+ i} id={"recipe"+ i}>
            
                <div>
                    {recipe.name}
                    <button className="btn-details" id={"btn-show-details"+i}  onClick={()=>showDetails(i)}>Show Details</button>
                    <button hidden className="btn-details" id={"btn-hide-details"+i}  onClick={()=>hideDetails(i)}>Hide Details</button>
                    <button className="btn-edit" key={"btn-edit"+i}  onClick={()=>editFormF(i)}>Edit</button>
                    <button className="btn-remove" key={"btn-remove"+i}  onClick={()=> removeItem(i)}>Remove</button>
                </div>
                <div id={"details"+i}>
                    
                </div>
            </li>
        );
        return recipeList;
    }
}

export function addRecipeF(){ 
    ReactDOM.render(<Recipe />, document.getElementById("recipe-list")); 
}
