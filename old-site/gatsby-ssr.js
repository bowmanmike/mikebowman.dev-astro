/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";

import Layout from "./src/components/Layout.js";

import "./src/styles/global.css";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
