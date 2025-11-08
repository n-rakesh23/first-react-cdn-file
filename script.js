const heading =React.createElement("h1",{style:{color:"red",fontSize:"5em"}},"hello react");
/*
task-1
<div id="parent">
    <div id="child">
        <h1>an h1 tag</h1>
    </div>
</div>

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"An h1 tag")
    )
);
*/
//==========================
/*
  task-2  
    <div id="parent">
    <div id="child">
        <h1>an h1 tag</h1>
        <h2>an h2 tag</h2>
    </div>
</div>

const parent= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"An h1 tag"),React.createElement("h2",{},"An h2 tag")]
    )
);
 */
//===============================
/*
    task-3
    <div id="parent">
        <div id="child1" >
            <h1>An h1 tag</h1>
            <h2>An h2 tag</h2>
        </div>
        <div id="child2" >
            <h1>An h1 tag</h1>
            <h2>An h2 tag</h2>
        </div>
    </div>

const parent =React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
            {id:"child1"},
            [React.createElement("h1",{},"an h1 tag"),React.createElement("h2",{},"an h2 tag")]
        ),
      React.createElement("div",
            {id:"child2"},
            [React.createElement("h1",{},"an h1 tag"),React.createElement("h2",{},"an h2 tag")]
        ) 
    ]
);*/

const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);




