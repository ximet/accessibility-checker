import { ImageWithoutAltAttributeError } from './src/CustomError.js';
import { checkAltAttributeForImg } from './src/checkerHelper.js';

export const checkProblemsAStandard = (context, logger) = {
    checkAltAttributeForImg(context, logger);
}

export const checkProblemsAAStandard = (context, logger) = {
    checkProblemsAStandard(context, logger);
}

export const checkProblemsAAAStandard = (context, logger) = {
    checkProblemsAAStandard(context, logger);
}