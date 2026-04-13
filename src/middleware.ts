import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { url, cookies, redirect } = context;

  if (url.pathname.startsWith("/admin")) {
    // Exclude login endpoint
    if (url.pathname === "/admin/login") {
      return next();
    }

    const authCookie = cookies.get("flyger_admin_auth");
    if (!authCookie) {
      return redirect("/admin/login", 302);
    }
  }

  return next();
});
