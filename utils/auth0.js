import {initAuth0} from '@auth0/nextjs-auth0';
import baseUrl from './baseUrl'

export default initAuth0({
    domain : process.env.AUTH0_DOMAIN,
    clientId : process.env.AUTH0_CLIENT_ID,
    clientSecret : process.env.AUTH0_CLIENT_SECRET,
    scope : 'openid profile',
    redirectUri : `${baseUrl}/api/authentication/callback`,
    postLogoutRedirectUri : `${baseUrl}`,
    session : {
        // The secret used to encrypt the cookie.
        cookieSecret : process.env.AUTH0_COOKIE_SECRET,

    },

});