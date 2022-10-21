import useSSR from "use-ssr";

/*
  index.ts:8:1 - error TS2349: This expression is not callable.
  Type 'typeof import("......./tsc-esm-issue-with-use-ssr/node_modules/use-ssr/dist/useSSR")' has no call signatures.
*/

useSSR();
