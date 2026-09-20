import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "NovaChat",
    description:
      "A real-time chat application with one-to-one messaging, typing indicators, online/offline status, and video calling.",
    image: "/projects/project1.png",
    tags: ["MERN Stack", "Socket.io", "JWT", "Tailwind CSS"],
    link: "https://novachat-video-calls-app.onrender.com/login",
    github: "https://github.com/tejasvirajput/NovaChat-video-calls-app.git",
  },
  {
    title: "Wanderlust",
    description:
      "A full-stack Airbnb-style platform for creating, managing, searching, and reviewing property listings with AI-powered property discovery and recommendations.",
    image: "/projects/project2.png",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "AI",
      "Cloudinary",
      "Mapbox",
    ],
    link: "https://wanderlust-w1u6.onrender.com",
    github: "https://github.com/tejasvirajput/Wanderlust.git",
  },
  {
    title: "Simon Says Game",
    description:
      "An interactive memory-based game with dynamic sequences, increasing difficulty, high-score tracking, and a responsive interface.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://simon-says-beta-lyart.vercel.app/",
    github: "https://github.com/tejasvirajput/Simon-Says.git",
  },
  {
    title: "CloudCast",
    description:
      "A responsive weather application built with React.js and Tailwind CSS that provides real-time weather information with city search, autocomplete, location detection, dynamic weather backgrounds, and detailed weather conditions.",
    image: "/projects/project4.png",
    tags: ["React.js", "Tailwind CSS", "OpenWeather API"],
    link: "https://weather-app-jbvl.onrender.com/",
    github: "https://github.com/tejasvirajput/Weather-App.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-22 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              built.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects I've built while exploring full-stack
            development, real-time applications, and interactive web
            experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 border border-primary/30"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/tejasvirajput"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
