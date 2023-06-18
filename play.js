/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const ans = [];
  for (let c of s) {
    if (c === "(" || c === "[" || c === "{") ans.push(c);
    else if (c === ")" && ans[ans.length - 1] === "(") ans.pop();
    else if (c === "}" && ans[ans.length - 1] === "{") ans.pop();
    else if (c === "]" && ans[ans.length - 1] === "[") ans.pop();
    else return false;
  }
  if (ans.length > 0) return false;
  return true;
};
console.log(isValid('()'));