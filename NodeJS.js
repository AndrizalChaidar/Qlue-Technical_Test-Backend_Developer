function getShape(num) {
  let result = "";
  if (num % 2 === 0) {
    result += "CIRCLE";
  }
  if (num % 3 === 0) {
    result += result ? " STAR" : "STAR";
  }
  return result || null;
}
