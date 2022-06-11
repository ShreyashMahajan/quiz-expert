import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/cart
 * */
export const getResultHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userResult = schema.users.findBy({ _id: userId }).result;
  return new Response(200, {}, { result: userResult });
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart
 * body contains {product}
 * */

export const addResultHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userResult = schema.users.findBy({ _id: userId }).result;
    const product = JSON.parse(request.requestBody);
    this.db.users.update({ _id: userId }, { result: product });
    return new Response(201, {}, { result: userResult });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
