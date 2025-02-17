import home_icon from "../../assets/icons/headerIcons/home.png";
import home_active_icon from "../../assets/icons/headerIcons/home-red.png";
import resume_icon from "../../assets/icons/headerIcons/resume.png";
import resume_active_icon from "../../assets/icons/headerIcons/resume-red.png";
import projects_icon from "../../assets/icons/headerIcons/projects.png";
import projects_active_icon from "../../assets/icons/headerIcons/projects-red.png";
import blog_icon from "../../assets/icons/headerIcons/blog.png";
import blog_active_icon from "../../assets/icons/headerIcons/blog-red.png";
import contact_icon from "../../assets/icons/headerIcons/contact.png";
import contact_active_icon from "../../assets/icons/headerIcons/contact-red.png";

export const navLinks = [
  { to: "/", icon: home_icon, active_icon: home_active_icon, label: "home" },
  {
    to: "/resume",
    icon: resume_icon,
    active_icon: resume_active_icon,
    label: "resume",
  },
  {
    to: "/projects",
    icon: projects_icon,
    active_icon: projects_active_icon,
    label: "projects",
  },
  {
    to: "/blog",
    icon: blog_icon,
    active_icon: blog_active_icon,
    label: "blog",
  },
  {
    to: "/contact",
    icon: contact_icon,
    active_icon: contact_active_icon,
    label: "contact",
  },
];
