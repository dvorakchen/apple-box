import { defineConfig } from "rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default defineConfig({
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss(),
    typescript({
      tsconfigOverride: {
        exclude: ["**/*.cy.tsx", "**/cypress/"],
      },
    }),
    resolve(),
    commonjs(),
    json(),
    terser(),
  ],
});
