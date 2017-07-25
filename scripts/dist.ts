import { CSSModules, CSSPlugin, FuseBox, ImageBase64Plugin, SassPlugin, EnvPlugin, CSSResourcePlugin, CopyPlugin, QuantumPlugin, WebIndexPlugin, PostCSSPlugin } from "fuse-box";
import { cp, mkdir, rm } from "shelljs";
import { Environment } from "./Environment";
import * as express from "express";
import * as proxy from "express-http-proxy";
import * as path from "path";
import * as url from "url";
import { config } from "./config";

// paths
const SRC_PATH = "src/";
const BUILD_PATH = "dist/"; // Relative to the HomeDir.

// clean build folder
rm("-rf", BUILD_PATH);
mkdir("-p", BUILD_PATH);
// copy assets
cp("-rf", "assets/*", BUILD_PATH);

// start dev-server
const fuse = new FuseBox({
  homeDir: `../${SRC_PATH}`,
  tsConfig: `../${SRC_PATH}tsconfig.json`,
  output: `../${BUILD_PATH}$name.js`,
  sourceMaps: false,
  plugins: [
    CopyPlugin({
      files: [`../${SRC_PATH}/styles/*.css`],
      dest: "assets"
    }),
    EnvPlugin({
      NODE_ENV: Environment.Development,
      API_BASEURL: config.dist.api_base_url, //Provide path only so that we direct to our proxy.
    }),
    ImageBase64Plugin({
      useDefault: true
    }),
    [
      "*.scss",
      SassPlugin({
        importer: true
       }),
      CSSResourcePlugin({
        dist: `../${BUILD_PATH}/assets`,
        resolve: (f) => `/assets/${f}`,
      }),
      CSSModules(),
      CSSPlugin(),
      PostCSSPlugin(),
    ],
    [
      "*.css",
      CSSResourcePlugin({
        dist: `../${BUILD_PATH}/assets`,
        resolve: (f) => `/assets/${f}`,
      }),
      CSSModules(),
      CSSPlugin(),
      PostCSSPlugin(),
    ],
    // QuantumPlugin({
    //   uglify: false
    // }),
    WebIndexPlugin({
      title: "Portyr",
      template: `../${BUILD_PATH}index.html`
    })
  ],
});

// fuse.dev({port: 3000, root: false }, server => {
//   const app = server.httpServer.app as express.Application;
//   app.use(express.static(path.resolve(__dirname, `../${BUILD_PATH}`)));
//   app.use("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, `../${BUILD_PATH}/index.html`));
//   });
// });

fuse.bundle("app")
  .instructions(">index.tsx");

fuse.run();
