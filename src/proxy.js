import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
 

export async function proxy(request) {
   const session = await auth.api.getSession({
    headers: await headers() 
});

if (!session || !session.user) {
  return NextResponse.redirect(
    new URL(`/login?callbackUrl=${encodeURIComponent(request.nextUrl.pathname)}`, request.url));
}
  return NextResponse.next()
}
 

 
export const config = {
  matcher: ['/all-appointment/:id', '/dashboard'],
};
//http;//localhost:3000/about/all-path