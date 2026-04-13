import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import './sequence_Cf8J0QyC.mjs';
import 'clsx';

const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logout;
  if (Astro2.request.method === "POST") {
    Astro2.cookies.delete("flyger_admin_auth", { path: "/" });
  }
  return Astro2.redirect("/admin/login");
}, "D:/N3 Projects/aero_website/src/pages/admin/logout.astro", void 0);

const $$file = "D:/N3 Projects/aero_website/src/pages/admin/logout.astro";
const $$url = "/admin/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
