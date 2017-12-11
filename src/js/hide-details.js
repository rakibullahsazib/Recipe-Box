import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export function hideDetails(i){ 
    ReactDOM.render("", document.getElementById("details"+i));
    $("#btn-hide-details"+i).attr("hidden","hidden"); 
    $("#btn-show-details"+i).removeAttr("hidden");
}

