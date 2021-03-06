module.exports = {
  //-- SITE SETTINGS -----
  author: "@kent28808",
  siteTitle: "Ken T. Portfolio",
  siteShortTitle: "Ken T.", // Used as logo text in header, footer, and splash screen
  siteDescription: "Ken T. Portfolio",
  siteUrl: "https://kent28.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Ken T.", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed: "",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 0,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/kent28808",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/kent28808/",
    },
    {
      name: "Medium",
      url:
        "https://kent28.medium.com/protecting-user-passwords-using-bcrypt-ff69d20660fd",
    },
    {
      name: "Contact Me",
      url:
        "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kent28808@gmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "resume.pdf", // the file has to be placed inside the static folder at the root level
      url:
        "https://docs.google.com/document/d/1LlOWe9pnQapP6rHp6sw2lhkO0rfG1mJxGrjxDP0UT-s/edit?usp=sharing", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "",
      url: "/privacy",
    },
    {
      name: "",
      url: "/imprint",
    },
  ],
}
