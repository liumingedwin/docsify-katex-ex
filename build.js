require('esbuild').build({
    entryPoints: ['index.js'],
    bundle: true,
    minify: true, 
    sourcemap: "linked", 
    outfile: 'docsify-katex-ex.minimal.js',
    platform: 'browser',
    target: ["es2015"]
}).catch(() => process.exit(1))