function createElement(tagname, value, className, attr) {
    var elem = document.createElement(tagname);
    if (value) {
        elem.innerHTML = value;
    }

    if (className) {
        className.forEach(function(item){
            elem.classList.add(item);
        })
        
    }

    if (attr) {
        for (var key in attr) {
            elem.setAttribute(key, attr[key]);
    }
    }
    return elem;
}