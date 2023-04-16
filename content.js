function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorizeText(element) {
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.nodeType == 3) {
            var text = node.nodeValue;
            var span = document.createElement('span');
            span.style.color = getRandomColor();
            span.appendChild(document.createTextNode(text));
            node.parentNode.replaceChild(span, node);
        } else {
            colorizeText(node);
        }
    }
}

colorizeText(document.body);