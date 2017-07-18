import { rgba } from "csx";
import { px } from "csx/lib";
import { style } from "typestyle/lib";

export const black = "#212121";
export const white = "#fff";

export const red = "#BF360C";
export const redDark = "#870000";
export const redLight = "#FF7043";
export const redStrong = "#FF3D00";

export const blue = "#2C99B4";
export const blueDark = "#006b84";
export const blueLight = "#33B3D3";
export const blueStrong = "#39C6EA";

/**
 * The standard color palette used for regular content across the site.
 */
export const palette = {
  black,
  white,
  red,
  redDark,
  redLight,
  redStrong,
  blue,
  blueDark,
  blueLight,
  blueStrong
};

<<<<<<< HEAD:src/theme/index.ts
export const paddingbig = px(30);
export const paddingsmall = px(10);
=======
export const padding = px(6);
export const width = px(960);
>>>>>>> a95a34bf136ebd236b73fc761fd9f9461c1b37cd:src/styles/index.ts

/**
 * The standards spacing configuration used for regular content across the site.
 */
export const spacing = {
  paddingbig,paddingsmall
};

/**
 * The standard container used for regular content, centered with a gutter within a section.
 */
export const container = style({
  $debugName: 'container',
  width: px(960),
  margin: 'auto',
  padding
});
