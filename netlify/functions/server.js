/* eslint-disable no-unused-vars, no-undef */
import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

const remixHandler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export default async (event, context) => {
  console.log('Incoming request:', event);
  
  // Return a simple response for testing
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Hello from Remix on Netlify!' }),
  };

  // Uncomment the following block when the simple response works
  /*
  try {
    const response = await remixHandler(event, context);
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error in server.js:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
  */
};
