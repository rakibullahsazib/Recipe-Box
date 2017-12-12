import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {hideDetails} from './hide-details';
import {addRecipeF} from "./add-recipe";


class SureRemove extends React.Component{   

    constructor(props){
        super(props);
        this.clearForm = this.clearForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(item){
        hideDetails(item);
        recipes.splice(item,1);
        console.log(recipes);
        this.clearForm();
        addRecipeF();
    }
    clearForm(){
        $("#curtain").attr("hidden","hidden");
    }
    render(){
            
        return (
            <div id="form">
                <div>Are you sure you want to delete this recipe</div>
                <div>
                    <button onClick={()=>this.deleteItem(this.props.itemNo)}>yes</button>
                    <button onClick={this.clearForm}>no</button>
                </div>
            </div> 
        );
        
    }
}


export function removeItem(i){

    $("#curtain").removeAttr("hidden");
    ReactDOM.render(<SureRemove itemNo={i} />, document.getElementById("curtain")); 
    
}
