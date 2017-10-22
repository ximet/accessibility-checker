import { ImageWithoutAltAttributeError, ButtonWithoutTextError } from './src/CustomError.js';
import { isHidden, isAccessibleText } from './isHelper.js'

const checkAltAttributeForImg = (context, logErrorCallback) => {
    for (const img of context.querySelectorAll('img')) {
        if (!img.hasAttribute('alt')) {
            logErrorCallback(new ImageWithoutAltAttributeError(img))
        }
    }
}

const checkButton = (context, logErrorCallback) => {
    for (const button of context.querySelectorAll('button')) {
        if (!elementIsHidden(button) && !accessibleText(button)) {
            logErrorCallback(new ButtonWithoutTextError(button))
        }
    }
}

export {
    checkAltAttributeForImg,
    checkButton
}