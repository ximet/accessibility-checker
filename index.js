import { ImageWithoutAltAttributeError } from './Error.js';

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