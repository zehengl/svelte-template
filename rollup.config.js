import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;
const baseUrl = production ? process.env.BASE_URL : "";

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      emitCss: true,
    }),

    postcss({
      extract: true,
      minimize: production,
      sourceMap: !production,
      plugins: [require("tailwindcss"), require("autoprefixer")],
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    json(),

    // Generate index.html and manifest.json for production build

    template({
      templatePath: "src/templates/index.html",
      baseUrl: baseUrl,
      outputPath: "public/index.html",
    }),
    template({
      templatePath: "src/templates/manifest.json",
      baseUrl: baseUrl,
      outputPath: "public/manifest.json",
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}

function template(option) {
  let fs = require("fs");
  let templatePath = option.templatePath;
  let baseUrl = option.baseUrl;
  let outputPath = option.outputPath;

  let T = fs.readFileSync(templatePath, "utf-8");
  T = T.replace(/%base%/g, baseUrl ? `${baseUrl}/` : "");
  fs.writeFileSync(outputPath, T);
}
