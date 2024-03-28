// npm package name: node-html-minify

class HTMLMinifier {
    constructor() {
        this.replace = [
            //remove tabs before and after HTML tags
            [/\>[^\S ]+/gs, '>'],
            [/[^\S ]+\</gs, '<'],

            //shorten multiple whitespace sequences; keep new-line characters because they matter in JS!!!
            [/(?:\s+)/gs, ' '],

            //remove leading and trailing spaces
            [/^([\t ])+/gm, ''],
            [/([\t ])+$/gm, ''],

            // remove JS line comments (simple only); do NOT remove lines containing URL (e.g. 'src="http://server.com/"')!!!
            [/(?:\/\/[a-zA-Z0-9 ]+$)/gm, ''],

            //remove empty lines (sequence of line-end and white-space characters)
            [/\n\s*\n/gs, '\n'],

            //remove empty lines (between HTML tags); cannot remove just any line-end characters because in inline JS they can matter!
            [/\>[\r\n\t ]+\</gs, '><'],

            //remove "empty" lines containing only JS's block end character; join with next line (e.g. "}\n}\n</script>" --> "}}</script>"
            [/}[\r\n\t ]+/gs, '}'],
            [/},[\r\n\t ]+/gs, '},'],

            //remove new-line after JS's function or condition start; join with next line
            [/\)[\r\n\t ]?{[\r\n\t ]+/gs, '){'],
            [/,[\r\n\t ]?{[\r\n\t ]+/gs, ',{'],

            //remove new-line after JS's line end (only most obvious and safe cases)
            [/\),[\r\n\t ]+/gs, '),'],

            //remove quotes from HTML attributes that does not contain spaces; keep quotes around URLs!
            // [/(\n|^)(\x20+|\t)/gs, "\n"],
            // [/(\n|^)\/\/(.*?)(\n|$)/gs, "\n"],
            [/\n/gs, " "],
            [/<\!--.*?-->/gs, ""],

            // Delete multispace (Without \n)
            [/\s+/gs, " "],

            // strip whitespaces between tags
            [/\>\s+\</gs, "><"],

            // strip whitespaces between quotation ("') and end tags
            [/(\"|\')\s+\>/gs, "$1>"],

            // strip whitespaces between = "'
            [/\=\s+(\"|\')/gs, "=$1"]
        ];
    }

    htmlMinify(html) {
        let result = html;

        this.replace.forEach(replaceRule => {
            result = result.replace(replaceRule[0], replaceRule[1]);
        });

        return result;
    }
}

module.exports = HTMLMinifier;
