/* eslint-disable no-undef */
import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export default handler;
