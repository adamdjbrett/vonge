const isProduction = process.env.ELEVENTY_ENV === "production";
const productionUrl = process.env.SITE_URL || "https://example.com";

export default {
  title: "Vonge",
  author: "Vanessa Marley",
  description: "Vonge is a portfolio site template for Zola",
  language: "en",
  languageDirection: "auto",
  dateFormat: "dd LLL yyyy",
  keywords: ["keyword1", "keyword2", "keyword3"],
  url: isProduction ? productionUrl : "http://localhost:8080",
  logoImage: "/images/logo.svg",
  authorImage: "/images/avatar.jpg",
  socialMediaShareImage: "/images/01.jpg",
  twitterHandle: "",
  disqusIdentifier: "",
  googleAnalytics: "",

  navigation: [
    { title: "Home", url: "/" },
    { title: "Projects", url: "/projects/" },
    { title: "Blog", url: "/posts/" },
    { title: "Tags", url: "/tags/" },
    {
      title: "Pages",
      submenu: [
        { title: "About", url: "/about/" },
        { title: "Elements", url: "/elements/" }
      ]
    }
  ],

  socialIcons: [
    { url: "https://github.com/cydave", icon: "GitHub" },
    { url: "https://twitter.com/_cydave", icon: "Twitter" },
    { url: "/feed/feed.xml", icon: "RSS" },
    { url: "https://pinterest.com", icon: "Pinterest" }
  ],

  footer: {
    menu: [
      { title: "Home", url: "/" },
      { title: "Projects", url: "/projects/" },
      { title: "Elements", url: "/elements/" },
      { title: "About", url: "/about/" },
      { title: "Blog", url: "/posts/" }
    ],
    copyright: ""
  },

  newsletter: {
    newsletter_title: "Join my mailing list",
    newsletter_identifier: "",
    newsletter_button: "Subscribe",
    newsletter_description: "Get inspiration, updates and, cool stuff!"
  },

  homepage: {
    hero: {
      title: "Hi there, I am Vanessa Marley",
      description_html:
        "<strong>Photographer</strong> and Visual Content Strategist from Albany. I work as a lifestyle, product, and landscape photographer, creating images for a diverse range of requests, from online media to printed artwork.",
      image: "/images/01.jpg",
      image_alt: "Vanessa Marley's picture",
      cta_button_link: "#contact",
      cta_button: "Get in touch",
      works_button_link: "#projects",
      works_button: "See my works"
    },
    projectsSection: {
      title: "Latest Works",
      description_html:
        "<p>I show only my best works built completely with passion, simplicity, and creativity!</p>",
      link_url: "/projects/",
      show_projects: true
    },
    testimonialsSection: {
      title: "Happy Clients",
      description_html: "",
      show_testimonials: true
    },
    blogSection: {
      title: "Recent Posts",
      description_html:
        "<p>Vonge blog features productivity, tips, inspiration and strategies for massive profits. Find out how to set up a successful blog or how to make yours even better!</p>",
      link_url: "/posts/",
      show_posts: true
    },
    contactForm: {
      form_title: "Get in touch",
      form_description: "Vonge comes with a built-in contact form.",
      form_success_page: "",
      form_submission_email: "site@example.com",
      form_button_text: "Send now"
    }
  },

  testimonials: [
    {
      name: "Justin Baptista",
      position: "Copywriter",
      image: "/images/client-1.jpg",
      blurb:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus."
    },
    {
      name: "Kadin Herwitz",
      position: "Traveler",
      image: "/images/client-2.jpg",
      blurb:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus."
    },
    {
      name: "Tatiana Curtis",
      position: "Art Director",
      image: "/images/client-3.jpg",
      blurb:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus."
    },
    {
      name: "Paul Wade",
      position: "Marketing",
      image: "/images/client-4.jpg",
      blurb:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus."
    }
  ]
};
