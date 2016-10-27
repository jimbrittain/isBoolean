# Javascript isBoolean function
isBoolean attempts to determine if a supplied variable is a boolean.
## Usage
```
var o = true;
    isBoolean(o) === true;
    o = 1;
    isBoolean(o) === false
```

## Methodology
```
    return (boo !== undefined && (boo === true || boo === false));
```

## Issues

* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
