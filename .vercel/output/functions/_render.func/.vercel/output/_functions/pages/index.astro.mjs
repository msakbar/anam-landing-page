import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, m as maybeRenderHead, f as renderComponent, u as unescapeHTML } from '../chunks/astro/server_B32fDX9L.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_DNJ9MAaH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm"> <nav class="container mx-auto px-6 py-3"> <div class="flex justify-between items-center"> <div class="text-xl font-bold">Your Company Name</div> <div> <a href="#services" class="text-gray-800 hover:text-blue-600 px-3 py-2">Services</a> <a href="#about" class="text-gray-800 hover:text-blue-600 px-3 py-2">About</a> <a href="#contact" class="text-gray-800 hover:text-blue-600 px-3 py-2">Contact</a> </div> </div> </nav> </header>`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/components/Header.astro", void 0);

const teamMeetingImage = new Proxy({"src":"/_astro/team-meeting.DmeBOUfr.jpg","width":5551,"height":3701,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/assets/team-meeting.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen"> <div class="absolute inset-0"> ${renderComponent($$result, "Image", $$Image, { "src": teamMeetingImage, "alt": "Team collaborating in a meeting", "class": "w-full h-full object-cover" })} <div class="absolute inset-0 bg-gray-900 opacity-40"></div> </div> <div class="relative h-full flex items-center justify-center"> <div class="text-center px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
Software Solutions for<br>Small-Medium Businesses
</h1> <p class="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
Streamline your operations with expert software implementations tailored for your business growth.
</p> <div class="mt-10"> <a href="#contact" class="inline-block bg-white py-3 px-8 rounded-full text-lg font-semibold text-blue-600 hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl">
Get Started
</a> </div> </div> </div> </section>`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: className } = Astro2.props;
  const icons = {
    zoho: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm105.6 320h-211.2l105.6-182.9L361.6 352z" fill="#3B82F6"/>
  </svg>`,
    salesforce: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M404.5 373.6c-26.1 0-49.9-9.9-67.9-26.1-18 16.2-41.8 26.1-67.9 26.1-26.1 0-49.9-9.9-67.9-26.1-18 16.2-41.8 26.1-67.9 26.1-55.8 0-101.1-45.3-101.1-101.1s45.3-101.1 101.1-101.1c26.1 0 49.9 9.9 67.9 26.1 18-16.2 41.8-26.1 67.9-26.1 26.1 0 49.9 9.9 67.9 26.1 18-16.2 41.8-26.1 67.9-26.1 55.8 0 101.1 45.3 101.1 101.1s-45.3 101.1-101.1 101.1z" fill="#2563EB"/>
  </svg>`,
    float: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <rect width="512" height="512" rx="15%" fill="#1D4ED8"/>
    <path d="M109 109h294v294H109z" fill="#fff"/>
    <path d="M229 229h74v74h-74z" fill="#1D4ED8"/>
  </svg>`
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(className, "class")}>${unescapeHTML(icons[name])}</span>`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/components/Icon.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      name: "Zoho Implementation",
      description: "Streamline your business processes with Zoho suite",
      icon: "zoho"
    },
    {
      name: "Salesforce Setup",
      description: "Boost your sales and customer relationships with Salesforce CRM",
      icon: "salesforce"
    },
    {
      name: "Float Integration",
      description: "Improve your cash flow forecasting with Float",
      icon: "float"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-20 bg-gray-100"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"> <div class="flex items-center mb-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": service.icon, "class": "w-6 h-6 mr-2 transition duration-300 ease-in-out transform hover:scale-110" })} <h3 class="text-xl font-semibold text-gray-800">${service.name}</h3> </div> <p class="text-gray-600">${service.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/components/Services.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center mb-8">About Us</h2> <p class="text-lg text-center max-w-3xl mx-auto">
We are a team of experienced consultants specializing in implementing software solutions for small to medium-sized businesses. Our expertise in Zoho, Salesforce, Float, and other leading platforms allows us to tailor solutions that drive efficiency and growth for our clients.
</p> </div> </section>`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/components/About.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-gray-100"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2> <form class="max-w-lg mx-auto" id="contactForm"> <div class="mb-4"> <label for="name" class="block mb-2">Name</label> <input type="text" id="name" name="name" class="w-full p-2 border rounded" required> </div> <div class="mb-4"> <label for="email" class="block mb-2">Email</label> <input type="email" id="email" name="email" class="w-full p-2 border rounded" required> </div> <div class="mb-4"> <label for="message" class="block mb-2">Message</label> <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded" required></textarea> </div> <div class="mb-4 hidden"> <label for="honeypot" class="sr-only">Leave this field empty</label> <input type="text" id="honeypot" name="honeypot"> </div> <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700">Send Message</button> </form> <div id="formStatus" class="mt-4 text-center hidden"> <p id="statusMessage"></p> </div> </div> </section> `;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white py-6"> <div class="container mx-auto px-6 text-center"> <p>&copy; 2024 Your Company Name. All rights reserved.</p> </div> </footer>`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Small Business Software Consultant" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/pages/index.astro", void 0);

const $$file = "/Users/shehzad/Documents/code/implementation_specialist/landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
