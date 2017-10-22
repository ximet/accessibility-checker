const isHidden = (element) => {
    return element.closest('[aria-hidden="true"], [hidden], [style*="display: none"]') != null
}
  
const isText = (value) =>{
    return toString.call(value) === '[object String]';
}

const isAccessibleText = (node) => {
    switch (node.nodeType) {
        case Node.TEXT_NODE: {
            return isText(node.data);
        }   
        case Node.ELEMENT_NODE: {
            if (isText(node.getAttribute('alt')) || isText(node.getAttribute('title') || isText(node.getAttribute('aria-label')))) {
                return true;
            } 
            for (let i = 0; i < node.childNodes.length; i++) {
                if (accessibleText(node.childNodes[i])) {
                    return true;
                }
            }
            break;
        }
        default: {
            return false;
        }
    }
}

export {
    isHidden,
    isText,
    isAccessibleText
}