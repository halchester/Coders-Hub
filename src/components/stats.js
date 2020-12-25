import data from "../data";

function merge(prop) {
  return function (acc, obj) {
    return [...obj[prop], ...acc];
  };
}

function countInstances(acc, tag) {
  acc[tag] = acc[tag] ? acc[tag] + 1 : 1;
  return acc;
}

export const tags = () => {
  const allTags = data.reduce(merge("tags"), []);
  const counts = allTags.reduce(countInstances, {});
  const tags = Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA)
    .filter(([, count]) => count >= 1)
    .map(([name, count]) => ({ name, count }));
  return [{ name: "all", count: data.length }, ...tags];
};
