import { ImageWithoutAltAttributeError, DOMElementWithoutLabelError, ListItemWithoutTabIndexError, LinkWithoutHrefError, LinkWithoutButtonRoleError, LabelMissingControlError } from './src/CustomError.js';
import { isHidden, isAccessibleText } from './isHelper.js'
const inputSelector = 'input[type=text], input[type=url], input[type=search], input[type=number], input[type=password], input[type=checkbox], input[type=radio], textarea';

const checkAltAttributeForImg = (context, logErrorCallback) => {
    for (const img of context.querySelectorAll('img')) {
        if (!img.hasAttribute('alt')) {
            logErrorCallback(new ImageWithoutAltAttributeError(img))
        }
    }
}

const checkButton = (context, logErrorCallback) => {
    for (const button of context.querySelectorAll('button')) {
        if (!isHidden(button) && !isAccessibleText(button)) {
            logErrorCallback(new DOMElementWithoutLabelError(button))
        }
    }
}

const checkInput = (context, logErrorCallback) => {
    for (const input of context.querySelectorAll(inputSelector)) {
        const inputLabel = input.labels ? input.labels[0] : false;
        if (!inputLabel && !isHidden(input) && !input.hasAttribute('aria-label')) {
          logError(new DOMElementWithoutLabelError(input))
        }
    }
}

const checkTabIndexAttributeForListItem = (context, logErrorCallback) => {
    for (const li of context.querySelectorAll('li')) {
        if (!li.hasAttribute('tabindex')) {
            logErrorCallback(new ListItemWithoutTabIndexError(li))
        }
    }
}

const checkLink = (context, logErrorCallback) => {
    for (const a of context.querySelectorAll('a')) {
        if (a.getAttribute('href') === '' && a.getAttribute('href') === null) {
            logError(new LinkWithoutHrefError(a));
        }
        else if (a.getAttribute('role') !== 'button') {
          logError(new LinkWithoutButtonRoleError(a));
        } else if (!isAccessibleText(a)) {
          logError(new DOMElementWithoutLabelError(a));
        }
      }
}

const checkLabel = (context, logErrorCallback) => {
    for (const label of context.querySelectorAll('label')) {
        const control = label.control;
    
        if (!control && !isHidden(label)) {
          logError(new LabelMissingControlError(label));
        }
      }
}

export {
    checkAltAttributeForImg,
    checkButton,
    checkInput,
    checkLink,
    checkLabel,
    checkTabIndexAttributeForListItem
}