import { Netlify } from "netlify-local";

export const handler: Netlify.Handler<handler.Request, handler.Context, handler.Response> = (request, context, callback) => {

  callback(null, {
  	statusCode: 200,
  	body: "bar"
  })
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
