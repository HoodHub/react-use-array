import { useState } from 'react';
import { updateAt } from './utils';

const useArray = <T>(initialList: T[]): [T[], typeof functions] => {
  const [list, set] = useState(initialList);

  const functions = {
    set,
    empty: () => set([]),
    replace: (list: T[]) => set(list),
    push: (item: T) => set(l => [...l, item]),
    updateAt: (index: number, updateFn: (item: T) => T) => updateAt(index, updateFn, set),
    setAt: (index: number, value: T) => set(l =>
      [...l.slice(0, index), value, ...l.slice(index + 1)]
    ),
    removeAt: (index: number) => set(l => [...l.slice(0, index), ...l.slice(index + 1)]),
    filter: (filterFn: (item: T) => boolean) => set(l => l.filter(filterFn)),
    map: (mapFn: (item: T) => T) => set(l => [...l].map(mapFn)),
    sort: (sortFn: (a: T, b: T) => number) => set(l => [...l].sort(sortFn)),
    reverse: () => set(l => [...l].reverse()),
    mergeBefore: (arr: T[]) => set(l => [...arr].concat([...l])),
    mergeAfter: (arr: T[]) => set(l => [...l].concat([...arr])),
  };

  return [
    list,
    functions,
  ];
}

export default useArray;
