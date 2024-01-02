import { NextAuth} from 'next-auth' 
import { authConfig } from './app/authConfig'
 
// This function can be marked `async` if using `await` inside
export  default NextAuth(authConfig).auth
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
         
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
      ],
}