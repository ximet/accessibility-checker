class ImageWithoutAltAttributeError extends Error {
    constructor(element) {
        super(element);
        this.name = 'ImageWithoutAltAttributeError'
        this.stack = new Error().stack
        this.element = element
        this.message = `Missing alt attribute on ${element}`
    }
}

class missingAriaError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'MissingAriaError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing ${attr} attribute on ${element}`;
  }
}

export {
    ImageWithoutAltAttributeError
}