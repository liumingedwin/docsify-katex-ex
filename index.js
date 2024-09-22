
((() => {
    $docsify = $docsify || {};
    let htmldecode = (text) => {
        let temp = document.createElement("div");
        temp.innerHTML = text;
        let output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
    const renderer = katex.renderToString;
    const block_opt = { displayMode: true, ...$docsify.docsify_katex_ex };
    const inline_opt = { displayMode: false, ...$docsify.docsify_katex_ex };
    const placeholder = new Date().toString();
    let results_array = [];
    let handle_inline = (markdown) => {
        let pieces = markdown.split("$");
        if (pieces.length % 2 == 0) {
            console.warn("[Inline]Odd Pieces Length Found - %d", pieces.length);
            return markdown;
        }
        let result = "";
        for (let i in pieces) {
            if (i & 1) {
                results_array.push(renderer(pieces[i], inline_opt));
                result += `${placeholder}${results_array.length - 1}${placeholder}`;
            }
            else {
                result += pieces[i];
            }
        }
        return result;
    }
    let handle_blocks = (markdown) => {
        let pieces = markdown.split("$$");
        if (pieces.length % 2 == 0) {
            console.warn("[Blocks]Odd Pieces Length Found - %d", pieces.length);
            return markdown;
        }
        let result = "";
        for (let i in pieces) {
            if (i & 1) {
                results_array.push(renderer(htmldecode(pieces[i]), block_opt));
                result += `${placeholder}${results_array.length - 1}${placeholder}`;
            }
            else {
                result += handle_inline(pieces[i]);
            }
        }
        return result;
    }
    let docsify_katex_ex = (hook, vm) => {
        hook.beforeEach((markdown) => {
            return handle_blocks(markdown);
        });
        hook.afterEach(function (html) {
            for (let i in results_array) {
                html = html.replace(`${placeholder}${i}${placeholder}`, results_array[i])
            }
            // ...
            return html;
        });

    };
    // Add plugin to docsify's plugin array
    $docsify.plugins = [].concat(docsify_katex_ex, $docsify.plugins || []);
})());