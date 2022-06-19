
drawGraph();
nodeFlash(nodes.get("My Skills"), 6);

// initialize global variables.
var edges;
var nodes;
var network;
var container;
var options, data;
// var allNodes;
// var highlightActive = false;


// This method is responsible for drawing the graph, returns the drawn network
function drawGraph() {
    var container = document.getElementById('mynetwork');

    var big = 25;

    // parsing and collecting nodes and edges from the python
    nodes = new vis.DataSet([{ "color": "rgba(255,0,0, 0.95)", "font": { "color": "white" }, "id": "My Skills", "label": "", "image": "../img/robot.png", "shape": "image", "size": 66, 'url': 'https://michaelgru.github.io/', group: 0},

    { "color": "rgb(255, 241, 118)", "font": { size: big, "color": "white", strokeWidth: 1, strokeColor: 'white'}, "id": "Social Sciences", "label": "Social Sciences", "shape": "star", group: 1},

    { "color": "#78CF8A", "font": { size: big, "color": "white", strokeWidth: 1, strokeColor: 'white'}, "id": "Mathematics", "label": "Mathematics", "shape": "star", group: 2 },

    { "color": "#A6E22E", "font": { size: big, "color": "white", strokeWidth: 1, strokeColor: 'white'}, "id": "Computer Science", "label": "Computer Science", "shape": "star", group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "Python", "image": "icon/python.png", "label": "Python", "shape": "image", "size": 10, group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "R", "image": "icon/R.png", "label": "R", "shape": "image", "size": 10, group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "SQL", "image": "icon/db.png", "label": "SQL", "shape": "image", "size": 10, group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "Machine Learning", "label": "Machine Learning", "shape": "triangle", "size": 10, group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "Bash & Linux Systems", "label": "Bash & Linux Systems", "shape": "triangle", "size": 10, group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "Data Structures", "label": "Data Structures", "shape": "triangle", "size": 10, group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "Web Design", "label": "Web Design", "shape": "triangle", "size": 10, group: 3 },

    { "color": "#A6E22E", "font": { "color": "white" }, "id": "Database Design", "label": "Database Design", "shape": "triangle", "size": 10, group: 3 },

    { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Social Network Analysis", "label": "Social Network Analysis", "shape": "diamond", "size": 10, group: 1 },

    { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Social Data Ethics", "label": "Social Data Ethics", "shape": "diamond", "size": 10, group: 1 },

    { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Social Media Mining", "label": "Social Media Mining", "shape": "diamond", "size": 10, group: 1 },

    { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Network Visualization", "label": "Network Visualization", "shape": "diamond", "size": 10, group: 1 },

    { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Network Modeling", "label": "Network Modeling", "shape": "diamond", "size": 10, group: 1 },

    { "color": "#78CF8A", "font": { "color": "white" }, "id": "Minor in Mathematics", "label": "Minor in Mathematics", "shape": "dot", "size": 10, group: 2 },

    { "color": "#78CF8A", "font": { "color": "white" }, "id": "B.Sc. Physics", "label": "B.Sc. Physics", "shape": "dot", "size": 10, group: 2 },

    { "color": "#78CF8A", "font": { "color": "white" }, "id": "M.Sc. Info. Mgmt Data Science ", "label": "M.Sc. Info. Mgmt Data Science ", "shape": "dot", "size": 10, group: 2 },

]);

    edges = new vis.DataSet([{ "from": "My Skills", "to": "Computer Science", "weight": 2 }, { "from": "My Skills", "to": "Mathematics", "weight": 2 }, { "from": "My Skills", "to": "Social Sciences", "weight": 2 }, { "from": "Computer Science", "to": "Machine Learning", "weight": 1 }, { "from": "Computer Science", "to": "Bash & Linux Systems", "weight": 1 }, { "from": "Computer Science", "to": "Data Structures", "weight": 1 }, { "from": "Machine Learning", "to": "Python", "weight": 1 }, { "from": "Machine Learning", "to": "R", "weight": 1 }, { "from": "Machine Learning", "to": "SQL", "weight": 1 }, { "from": "Mathematics", "to": "B.Sc. Physics", "weight": 1 }, { "from": "Mathematics", "to": "M.Sc. Info. Mgmt Data Science ", "weight": 1 }, { "from": "Mathematics", "to": "Minor in Mathematics", "weight": 1 }, { "from": "Social Sciences", "to": "Social Data Ethics", "weight": 1 }, { "from": "Social Sciences", "to": "Social Network Analysis", "weight": 1 }, { "from": "Social Sciences", "to": "Social Media Mining", "weight": 1 }, { "from": "Social Network Analysis", "to": "Network Modeling", "weight": 1 }, { "from": "Social Network Analysis", "to": "Network Visualization", "weight": 1 }, { "from": "Computer Science", "to": "Web Design", "weight": 1 }, { "from": "Web Design", "to": "Database Design", "weight": 1 }]);

    // adding nodes and edges to the graph
    data = { nodes: nodes, edges: edges };

    var options = {
        "configure": {
            "enabled": false
        },
        nodes:{
            shadow:true
        },
        "edges": {
            arrows: {
                to: {
                    enabled: true,
                    scaleFactor: 0.5
                }
            },
            shadow:true,
            "color": {
                "inherit": true
            },
            "smooth": {
                "enabled": true,
                "type": "continuous"
            },
            hoverWidth: function (width) { return width + 3; },
            selectionWidth: function (width) { return width + 3; },
        },

        "interaction": {
            "hover": true,
            "dragNodes": true,
            "hideEdgesOnDrag": false,
            "hideNodesOnDrag": false,
            // "navigationButtons": true
        },
        "physics": {
            "enabled": true,
            "forceAtlas2Based": {
                "avoidOverlap": 1,
                "centralGravity": 0.01,
                "damping": 0.4,
                "gravitationalConstant": -90,
                "springConstant": 0.08,
                "springLength": 100
            },
            "solver": "forceAtlas2Based",
            "stabilization": {
                "enabled": true,
                "fit": true,
                "iterations": 10000,
                "onlyDynamicEdges": false,
                "updateInterval": 50
            }, 
        },
        layout:{randomSeed:2}
    };


    network = new vis.Network(container, data, options);


  


    // get a JSON object
    // allNodes = nodes.get({ returnType: "Object" });

    // network.on("click", neighbourhoodHighlight);
    return network;

}

function nodeFlash(node, n) {
    if (n == 0) {
        updateNode(node, false)
        return;
    } else {
        updateNode(node, !nodes.get(node.id).hidden);
        setTimeout(function () {
            nodeFlash(node, n - 1);
        }, 300);
    }
}

function updateNode(node, hidden) {
    try {
        nodes.update({
            id: node.id, hidden: hidden
        });
    } catch (err) {
        alert(err);
    }
}








network.on("hoverNode", function (params) {
    data.nodes.update({ id: "My Skills", "image": "../img/blue.png" });

});



var modal = document.getElementById("myModal");
network.on("click", function (params) {
    if (params.nodes.length === 1) {
        var node = nodes.get(params.nodes[0]);
        if (node.url != null) {


            modal.style.display = "block";
            playsound();
        }
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}



global_click = 0;

function playsound() {
    var audio = document.getElementById("audio");
    if (global_click == 0) {
        audio.play();
    }
    global_click++;

}


let elementToFindDigitsIn = document.querySelector('pre');
elementToFindDigitsIn.innerHTML =
    elementToFindDigitsIn
        .textContent
        .replace(/(\$?\d+)/g, '<span>$1</span>');



//Get the canvas HTML element
var networkCanvas = document.getElementById("mynetwork").getElementsByTagName("canvas")[0]
function changeCursor(newCursorStyle) {
    networkCanvas.style.cursor = newCursorStyle;
}
function changeEventCursor(eventName, cursorType) {
    network.on(eventName, function () {
        changeCursor(cursorType);
    });
}
network.on('hoverNode', function () {
    changeCursor('pointer');
});
network.on('blurNode', function () {
    changeCursor('default');
});
network.on('hoverEdge', function () {
    changeCursor('grab');
});
network.on('blurEdge', function () {
    changeCursor('default');
});
network.on('dragStart', function () {
    changeCursor('grabbing');
});
network.on('dragging', function () {
    changeCursor('grabbing');
});
network.on('dragEnd', function () {
    changeCursor('grab');
});



// function neighbourhoodHighlight(params) {
//     // if something is selected:
//     if (params.nodes.length > 0) {
//         highlightActive = true;
//         var i, j;
//         var selectedNode = params.nodes[0];
//         var degrees = 1;

//         // mark all nodes as hard to read.
//         for (var nodeId in allNodes) {
//             allNodes[nodeId].color = "rgba(200,200,200,0.5)";
//             if (allNodes[nodeId].hiddenLabel === undefined) {
//                 allNodes[nodeId].hiddenLabel = allNodes[nodeId].label;

//             }
//         }
//         var connectedNodes = network.getConnectedNodes(selectedNode);
//         var allConnectedNodes = [];


//         // all first degree nodes get their own color and their label back
//         for (i = 0; i < connectedNodes.length; i++) {
//             allNodes[connectedNodes[i]].color = undefined;
//             if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
//                 allNodes[connectedNodes[i]].label =
//                     allNodes[connectedNodes[i]].hiddenLabel;
//                 allNodes[connectedNodes[i]].hiddenLabel = undefined;
//             }
//         }

//         // the main node gets its own color and its label back.
//         allNodes[selectedNode].color = undefined;
//         if (allNodes[selectedNode].hiddenLabel !== undefined) {
//             allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;
//             allNodes[selectedNode].hiddenLabel = undefined;
//         }
//     } else if (highlightActive === true) {
//         // reset all nodes
//         for (var nodeId in allNodes) {
//             allNodes[nodeId].color = undefined;
//             if (allNodes[nodeId].hiddenLabel !== undefined) {
//                 allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
//                 allNodes[nodeId].hiddenLabel = undefined;
//             }
//         }
//         highlightActive = false;
//     }

//     // transform the object into an array
//     var updateArray = [];
//     for (nodeId in allNodes) {
//         if (allNodes.hasOwnProperty(nodeId)) {
//             updateArray.push(allNodes[nodeId]);
//         }
//     }
//     nodes.update(updateArray);
// }