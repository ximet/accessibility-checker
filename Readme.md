# Accessibility checker lib

client side accessibility checke

## Checklist

http://a11yproject.com/checklist.html

## Install

```
npm install accessibility-checker --save
```

## Usage

```javascript
import {checkProblemsAAStandard} from 'accessibility-checker'

function logError(error) {
    console.error(`${error.name}\n\n${error.message}`)
}

document.addEventListener('DOMContentLoaded', () => {
  checkProblemsAAStandard(document, logError)
})
```