export const isHidden = (element) => {
    return element.closest('[aria-hidden="true"], [hidden], [style*="display: none"]') != null
}
  
export const isText = (value) =>{
    return toString.call(value) === '[object String]';
}