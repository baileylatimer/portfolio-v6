/* eslint-disable no-unused-vars, no-undef */
import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

const remixHandler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export default async (event, context) => {
  console.log('Function invoked with event:', JSON.stringify(event, null, 2));
  console.log('Context:', JSON.stringify(context, null, 2));

  try {
    // Return a simple response for testing
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello from Remix on Netlify!' }),
    };

    console.log('Returning response:', JSON.stringify(response, null, 2));
    return response;

    // Uncomment the following block when the simple response works
    /*
    const response = await remixHandler(event, context);
    console.log('Remix handler response:', JSON.stringify(response, null, 2));
    return response;
    */
  } catch (error) {
    console.error('Error in server.js:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message, stack: error.stack }),
    };
  }
};
