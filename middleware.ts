import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Define internal paths that should not redirect (e.g., API routes, static files, etc.)
  const protectedPaths = [
    '/api',
    '/_next',
    '/static',
    '/favicon.ico'
  ];

  // Check if the pathname is part of protected paths
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Define page paths that should not redirect
  const pagePaths = [
    '/',
    '/not-found',
    '/area-51',
    '/hobbies',
    '/projects',
    '/tech',
  ];
  
  // Handle redirection for non-existent routes
  if (!pagePaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
