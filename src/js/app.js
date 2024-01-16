export function orderByProps(obj, sortKeys) {
  const characterSortArray = [];
  const characterUnsortArray = [];
  for (let item in obj) {
      const index = sortKeys.indexOf(item);
      if (index > -1) {
          characterSortArray[index] = {key: item, value: obj[item]};
      } else {
          characterUnsortArray.push({key: item, value: obj[item]});
      }
  }
  characterUnsortArray.sort(function (a, b) {
      if (a.key > b.key) {
          return 1;
      }
      if (a.key < b.key) {
          return -1;
      }
      });
      return [...characterSortArray, ...characterUnsortArray]; 
}