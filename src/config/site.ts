// const links = {
//   x: "https://twitter.com/sample",
//   github: "https://github.com/sample/furniture",
//   githubAccount: "https://github.com/sample",
//   discord: "https://discord.com/users/sample",
// };

export const siteConfig = {
  name: "Furniture Shop",
  description:
    "Your trusted destination for quality products and exceptional service.",
  mainNav: [
    {
      title: "Home",
    },
    {
      title: "About",
      href: "about",
    },
    {
      title: "FAQ",
      href: "faq",
    },
  ],
  footerNav: [
    {
      title: "Quick Links",
      items: [
        {
          title: "Home",
          href: "/",
          external: true,
        },
        {
          title: "About",
          href: "about",
          external: true,
        },
        {
          title: "FAQ",
          href: "faq",
          external: true,
        },
      ],
    },
    {
      title: "Customer Service",
      items: [
        {
          title: "support@ecommerce.com",
          href: "#",
          external: false,
        },
        {
          title: "+95 123 456 789",
          href: "#",
          external: false,
        },
        {
          title: "24/7 Support",
          href: "#",
          external: false,
        },
      ],
    },
    {
      title: "Follow Us",
      items: [
        {
          title: "Stay Connected for Updates & special offers",
        },
      ],
    },
  ],
};
