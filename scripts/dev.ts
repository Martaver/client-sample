import { CSSModules, CSSPlugin, FuseBox, ImageBase64Plugin, SassPlugin, EnvPlugin } from "fuse-box";
import { cp, mkdir, rm } from "shelljs";
import { Environment } from "./Environment";
import * as express from "express";
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
    EnvPlugin({NODE_ENV: Environment.Development}),
    ImageBase64Plugin(),
    [SassPlugin(), CSSModules(), CSSPlugin()],
  ],
});

fuse.dev({port: 3000, root: false }, server => {
  const app = server.httpServer.app as express.Application;
  app.use(express.static(`D:/mm/portyr/portyr-client/${BUILD_PATH}`));
  app.use("*", (req, res) => {
    res.sendFile(`D:/mm/portyr/portyr-client/${BUILD_PATH}/index.html`);
  });
});

fuse.bundle("vendor")
  .instructions("~ index.dev.tsx");

fuse.bundle("app")
  .instructions("!> [index.dev.tsx]")
  .watch()
  .hmr();

fuse.run();
