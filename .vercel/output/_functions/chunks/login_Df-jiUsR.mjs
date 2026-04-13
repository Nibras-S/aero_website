import { c as createComponent } from './astro-component_C0aOnk7E.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_Cf8J0QyC.mjs';
import { r as renderComponent } from './entrypoint_CnFHr9Fc.mjs';
import { $ as $$AdminLayout } from './AdminLayout_D53ZVkmL.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  let error = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const password = data.get("password");
    const masterPassword = "FlygerAdmin2026";
    if (password === masterPassword) {
      Astro2.cookies.set("flyger_admin_auth", "authenticated", { path: "/", maxAge: 60 * 60 * 24 });
      return Astro2.redirect("/admin");
    } else {
      error = "Invalid password";
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Login" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="height: 100vh; display: flex; align-items: center; justify-content: center; background: #fafafa;"> <div class="card" style="width: 100%; max-width: 400px;"> <div style="text-align: center; margin-bottom: 2rem;"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="40" width="40" style="margin: 0 auto 1rem;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg> <h2 class="card-title">Flyger Admin Portal</h2> <p class="card-desc">Enter your master password to access the CMS.</p> </div> <form method="POST" style="display: flex; flex-direction: column; gap: 1rem;"> <div> <label class="label" for="password">Password</label> <input type="password" name="password" id="password" class="input" required autofocus> ${error && renderTemplate`<span style="color: var(--destructive); font-size: 0.8rem; margin-top: 0.5rem; display: block;">${error}</span>`} </div> <button type="submit" class="btn btn-primary" style="margin-top: 0.5rem; justify-content: center;">Authenticate</button> </form> </div> </div> ` })}`;
}, "D:/N3 Projects/aero_website/src/pages/admin/login.astro", void 0);
const $$file = "D:/N3 Projects/aero_website/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
