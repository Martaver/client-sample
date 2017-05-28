import { CSSModules, CSSPlugin, FuseBox, ImageBase64Plugin, SassPlugin, EnvPlugin, CSSResourcePlugin, CopyPlugin } from "fuse-box";
import { cp, mkdir, rm } from "shelljs";
import { Environment } from "./Environment";
import * as express from "express";
import * as proxy from "express-http-proxy";

// paths
const SRC_PATH = "src/";
const BUILD_PATH = "dev/"; // Relative to the HomeDir.

// clean build folder
rm("-rf", BUILD_PATH);
mkdir("-p", BUILD_PATH);
// copy assets
cp("-rf", "assets/*", BUILD_PATH);

// start dev-server
const fuse = new FuseBox({
  homeDir: "../" + SRC_PATH,
  tsConfig: `../${SRC_PATH}tsconfig.json`,
  output: `../${BUILD_PATH}$name.js`,
  sourceMaps: true,
  plugins: [
    CopyPlugin({
      files: [`../${SRC_PATH}/styles/*.css`],
      dest: "assets"
    }),
    EnvPlugin({
      NODE_ENV: Environment.Development
    }),
    ImageBase64Plugin({
      useDefault: true
    }),
    [
      SassPlugin({
        importer: true
      }),
      CSSModules(),
      CSSResourcePlugin({
        dist: `../${BUILD_PATH}/assets`,
        resolve: (f) => `/assets/${f}`,
      }),
      CSSPlugin()
    ],
  ],
});

fuse.dev({port: 3000, root: false }, server => {
  const app = server.httpServer.app as express.Application;
  app.use(express.static(`D:/mm/portyr/portyr-client/${BUILD_PATH}`));
  app.use("/api", proxy("localhost:5000"));
  app.use("*", (req, res) => {
    res.sendFile(`D:/mm/portyr/portyr-client/${BUILD_PATH}/index.html`);
  });
});

fuse.bundle("app")
  .instructions("!> [index.dev.tsx]")
  .watch()
  .hmr();

fuse.bundle("vendor")
  .instructions("~ index.dev.tsx");

fuse.run();
