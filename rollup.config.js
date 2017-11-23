import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

const env = process.env.NODE_ENV
const config = {
  format: 'umd',
  moduleName: 'ReduxPersist',
  exports: 'named',
  sourceMap: true,
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: ['node_modules/json-stringify-safe/**']
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

export default config