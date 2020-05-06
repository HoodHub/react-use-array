export const updateAt = <T>(index: number, updateFn: (item: T) => T, set: React.Dispatch<React.SetStateAction<T[]>>) =>
  set(l => {
    const copy = l.slice(0);
    const item = copy[index];
    copy[index] = updateFn(item);
    return copy;
  });
