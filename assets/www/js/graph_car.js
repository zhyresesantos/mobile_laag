var transMatrix = [2, 0, 0, 2, 0, 0];
var NUM_SITES = 23;
var NUM_INTER = 24;
var NUMBER_NODES = 47;
var NUMBER_EDGES = 94;

var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
var XLink_NS = 'http://www.w3.org/1999/xlink';

var nodes = new Array();
var POI = new Array();
var inter = new Array();
var adjacencyMatrix = new Array(NUMBER_NODES);

function coordinate(x, y) {
    this.x = x;
    this.y = y;
}

var theSvgElement;

function init(evt) {

    theSvgElement = document.getElementById('svgElement'); // Best to only access the SVG element after the page has fully loaded.
    var group = document.getElementById('viewport');
    var img = document.createElementNS(SVG_NAMESPACE_URI, 'image');
    img.setAttributeNS(null, 'height', '480px');
    img.setAttributeNS(null, 'width', '720px');
    img.setAttributeNS(XLink_NS, 'href', 'images/map_car.jpg');
    img.setAttributeNS(null, 'x', '0');
    img.setAttributeNS(null, 'y', '0');
    img.setAttributeNS(null, 'visibility', 'visible');
    group.appendChild(img);
    var svgCon = document.createElementNS(SVG_NAMESPACE_URI, 'svg');
    svgCon.setAttributeNS(null, 'id', 'svgCon');
    svgCon.setAttributeNS(null, 'height', '480px');
    svgCon.setAttributeNS(null, 'width', '720px');
    group.appendChild(svgCon);

    var n;
    var xsite = new Array(153, 202, 158, 103, 76, 128, 123, 226, 262, 367, 253, 265, 271, 300, 410, 488, 573, 445, 497, 537, 539, 580, 648);
    var ysite = new Array(391, 343, 324, 311, 335, 272, 233, 346, 352, 370, 202, 214, 270, 276, 297, 295, 286, 226, 228, 199, 155, 123, 154);
    var xinter = new Array(191, 124, 134, 107, 221, 240, 254, 250, 261, 465, 466, 470, 474, 483, 475, 490, 514, 560, 478, 444, 481, 525, 516, 531);
    var yinter = new Array(355, 295, 280, 246, 324, 265, 215, 209, 216, 308, 316, 320, 321, 318, 261, 264, 267, 277, 243, 236, 224, 241, 229, 226);



    for (n = 0; n < NUM_SITES; n++) {
        POI.push(new coordinate(xsite[n], ysite[n]));
    }

    for (n = 0; n < NUM_INTER; n++) {
        inter.push(new coordinate(xinter[n], yinter[n]));
    }

    for (n = 0; n < NUM_SITES; n++) {
        nodes.push(POI[n]);
    }

    for (n = 0; n < NUM_INTER; n++) {
        nodes.push(inter[n]);
    }

    // Initialize an adjacency matrix
    for (var i = 0; i < NUMBER_NODES; i++) {
        adjacencyMatrix[i] = new Array(NUMBER_NODES);
    }

    var _ = Infinity;

    adjacencyMatrix[0] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[1] = [_, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[2] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[3] = [_, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[4] = [_, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[5] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[6] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[7] = [_, 1, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[8] = [_, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[9] = [_, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[10] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[11] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[12] = [_, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[13] = [_, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[14] = [_, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[15] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _];
    adjacencyMatrix[16] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _];
    adjacencyMatrix[17] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _];
    adjacencyMatrix[18] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _];
    adjacencyMatrix[19] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1];
    adjacencyMatrix[20] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[21] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[22] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[23] = [1, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[24] = [_, _, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[25] = [_, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[26] = [_, _, _, _, _, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[27] = [_, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[28] = [_, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[29] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[30] = [_, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[31] = [_, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[32] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, 1, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[33] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[34] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[35] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[36] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _];
    adjacencyMatrix[37] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, 1, _, _, 1, _, _, _, _, _];
    adjacencyMatrix[38] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, _, _, _, _];
    adjacencyMatrix[39] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, _, _, _, 1, _, _];
    adjacencyMatrix[40] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _];
    adjacencyMatrix[41] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, 1, 1, _, _, _];
    adjacencyMatrix[42] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _];
    adjacencyMatrix[43] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _];
    adjacencyMatrix[44] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, 1, 1];
    adjacencyMatrix[45] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _];
    adjacencyMatrix[46] = [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _];


    // Create some edges and add them to the document
    for (var j = 0; j < NUMBER_EDGES; j++) {
        var from = j % NUMBER_NODES;
        var min = Infinity;
        var to = from;
        for (var i = 0; i < NUMBER_NODES; i++) {
            if (from != i && adjacencyMatrix[from][i] == 1) {
                var dx = nodes[from].x - nodes[i].x;
                var dy = nodes[from].y - nodes[i].y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < min) {
                    min = distance;
                    to = i;
                }
            }
        }
        adjacencyMatrix[from][to] = min;
        adjacencyMatrix[to][from] = min;

        var l = document.createElementNS(SVG_NAMESPACE_URI, "line");
        var id = "l";
        if (to < from) {
            id += String(to) + from;
        } else {
            id += String(from) + to;
        }
        l.setAttributeNS(null, "id", id);
        l.setAttributeNS(null, "x1", nodes[from].x);
        l.setAttributeNS(null, "y1", nodes[from].y);
        l.setAttributeNS(null, "x2", nodes[to].x);
        l.setAttributeNS(null, "y2", nodes[to].y);
        svgCon.appendChild(l);
    }

    divider = document.createElementNS(SVG_NAMESPACE_URI, "g");
    svgCon.appendChild(divider);

    // Add the circles for the nodes
    for (var i = 0; i < NUM_SITES; i++) {
        var x = POI[i].x;
        var x2 = POI[i].x - 4;
        var x3 = POI[i].x + 4;
        var x4 = POI[i].x - 7;
        var x5 = POI[i].x + 7;
        var x6 = POI[i].x - 5;
        var x7 = POI[i].x + 5;
        var x8 = POI[i].x - 3;
        var x9 = POI[i].x + 3;
        var y = POI[i].y;
        var y2 = POI[i].y - 10;
        var y3 = POI[i].y - 18;
        var y4 = POI[i].y - 22;
        var y5 = POI[i].y - 23;
        var y6 = POI[i].y - 24;
        var point = x + "," + y + " " + x2 + "," + y2 + " " + x4 + "," + y3 + " " + x6 + "," + y4 + " " + x8 + "," + y5 + " " + x + "," + y6 + " " + x9 + "," + y5 + " " + x7 + "," + y4 + " " + x5 + "," + y3 + " " + x3 + "," + y2;
        var c = document.createElementNS(SVG_NAMESPACE_URI, "polygon");
        c.setAttributeNS(null, "id", "c" + i);
        c.setAttributeNS(null, "points", point);
        c.setAttributeNS(null, "onmouseover", "showPath(" + i + ")");
        c.setAttributeNS(null, "onclick", "setActive(" + i + ")");
        svgCon.appendChild(c);
    }

    // Start with node 0 as the active node
    activeNode = 0;
    document.getElementById("c0").setAttributeNS(null, "class", "current");
    shortestPathInfo = shortestPath(adjacencyMatrix, NUMBER_NODES, 0);
}

function clearPath() {
    for (var i = 0; i < NUMBER_NODES; i++) {
        for (var j = i + 1; j < NUMBER_NODES; j++) {
            if (adjacencyMatrix[i][j] != Infinity) {
                document.getElementById("l" + i + j)
                    .setAttributeNS(null, "class", "");
            }
        }
    }
}
// Unhighlight the path from the active node to the given node
function hidePath(to) {
    clearPath();
    if (activeNode != to) {
        var c = document.getElementById("c" + to);
        c.setAttributeNS(null, "class", "");
    }
}

// Choose a new active node
function setActive(to) {
    document.getElementById("c" + activeNode)
        .setAttributeNS(null, "class", "");
    clearPath();
    activeNode = to;
    shortestPathInfo = shortestPath(adjacencyMatrix, NUMBER_NODES, to);
    document.getElementById("c" + activeNode)
        .setAttributeNS(null, "class", "current");
}

$(document).ready(function () {
    $("#from").change(function () {
        for (var i = 0; i < NUM_SITES; i++) {
            hidePath(i);
        }
        var fromObj = document.getElementById('from');
        //	var txtIndexObj = document.getElementById('txtIndex');

        var setActiveFrom = fromObj.selectedIndex - 1;
        //	txtIndexObj.value = setActiveFrom;
        document.getElementById("c" + activeNode).setAttributeNS(null, "class", "");
        clearPath();
        activeNode = setActiveFrom;
        shortestPathInfo = shortestPath(adjacencyMatrix, NUMBER_NODES, setActiveFrom);
        document.getElementById("c" + setActiveFrom).setAttributeNS(null, "class", "current");
    });

    $("#find").click(function () {
        for (var i = 0; i < NUM_SITES; i++) {
            hidePath(i);
        }

        var toObj = document.getElementById('to');
        //	var txtIndexObj = document.getElementById('txtIndex');

        var setActiveto = toObj.selectedIndex - 1;

        if (activeNode != setActiveto) {
            var c = document.getElementById("c" + setActiveto);
            c.setAttributeNS(null, "class", "highlight");
            var path = constructPath(shortestPathInfo, setActiveto);
            var prev = activeNode;
            var distance = 0;
            for (var i = 0; i < path.length; i++) {
                var id;
                if (path[i] < prev) {
                    id = "l" + path[i] + prev;
                } else {
                    id = "l" + prev + path[i];
                }
                var l = document.getElementById(id);
                l.parentNode.removeChild(l);
                l.setAttributeNS(null, "class", "highlight");
                svgCon.insertBefore(l, divider);
                distance += adjacencyMatrix[prev][path[i]];
                prev = path[i];
            }
            document.getElementById("d").firstChild.nodeValue =
                "Distance: " + distance + " meters";
        }

    });
});