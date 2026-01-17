// App constants

export const SITE_CONFIG = {
  name: "Nanditha Naik",
  description:
    "Master's in Electrical and Computer Engineering Student at Lloyd Institute of Engineering & Technology | Full-stack Developer | Community Builder | AI & Web Enthusiast",
  url: "https://nandithanaik0.github.io/Web-Portfolio",
  ogImage: "/images/nanditha.png",
  links: {
    email: "nandithanaik8@gmail.com",
    github: "https://github.com/nandithanaik0",
    linkedin: "https://linkedin.com/in/nanditha-naik",
    phone: "+1 6127151665"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" }
];


export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
