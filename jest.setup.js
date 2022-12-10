import "whatwg-fetch";
import React from "react";

global.React = React;

Object.defineProperty(window, "scrollTo", { value: () => {}, writable: true });

global.console.error = (args) => {
  throw new Error(args);
};
