import _ from "lodash";

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log('startIndex', startIndex);
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
//this will return a lodash object
