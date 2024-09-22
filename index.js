const replaceAll = String.prototype.replaceAll ? 
(x, y, z) => (String.prototype.replaceAll.call(x, y, z)) 
: require("string.prototype.replaceall");
function htmldecode(text){
    let temp = document.createElement("div");
    temp.innerHTML = text;
    let output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}
(( () => {
const BLOCK_REG = /\$\$[\s\S]*\$\$/g;
const INLINE_REG = /\$[\s\S]*\$/g;
  let docsify_katex_ex = (hook, vm) => {
    hook.beforeEach((markdown) => {
        let result_a  = (replaceAll(markdown, BLOCK_REG, (v) => {
          return katex.renderToString(v.substr(2, v.length - 4), { displayMode: true });
        }));
        let final_result  = (replaceAll(result_a, INLINE_REG, (v) => {
          v = htmldecode(v); // temp solution
          return katex.renderToString(v.substr(1, v.length - 2), { displayMode: false });
        }));
      return final_result;
    });
  };
  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(docsify_katex_ex, $docsify.plugins || []);
})());