import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  Download,
  ExternalLink,
  Github,
  Linkedin, 
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card, 
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
 import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";


const Portfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);4
  const [isSubmitting, setIsSubmitting] = useState(false); 
 
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      const sections = ["home", "about", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success(
          "Message sent! Thanks for reaching out. I'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error(
        "Failed to send message. Please try again or contact me directly.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: "Quizify - Quiz Web Application",
      description: [
        "Developed Quizify, a full-stack quiz application to enhance learning through interactive quizzes.",
        "Built frontend with React and TypeScript for a dynamic user interface.",
        "Implemented backend with Spring Boot and Java for a robust and scalable architecture.",
        "Focused on RESTful API design for seamless frontend-backend communication.",
        "Showcased skills in building scalable, user-friendly web applications.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Spring Boot",
        "Spring Security",
        "Java",
        "MySQL",
        "JWT",
        "REST API",
      ],
      images: ["/quiz.png"],
      github: "https://github.com/felixxplore/Quiz-Application",
      demo: "https://quiz-application-arkc.vercel.app/",
    },
    {
      title: "GymSarthi - Gym Management System",
      description: [
        "Gymsarthi simplifies gym operations with a centralized platform for administrators, trainers, and members.",
        "Admins can manage trainers, members, plans, and analytics.",
        "Trainers can assign tasks and view schedules.",
        "Members can book classes, track payments, and access personalized workout/diet plans.",
        "Built with modern web technologies, including real-time chat, QR code-based attendance, and data visualization.",
        "A robust solution for gym owners.",
        "Deployed and accessible online.",
        "Showcases Felix’s skills in full-stack development using the MERN stack.",
      ],
      technologies: [
        "Node.js",
        "MongoDB",
        "JavaScript",
        "React.js",
        "Redux Toolkit",
        "REST API",
        "Express.js",
      ],
      images: ["/gymsarthi.png"],
      github: "https://github.com/felixxplore/GymSarthi",
      demo: "https://gym-sarthi-frontend.vercel.app/",
    },
  ];
