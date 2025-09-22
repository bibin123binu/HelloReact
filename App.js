/*when you did React.CreateElement() it basicaly creates an js object
(this is a react element not actual H1 tag .not yet)*/
const heading=React.createElement(  
    "H1",
    {id:"heading_id"
    ,style:{textAlign:"center"}},
    "Hello react Developers!");
console.log(heading);//object



/*
<div id="parent">
        <div id="child">
            <h1>I am bibin</h1>
        </div>
</div>
its exact geberation using react below it
*/



// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{style:{textAlign:"center"}},"i am Bibin")
//     )
// )





/*
<div id="parent">
        <div id="child">
            <h1>I am bibin</h1>
            <h1>I am bibin</h1>
        </div>
</div>
its exact geberation using react below it
*/



// const parent=React.createElement("div",{id:"parent"},
//         React.createElement("div",{id:"child"},
//         [React.createElement("h1",{style:{textAlign:"center"}},"i am Bibin"),
//         React.createElement("h1",{style:{textAlign:"center"}},"i am Bibin")] // multiple child
//     )
// )





/* <div id="parent">
        <div id="child">
            <h1>I am bibin</h1>
            <h1>I am bibin</h1>
        </div>
 </div>
 <div id="parent">
        <div id="child">
            <h1>I am bibin</h1>
            <h1>I am bibin</h1>
        </div>
 </div>
its exact geberation using react below it
*/



const parent=[React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
        React.createElement("h1",{style:{textAlign:"center"}},"i am Bibin 1"),
        React.createElement("h1",{style:{textAlign:"center"}},"i am Bibin 2") // multiple child
    )
),React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
        React.createElement("h1",{style:{textAlign:"center"}},"i am Bibin 3"),
        React.createElement("h1",{style:{textAlign:"center"}},"i am Bibin 4") ))]




const root=ReactDOM.createRoot(document.getElementById("root"));




root.render (parent); 
 /* this render method will basically responsible to converting the object(heading) into Heading tag 
 and put it into the DOM */
