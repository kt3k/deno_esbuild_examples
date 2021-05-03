import * as esbuild from 'https://deno.land/x/esbuild@v0.11.10/mod.js'
const result = await esbuild.build({
  entryPoints: ["in.ts"],
  bundle: true,
  outfile: 'out_bundle.js',
})
console.log('result:', result)
esbuild.stop()
