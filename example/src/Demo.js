import React from 'react';
import useArray from 'react-use-array';
import { defaultList, getTask, mergeBeforeList, mergeAfterList } from './demoData';

export default () => {
  const [
    list,
    { empty, push, updateAt, filter, removeAt, map, reverse, mergeBefore, mergeAfter }
  ] = useArray(defaultList);

  return (
    <div id='demo'>
      <div className='buttons'>
        <h2>Demo</h2>
        <p>
          All of the code is{' '}
          <a
            href='https://github.com/hoodhub/react-use-array/blob/master/example/src/Demo.js'
            target='_blank'
            rel='noopener noreferrer'
          >available on Github.
          </a>
        </p>
        <button onClick={() => filter(item => !item.done)}>
          Remove completed
        </button>
        <button onClick={empty}>
          Remove all
        </button>
        <button onClick={() => push(getTask())}>
          Add task
        </button>
        <button onClick={() => map(item => ({...item, done: !item.done}))}>
          Toggle “done”
        </button>
        <button onClick={reverse}>
          Reverse
        </button>
        <button onClick={() => mergeBefore(mergeBeforeList)}>
          Merge before
        </button>
        <button onClick={() => mergeAfter(mergeAfterList)}>
          Merge after
        </button>
      </div>
      {list.map((item, index) =>
        <div
          key={index}
          className={'card ' + (item.done ? 'card--done' : '')}
        >
          <p>{item.task}</p>
          <button
            onClick={() => updateAt(index, item => ({...item, done: !item.done}))}
          >
            {item.done ? '↩️ Undo' : '✅ Done'}
          </button>
          <button
            onClick={() => removeAt(index)}
          >
            ❌ Delete
          </button>
        </div>
      )}
    </div>
  );
}
