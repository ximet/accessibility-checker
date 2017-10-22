import { checkAltAttributeForImg, checkButton } from './src/checkerHelper.js';
import { checkButton } from './src/checkerHelper';

export const checkProblemsAStandard = (context, logger) = {
    checkAltAttributeForImg(context, logger);
    checkButton(context, logger);
}

export const checkProblemsAAStandard = (context, logger) = {
    checkProblemsAStandard(context, logger);
}

export const checkProblemsAAAStandard = (context, logger) = {
    checkProblemsAAStandard(context, logger);
}