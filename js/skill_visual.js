// initialize global variables.
var edges;
var nodes;
var network;
var container;
var options, data;


// This method is responsible for drawing the graph, returns the drawn network
function drawGraph() {
    var container = document.getElementById('mynetwork');



    // parsing and collecting nodes and edges from the python
    nodes = new vis.DataSet([{ "color": "rgba(255,0,0, 0.95)", "font": { "color": "white" }, "id": "My Skills", "label": "My Skills", "shape": "star", "size": 40 }, { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Social Sciences", "label": "Social Sciences", "shape": "star" }, { "color": "#78CF8A", "font": { "color": "white" }, "id": "Mathematics", "label": "Mathematics", "shape": "star" }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "Computer Science", "label": "Computer Science", "shape": "star" }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "Python", "image": "icon/python.png", "label": "Python", "shape": "image", "size": 10 }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "R", "image": "icon/R.png", "label": "R", "shape": "image", "size": 10 }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "SQL", "image": "icon/db.png", "label": "SQL", "shape": "image", "size": 10 }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "Machine Learning", "label": "Machine Learning", "shape": "square", "size": 10 }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "Bash & Linux Systems", "label": "Bash & Linux Systems", "shape": "square", "size": 10 }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "Data Structures", "label": "Data Structures", "shape": "square", "size": 10 }, { "color": "#A6E22E", "font": { "color": "white" }, "id": "Web Design", "label": "Web Design", "shape": "square", "size": 10 },{ "color": "#A6E22E", "font": { "color": "white" }, "id": "Database Design", "label": "Database Design", "shape": "square", "size": 10 },
    { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Social Network Analysis", "label": "Social Network Analysis", "shape": "diamond", "size": 10 }, { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Social Data Ethics", "label": "Social Data Ethics", "shape": "diamond", "size": 10 }, { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Social Media Mining", "label": "Social Media Mining", "shape": "diamond", "size": 10 }, { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Network Visualization", "label": "Network Visualization", "shape": "diamond", "size": 10 }, { "color": "rgb(255, 241, 118)", "font": { "color": "white" }, "id": "Network Modeling", "label": "Network Modeling", "shape": "diamond", "size": 10 }, { "color": "#78CF8A", "font": { "color": "white" }, "id": "Minor in Mathematics", "label": "Minor in Mathematics", "shape": "dot", "size": 10 }, { "color": "#78CF8A", "font": { "color": "white" }, "id": "B.Sc. Physics", "label": "B.Sc. Physics", "shape": "dot", "size": 10 }, { "color": "#78CF8A", "font": { "color": "white" }, "id": "M.Sc. Info. Mgmt Data Science ", "label": "M.Sc. Info. Mgmt Data Science ", "shape": "dot", "size": 10 }]);
    edges = new vis.DataSet([{ "from": "My Skills", "to": "Computer Science", "weight": 2 }, { "from": "My Skills", "to": "Mathematics", "weight": 2 }, { "from": "My Skills", "to": "Social Sciences", "weight": 2 }, { "from": "Computer Science", "to": "Machine Learning", "weight": 1 }, { "from": "Computer Science", "to": "Bash & Linux Systems", "weight": 1 }, { "from": "Computer Science", "to": "Data Structures", "weight": 1 }, { "from": "Machine Learning", "to": "Python", "weight": 1 }, { "from": "Machine Learning", "to": "R", "weight": 1 }, { "from": "Machine Learning", "to": "SQL", "weight": 1 }, { "from": "Mathematics", "to": "B.Sc. Physics", "weight": 1 }, { "from": "Mathematics", "to": "M.Sc. Info. Mgmt Data Science ", "weight": 1 }, { "from": "Mathematics", "to": "Minor in Mathematics", "weight": 1 }, { "from": "Social Sciences", "to": "Social Data Ethics", "weight": 1 }, { "from": "Social Sciences", "to": "Social Network Analysis", "weight": 1 }, { "from": "Social Sciences", "to": "Social Media Mining", "weight": 1 }, { "from": "Social Network Analysis", "to": "Network Modeling", "weight": 1 }, { "from": "Social Network Analysis", "to": "Network Visualization", "weight": 1 }, { "from": "Computer Science", "to": "Web Design", "weight": 1 },{ "from": "Web Design", "to": "Database Design", "weight": 1 }]);

    // adding nodes and edges to the graph
    data = { nodes: nodes, edges: edges };

    var options = {
        "configure": {
            "enabled": false
        },
        "edges": {
            "color": {
                "inherit": true
            },
            "smooth": {
                "enabled": false,
                "type": "continuous"
            }
        },
        "interaction": {
            "dragNodes": true,
            "hideEdgesOnDrag": false,
            "hideNodesOnDrag": false
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
                "iterations": 1000,
                "onlyDynamicEdges": false,
                "updateInterval": 50
            }
        }
    };





    network = new vis.Network(container, data, options);






    return network;

}

drawGraph();