class ImageWithoutAltAttributeError extends Error {
    constructor(element) {
        super(element);
        this.name = 'ImageWithoutAltAttributeError'
        this.stack = new Error().stack
        this.element = element
        this.message = `Missing alt attribute on ${inspect(element)}`
    }
}

export {
    ImageWithoutAltAttributeError
}