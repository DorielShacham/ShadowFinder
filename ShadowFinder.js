function getAllHosts(startNode, includeDocument) {
    startNode = startNode || document.body;
    var roots = Array.prototype.filter.call(startNode.querySelectorAll('*'), el => el.shadowRoot).map(el => el.shadowRoot);
    roots = roots.concat(roots.map(el => getAllHosts(el)).reduce((acc, val) => acc.concat(val), []));
    if (includeDocument && startNode == document.body) {
        roots.push(document);
    }
    return roots;
        
}
if(document.readyState === "complete"){
    let SDamount = parseInt(getAllHosts(document, false).length, 10);
    if(!document.OldSDamount || SDamount > document.OldSDamount){
        document.OldSDamount = SDamount === 0 ? 1 : SDamount;
        console.log('%c Shadow Roots: ' + SDamount +'', 'background: blueviolet; color: white; display: block; font-family:monospace; font-weight: bold; font-size: 20px; text-shadow: 3px 3px 0 rgb(0,0,0); ')
    }
}
