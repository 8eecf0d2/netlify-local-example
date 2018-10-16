import { Netlify } from "netlify-local";

export const handler: Netlify.Handler<handler.Request, handler.Context, handler.Response> = async (request, context, callback) => {

	await new Promise(r => setTimeout(() => r(), 1000));

  return {
  	statusCode: 200,
  	body: "foo"
  }
}

export namespace handler {
	export interface Request extends Netlify.Handler.Request {
		headers: {}
	}
	export interface Context extends Netlify.Handler.Context {
		user: {}
	}
	export interface Response extends Netlify.Handler.Response {
		body: string;
	}
}