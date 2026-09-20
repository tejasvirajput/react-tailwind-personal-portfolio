import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive web applications using React.js, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: Rocket,
    title: "Project Building",
    description:
      "Turning ideas into functional web applications with a focus on usability and performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with others, sharing ideas, and contributing to projects as a team.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and improving my skills through projects and hands-on development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science student pursuing my B.Tech at COER
                University, with a strong interest in full-stack web
                development. I enjoy building practical and user-friendly
                applications while continuously improving my programming and
                development skills.
              </p>
              <p>
                I work with Java, JavaScript, React.js, Node.js, Express.js,
                MongoDB, and REST APIs to create responsive web applications.
                Through projects like Wanderlust and NovaChat, I have gained
                hands-on experience with authentication, real-time
                communication, APIs, databases, and modern web development.
              </p>
              <p>
                When I'm not coding, I enjoy learning new technologies,
                improving my problem-solving skills, and working on projects
                that help me grow as a developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to keep learning, build meaningful projects, and
                grow into a developer who creates simple, reliable, and
                user-friendly solutions."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in border border-primary/30"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
