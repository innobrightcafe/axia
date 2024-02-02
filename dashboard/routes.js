/**
 * Routes for the public section of the site
 * @type {Array} 
 */

export const publicRoutes = [
    "/"
]

/**
 * Routes for the private section of the site
 * @type {Array} 
 * @redirects to /login and then to dashboard
 */

export const authRoutes = [
    "/login",
    "/",
]

/**
 * The prefix for the api auth routes
 * Routes with this prefix are used for api authentication
 * @type {Array} 
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect route for the auth routes
 * @type {Array} 
 */ 
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"



