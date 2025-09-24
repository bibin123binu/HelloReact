import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"This is the first H1 tag"),
        React.createElement("h1",{},"This is the second H1 tag")
    ]),
     React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This is the Third H1 tag"),
        React.createElement("h1",{},"This is the fourth H1 tag")
    ]),

])







const root=ReactDOM.createRoot(document.getElementById("root"));




root.render (parent); 
 /* this render method will basically responsible to converting the object(heading) into Heading tag 
 and put it into the DOM */
