import React from 'react'

export const defaultList = [
  { task: <span>Check the <mark>react-use-array</mark> demo</span>, done: true },
  { task: <span>Install with <code>npm install --save react-use-array</code> and then import as <code>{`import useArray from 'react-use-array'`}</code></span>, done: false },
  { task: 'Follow the example and docs! 🎉 🎉 🎉', done: false },
];

export const getTask = () => ({
  done: false,
  task: 'Your new task. Timestamp: ' + new Date().getTime()
});

export const mergeBeforeList = [
  { task: <span>Added with <code>mergeBefore</code></span>, done: false },
];

export const mergeAfterList = [
  { task: <span>Added with <code>mergeAfter</code></span>, done: false },
];
