import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {showDetails} from './show-details';
import {hideDetails} from './hide-details';



function removeItem (i){
    hideDetails(i);
    recipes.splice(i,1);
    console.log(recipes);
    
    ReactDOM.render(<NewRecipe />, document.getElementById("recipe-list"));

}

class NewRecipe extends React.Component{
    constructor(props){
        super(props);
        this.editForm = this.editForm.bind(this);
        
    }

    
    editForm(i){
        console.log("i=",i);
    }
    

    render(){
        const recipeList = recipes.map((recipe,i)=>
            <li key={"recipe"+ i} id={"recipe"+ i}>
                <div>
                    {recipe.name}
                    <button className="btn-details" id={"btn-show-details"+i}  onClick={()=>showDetails(i)}>Show Details</button>
                    <button hidden className="btn-details" id={"btn-hide-details"+i}  onClick={()=>hideDetails(i)}>Hide Details</button>
                    <button className="btn-edit" key={"btn-edit"+i}  onClick={this.editForm(i)}>Edit</button>
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
    ReactDOM.render(<NewRecipe />, document.getElementById("recipe-list")); 
}
