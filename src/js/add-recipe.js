import React from 'react';
import ReactDOM from 'react-dom';
import {showDetails} from './details';

class NewRecipe extends React.Component{
    constructor(props){
        super(props);
        this.editForm = this.editForm.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    
    editForm(i){
        console.log("i=",i);
    }
    removeItem(i){
        console.log("i=",i);
    }

    render(){
        const recipeList = recipes.map((recipe,i)=>
            <li key={"recipe"+ i}>
                <div>
                    {recipe.name}
                    <button className="btn-details" key={"btn-detail"+i}  onClick={()=>showDetails(i)}>Details</button>
                    <button className="btn-edit" key={"btn-edit"+i}  onClick={this.editForm(i)}>Edit</button>
                    <button className="btn-remove" key={"btn-remove"+i}  onClick={this.removeItem(i)}>Remove</button>
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
