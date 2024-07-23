export const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "About Us",
    path: "/about",
    icon: "about",
  },
  {
    title: "Projects",
    path: "#",
    icon: "projects",
    children: [
      { title: "Project 1", path: "/projects" },
      { title: "Project 2", path: "/projects" },
    ],
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: "reviews",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: "blog",
  },
  // {
  //   title: "Contact Us",
  //   path: "/contact",
  //   icon: "contactus",
  // },
];
