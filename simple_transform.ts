import * as esbuild from 'https://deno.land/x/esbuild@v0.11.10/mod.js'
const ts = 'let hasProcess: boolean = typeof process != "null"'
const result = await esbuild.transform(ts, { loader: 'ts', logLevel: 'warning' })
console.log('result:', result)
esbuild.stop()