const skills = {
  Languages: [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg",
      color: "#F89820",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
  ],
  DeveloperTools: [
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vscode/vscode-original.svg",
      color: "#007ACC",
    },
    {
      name: "IntelliJ IDEA",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/intellij/intellij-original.svg",
      color: "#000000",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg",
      color: "#FF6C37",
    },
  ],
  FrontendFrameworks: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redux/redux-original.svg",
      color: "#764ABC",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg",
      color: "#38B2AC",
    },
  ],
  BackendFrameworks: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg",
      color: "#000000",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg",
      color: "#6DB33F",
    },
    {
      name: "Spring Framework",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg",
      color: "#6DB33F",
    },
    {
      name: "Spring Security",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg",
      color: "#6DB33F",
    },
    {
      name: "Spring Data JPA",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg",
      color: "#6DB33F",
    },
  ],
  DevOps: [
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg",
      color: "#2496ED",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/kubernetes/kubernetes-plain.svg",
      color: "#326CE5",
    },
    {
      name: "Kafka",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/apachekafka/apachekafka-original.svg",
      color: "#231F20",
    },
    {
      name: "gRPC",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/grpc/grpc-plain.svg",
      color: "#00C4B4",
    },
    {
      name: "Git/GitHub",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "Swagger",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/swagger/swagger-original.svg",
      color: "#85EA2D",
    },
    {
      name: "JUnit",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/junit/junit-original.svg",
      color: "#25A162",
    },
  ],
  Databases: [
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redis/redis-original.svg",
      color: "#DC382D",
    },
  ],
};

 

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <style>
        {`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-20px); }
                60% { transform: translateY(-10px); }
              }
              @keyframes scaleIn {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
              }
              @keyframes blink {
                50% { opacity: 0; }
              }
              @keyframes glow {
                0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
                50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
                100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
              }
              .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
              .animate-bounce { animation: bounce 1s ease; }
              .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
              .animate-blink { animation: blink 0.8s step-end infinite; }
              .hover\\:glow:hover {
                animation: glow 1.5s infinite;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
              }
              .glassmorphism {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
              }
              @media (max-width: 640px) {
                .container { padding-left: 1rem; padding-right: 1rem; }
                .home-section { flex-direction: column; text-align: center; }
                .profile-image { width: 12rem !important; height: 12rem !important; }
                .project-card { height: auto !important; }
                .contact-grid { grid-template-columns: 1fr !important; }
              }
            `}
      </style>

      <ToastContainer theme="dark" />

      <header className="bg-black fixed top-0 left-0 right-0 z-50 glassmorphism">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center animate-fadeInUp">
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text">
                Satyam Pawar
              </span>
            </div>

            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {["home", "projects", "skills", "contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={cn(
                    "text-xl font-medium transition-all duration-300 hover:scale-105",
                    activeSection === item ? "text-gray-300" : "text-gray-500",
                    "animate-fadeInUp hover:text-gray-300"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4 animate-fadeInUp">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-300" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 glassmorphism pt-16 px-4 md:hidden animate-fadeInUp">
          <nav className="flex flex-col space-y-6 py-8">
            {["home", "projects", "skills", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={cn(
                  "text-lg font-medium transition-all duration-300 hover:scale-105",
                  activeSection === item ? "text-gray-300" : "text-gray-500",
                  "hover:text-gray-300"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}

      <main className="pt-16">
        <section
          id="home"
          className="min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-20 bg-gradient-to-b from-gray-950 to-black home-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1 space-y-4 animate-fadeInUp">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hey, I'm Satyam, <br />
                  <span className="bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text">
                    A Software Developer
                  </span>
                </h1>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="hover:scale-105 transition-all duration-300 hover:glow text-black bg-gradient-to-r from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600"
                  >
                    View Projects
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="hover:scale-105 transition-all duration-300  border-gray-300 text-black hover:bg-gray-800/50 hover:text-white"
                  >
                    Contact Me
                  </Button>
                  <a
                    href="/Java_Dev_Satyam_Pawar.pdf"
                    download="Java_Dev_Satyam_Pawar.pdf"
                    className="inline-block"
                  >
                    <Button className="flex items-center gap-2 hover:scale-105 transition-all text-black duration-300 hover:glow bg-gradient-to-r from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600">
                      <Download className="h-4 w-4 text-black" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative w-100 h-100 sm:w-80 sm:h-80 lg:w-150 lg:h-150 rounded-full overflow-hidden border-2 border-white-700     ">
                <img
                  src="/Web_Photo_Editor.jpg"
                  alt="Profile Placeholder"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t  " />
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-12 sm:py-20 animate-fadeInUp bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r text-black bg-clip-text">
                My Projects
              </h2>
              <div className="mt-2 h-1 w-20  bg-black mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={cn(
                    "overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-108  flex flex-col project-card bg-black"
                  )}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-40 sm:h-68 overflow-hidden">
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      alt={`${project.title} screenshot`}
                      className="object-cover w-full h-full transition-transform duration-500   animate-scaleIn"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium hover:scale-110 transition-all duration-300 text-gray-300 hover:text-gray-200"
                    >
                      <Github className="h-4 w-4 text-gray-300" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium hover:scale-110 transition-all duration-300 text-gray-300 hover:text-gray-200"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-300" />
                      Live Demo
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 sm:py-20 bg-black ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text">
                Technical Skills
              </h2>
              <div className="mt-2 h-1 w-20 bg-gray-300 mx-auto"></div>                                                                                                       
            </div>
            <div className="grid grid-cols-10 gap-6 sm:gap-8 max-w-10xl mx-auto">
              {Object.entries(skills).map(([category, skillList], index) =>
                skillList.map((skill, skillIndex) => (
                  <div
                    key={`${category}-${skillIndex}`}
                    className={cn(
                      "flex flex-col items-center p-4 rounded-lg   shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:glow  border-gray-900 border-1 bg-black                      "
                    )}
                    style={{
                      animationDelay: `${
                        (index * skillList.length + skillIndex) * 0.1
                      }s`,
                    }}
                  >                                                                                                     
                    <div className="w-15 h-15 sm:w-12 sm:h-15 mb-3 relative">
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        className="object-contain w-full h-full"
                        style={{
                          filter: `drop-shadow(0 0 5px ${skill.color})`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
<section id="contact" className="py-12 sm:py-20 animate-fadeInUp bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r  text-black bg-clip-text  ">
        Get In Touch
      </h2>
      <div className="mt-2 h-1 w-24 bg-black mx-auto"></div>
    </div>
    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
      <div className="p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-300/50 animate-scaleIn">
        <form onSubmit={handleContactSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium mb-2 text-black"
            >
              Name
            </label>
            <input
              id="from_name"
              name="from_name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 bg-gray-50  rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent placeholder-gray-400 text-black transition-all duration-300 border-1 border-black"
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium mb-2 text-black"
            >
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 bg-gray-50  border-1 border-black rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent placeholder-gray-400 text-black transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              className="w-full min-h-[150px] px-4 py-3 bg-gray-50 border border-black border-1 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent placeholder-gray-400 text-black transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 b  text-white font-semibold rounded-lg  bg-black   hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <div className="flex items-center gap-4 animate-fadeInUp">
          <div className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-yellow-200/50 shadow-sm">
            <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-black">Email</h3>
            <a
              href="mailto:satyampawar0070@gmail.com"
              className="text-black hover:text-yellow-700 hover:scale-105 transition-all duration-300"
            >
              satyampawar0070@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 animate-fadeInUp">
          <div className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-yellow-200/50 shadow-sm">
            <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-1h4v1h-4zm0-3v-1h4v1h-4zm4-3h-4v-1h4v1z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-black">GitHub</h3>
            <a
              href="https://github.com/felixxplore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-700 hover:scale-105 transition-all duration-300"
            >
              github.com/felixxplore
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 animate-fadeInUp">
          <div className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-yellow-200/50 shadow-sm">
            <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-black">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/satyam-pawar-93a800218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-700 hover:scale-105 transition-all duration-300"
            >
              linkedin.com/in/satyampawar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="py-8 border-t animate-fadeInUp border-gray-800 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Satyam Pawar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com/felixxplore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-all duration-300 text-gray-400 hover:text-gray-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/satyam-pawar-93a800218"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-all duration-300 text-gray-400 hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:glow bg-gradient-to-r from-gray-300 to-gray-500",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default Portfolio;
