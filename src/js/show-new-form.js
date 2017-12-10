import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import {addRecipeF} from "./add-recipe";



class NewForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            ingredients: "",
            instructions: ""
        };
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleIngredientsChange=this.handleIngredientsChange.bind(this);
        this.handleInstructionsChange=this.handleInstructionsChange.bind(this);
        this.saveForm = this.saveForm.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleNameChange(e){
        this.setState({name: e.target.value})
    }
    handleIngredientsChange(e){
        this.setState({ingredients: e.target.value})
    }
    handleInstructionsChange(e){
        this.setState({instructions: e.target.value})
    }

    saveForm(){
        let name ="New Recipe";
        if (this.state.name !== ""){
            name=this.state.name;
        }
            
        recipes.push({
            name: name,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
        });
        console.log(recipes);
        this.clearForm();
        addRecipeF();
    }

    clearForm(){
        this.setState({
            name: "",
            ingredients: "",
            instructions: ""
        });
        $("#curtain").attr("hidden","hidden");
    }
    
    

    render(){
        return (
            <div id="form">
                <div>Recipe Name</div>
                <input type ="text" id="form-input-name" placeholder="New Item" value={this.state.name} onChange={this.handleNameChange}/>
                <div>Ingredients</div>
                <textarea id="form-input-ingredients" placeholder="Put Comma Between Ingredients" value={this.state.ingredients} onChange={this.handleIngredientsChange}>
                </textarea>
                <div>Instructions</div>
                <textarea id="form-input-instructions" placeholder="Tell people how to make this dish" value={this.state.instructions} onChange={this.handleInstructionsChange}>   
                </textarea>
                <div>
                    <button id="form-btn-save" onClick={this.saveForm}>save</button>
                    <button id="form-btn-cancel" onClick={this.clearForm}>cancel</button>
                </div>
            </div> 
        );
    }
}

export function showNewFormF(){ 
    $("#curtain").removeAttr("hidden");
    ReactDOM.render(<NewForm />, document.getElementById("curtain")); 
}


