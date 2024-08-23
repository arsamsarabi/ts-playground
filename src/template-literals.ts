// COLOR

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgb(${number}, ${number}, ${number}${`, ${number}` | ""})`;
const myColor: RGBA = "rgb(255, 255, 0)";

type RGBTuple<T extends string> =
  T extends `rgb(${infer r extends number},${infer g extends number},${infer b extends number})`
    ? [r, g, b]
    : never;

type ColorTuple = RGBTuple<"rgb(1,2,3)">;

// GAP

type GapType = "margin" | "padding";
type GapPosition = "top" | "right" | "bottom" | "left";
type GapCss = GapType | `${GapType}-${GapPosition}`;

type SizeType = "rem" | "px";
type SizeCss = `${number}${SizeType}`;
type MarginPadding = {
  [key in GapCss]?: SizeCss;
};
const margin: MarginPadding = {
  "margin-top": "1rem",
  "margin-right": "12px",
  "margin-bottom": "2px",
  "margin-left": "2rem",
};

// MISC

type HelloWorld = "Hello World";
type NumberWorld = "2 World";
type FirstCharacter<T extends string> = T extends `${infer head}${infer tail}`
  ? head
  : never;

type StartsWithNumber<T extends string> =
  T extends `${infer head extends number}${infer tail}` ? head : never;

type Check = FirstCharacter<HelloWorld>;
type Check2 = StartsWithNumber<NumberWorld>;
