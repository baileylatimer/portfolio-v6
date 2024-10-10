/* eslint-disable no-undef */
import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export default async (event, context) => {
  try {
    console.log('Incoming request:', event);
    const response = await handler(event, context);
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error in server.js:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
