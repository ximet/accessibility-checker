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

class DOMElementWithoutLabelError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'DOMElementWithoutLabelError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing label/alt/title attribute on ${element}`;
  }
}

class ListItemWithoutTabIndexError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'ListItemWithoutTabIndexError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing tabindex attribute on ${element}`;
  }
}

class LinkWithoutButtonRoleError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'LinkWithoutButtonRoleError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing tabindex attribute on ${element}`;
  }
}

class LinkWithoutHrefError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'LinkWithoutHrefError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing tabindex attribute on ${element}`;
  }
}

class LabelMissingControlError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'LabelMissingControlError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing controls on ${element}`;
  }
}

class HeaderWithoutBannerRoleError extends Error {
    constructor(element, attr) {
        super(element);
        this.name = 'HeaderWithoutBannerRoleError';
        this.stack = new Error().stack;
        this.element = element;
        this.message = `Missing role -> banner on ${element}`;
  }
}

export {
    ImageWithoutAltAttributeError,
    DOMElementWithoutLabelError,
    ListItemWithoutTabIndexError,
    LinkWithoutButtonRoleError,
    LinkWithoutHrefError,
    LabelMissingControlError,
    HeaderWithoutBannerRoleError
}