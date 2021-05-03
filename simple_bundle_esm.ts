import * as esbuild from 'https://deno.land/x/esbuild@v0.11.10/mod.js'
const result = await esbuild.build({
  entryPoints: ["in.ts"],
  bundle: true,
  format: "esm",
  outfile: 'out_bundle_esm.js',
})
console.log('result:', result)
esbuild.stop()
