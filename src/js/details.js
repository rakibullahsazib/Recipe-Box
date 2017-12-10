import React from 'react';
import ReactDOM from 'react-dom';

function splitIngredientsF(str){
    let arr= str.split(",");
    arr = arr.map((x)=>x.trim());
    return arr;
}

function addingNewLineToInstructions(str){
    let arr= str.split("\n");
    arr = arr.map((x)=>x.trim());
    return arr;
}

function makeIngredientListF(recipeNo){
    let ingredientsStr= recipes[recipeNo].ingredients;
    console.log(ingredientsStr);
    let ingredientsArr,ingredientsList;
    if(ingredientsStr===""){
        ingredientsList = (
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;will be added soon
            </div>
        );
    }else{
        ingredientsArr = splitIngredientsF(ingredientsStr);
        ingredientsList = ingredientsArr.map((el,j)=>
                <li key={"ingredients"+recipeNo+"_"+j}>{el}</li>
        );
    }
    
    return ingredientsList;
}

function makeInstructionsListF(recipeNo){
    let instructionsStr= recipes[recipeNo].instructions;
    //console.log(ingredientStr);
    let instructionsArr,instructionsList;
    if(instructionsStr===""){
        instructionsList = (
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp; will be added soon
            </div>
        );
    }else{
        instructionsArr = addingNewLineToInstructions(instructionsStr);
        instructionsList = instructionsArr.map((el,j)=>
        <p key={"instructions"+recipeNo+"_"+j}>&nbsp;&nbsp;&nbsp;&nbsp; {el}</p>
    );
    }
    return instructionsList;
}

export function showDetails(i){ 
    
    let ingredientsList = makeIngredientListF(i);
    
    let instructionsList = makeInstructionsListF(i);

    let elementToRender=(
        <div>
            <div className="ingredients-container">
                Ingredients:
                <ol>
                {ingredientsList}
                </ol>
            </div>
    
            <div className="instructions-container">
                Instructions:
                <ol>   
                    {instructionsList}
                </ol>
            </div>
        </div>
    );


    ReactDOM.render(elementToRender, document.getElementById("details"+i)); 
}

