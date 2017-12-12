import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {hideDetails} from './hide-details';
import {addRecipeF} from "./add-recipe";


export function removeItem (itemNo){
    hideDetails(itemNo);
    recipes.splice(itemNo,1);
    console.log(recipes);
    
    addRecipeF();

}