import { ImageWithoutAltAttributeError } from './Error.js';

const isHidden = (element) => {
    return element.closest('[aria-hidden="true"], [hidden], [style*="display: none"]') != null
}
  
const isText = (value) =>{
    return toString.call(value) === '[object String]';
}

const checkAltAttributeForImg = (context, logErrorCallback) => {
    for (const img of context.querySelectorAll('img')) {
        if (!img.hasAttribute('alt')) {
            logErrorCallback(new ImageWithoutAltAttributeError(img))
        }
    }
}

export const checkProblemsAStandard = (context, logger) = {
    checkAltAttributeForImg(context, logger);
}

export const checkProblemsAAStandard = (context, logger) = {
    checkProblemsAStandard(context, logger);
}

export const checkProblemsAAAStandard = (context, logger) = {
    checkProblemsAAStandard(context, logger);
}