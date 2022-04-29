const input = [
  { username: "ali", hair_color: "brown", height: 1.2 },
  { username: "marc", hair_color: "blue", height: 1.4 },
  { username: "joe", hair_color: "brown", height: 1.7 },
  { username: "zehua", hair_color: "black", height: 1.8 },
];

function improveJSONStructure(arr) {
  const h = Object.keys(arr[0] || {});
  const d = arr.map((el) => Object.values(el));
  return { h, d };
}
