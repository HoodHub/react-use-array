[![NPM](https://img.shields.io/npm/v/use-array.svg)](https://www.npmjs.com/package/react-use-array)
# react-use-array

A custom React hook that lets you manipulate an array data structure without ever needing extra utilities. Actively maintained, issues and PRs welcome. **Now with full TypeScript support.**

Forked from [filipdanic/use-array](https://github.com/filipdanic/use-array).

[👉 Demo site and docs.](https://hoodhub.github.io/react-use-array/)

Start with:

```bash
npm install --save react-use-array
```

Then, import and use the hook:

```javascript
import useArray from 'react-use-array'
// …in your functional component:
const [ list, {
  set, empty, replace, push,
  updateAt, setAt, removeAt,
  filter, map, sort, reverse,
  mergeBefore, mergeAfter,
}] = useArray(defaultList);
```

## Docs

The complete documentation as well as a live demo [is available here.](https://hoodhub.github.io/react-use-array/)

## License

MIT © [HoodHub](https://github.com/hoodhub)
