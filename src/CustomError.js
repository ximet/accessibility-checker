class ImageWithoutAltAttributeError extends Error {
    constructor(element) {
        super(element);
        this.name = 'ImageWithoutAltAttributeError'
        this.stack = new Error().stack
        this.element = element
        this.message = `Missing alt attribute on ${element}`
    }
}

class MissingAriaError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'MissingAriaError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing ${attr} attribute on ${element}`;
  }
}

class ButtonWithoutTextError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'ButtonWithoutTextError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing label/alt/title attribute on ${element}`;
  }
}

class InputWithoutLabelError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'InputWithoutLabelError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing label attribute on ${element}`;
  }
}

export {
    ImageWithoutAltAttributeError,
    ButtonWithoutTextError,
    InputWithoutLabelError
}