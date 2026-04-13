import { a7 as defineMiddleware, ag as sequence } from './chunks/sequence_Cf8J0QyC.mjs';
import 'piccolore';
import 'clsx';

const onRequest$1 = defineMiddleware((context, next) => {
  const { url, cookies, redirect } = context;
  if (url.pathname.startsWith("/admin")) {
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
