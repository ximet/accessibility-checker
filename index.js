import { checkAltAttributeForImg, checkButton, checkInput, checkLink, checkLabel, checkTabIndexAttributeForListItem } from './src/checkerHelper.js';

export const checkProblemsAStandard = (context, logger) => {
    checkAltAttributeForImg(context, logger);
    checkButton(context, logger);
    checkInput(context, logger);  
    checkLink(context, logger);
    checkLabel(context, logger);
    checkTabIndexAttributeForListItem(context, logger);  
}

export const checkProblemsAAStandard = (context, logger) => {
    checkProblemsAStandard(context, logger);
}

export const checkProblemsAAAStandard = (context, logger) => {
    checkProblemsAAStandard(context, logger);
}