export const handler = (request: any, context: any, callback: (error: boolean, response: any) => void): void => {

  return callback(null, {
  	statusCode: 200,
  	body: "bar"
  })
}