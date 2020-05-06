import React from 'react';
import logo from './logo.png';

export default () =>
  <div className='card'>
    <img src={logo} style={{ height: 96, marginBottom: 12 }} alt='' />
    <img src='https://img.shields.io/npm/v/use-array.svg' alt='' />
    <h1>react-use-array</h1>
    <p>A custom React hook that lets you <mark>manipulate an array data structure</mark> without ever needing extra utilities. Start with:</p>
    <p><code>npm install --save react-use-array</code></p>
    <p>Then, import and use the hook:</p>
    <pre>
      {`import useArray from 'react-use-array'\n`}
      {`// …in your functional component: \n`}
      {`const [ list, {\n`}
      {`  set, empty, replace, push,\n`}
      {`  updateAt, setAt, removeAt,\n`}
      {`  filter, map, sort, reverse, \n`}
      {`  mergeBefore, mergeAfter, \n`}
      {`}] = useArray(defaultList);`}
    </pre>
    <p>Now, let’s go over each of the methods. You can also skip ahead <mark><a href='#docs'>to the docs</a></mark> or <mark><a href='#demo'>the demo.</a></mark></p>
  </div>;
