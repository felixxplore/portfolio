import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
 

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

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

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

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
            theme: darkMode ? "dark" : "light",
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
          theme: darkMode ? "dark" : "light",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: "Library Management System",
      description: [
        "Built a console-based Library Management System using core Java.",
        "Key features include user authentication.",
        "Supports book borrowing and returning.",
        "Includes a reservation queue for books.",
        "Implements overdue fine calculation at $0.50/day after 7 days.",
        "Utilized ConcurrentHashMap for thread-safe data storage.",
        "Used ExecutorService for multithreading to handle concurrent operations.",
        "Implemented serialization for data persistence to save and load library data.",
      ],
      technologies: [
        "Multithreading",
        "File Handling",
        "Collection",
        "Core Java",
        "OOPs",
      ],
      images: [
        "https://media.licdn.com/dms/image/sync/v2/D4D27AQF_auUfj2PdQQ/articleshare-shrink_800/B4DZbIiLCMGYAU-/0/1747121124495?e=1748181600&v=beta&t=zhQeomyq2oY8SowFE65FWkETzC3Ifgu01K7pTHFz2DI",
      ],
      github: "https://github.com/felixxplore/LIbrary-Management-System",
      demo: "https://github.com/felixxplore/LIbrary-Management-System",
    },
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
        "Java",
        "MySQL",
        "JWT",
        "REST API",
      ],
      images: [
        "https://media.licdn.com/dms/image/v2/D4D2DAQEikX5byyaSFQ/profile-treasury-image-shrink_800_800/B4DZbjQ4FIIAAY-/0/1747569576233?e=1748185200&v=beta&t=Dgm5bbGYursoB7_WkdotcSkvl9YqzYOqx6gwx0Gmi8g",
      ],
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
      images: [
        "https://media.licdn.com/dms/image/v2/D4D2DAQGLGi_nrKj4wg/profile-treasury-image-shrink_800_800/B4DZbIh4ErHAAc-/0/1747121048474?e=1748185200&v=beta&t=0-IFrGClGDPIVTIFDW2WVKC3RHrJa74NJbV4gQ4Tgps",
      ],
      github: "https://github.com/felixxplore/GymSarthi",
      demo: "https://gym-sarthi-frontend.vercel.app/",
    },
  ];

  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/npm/@programming-languages-logos/java@0.0.0/java.png",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/spring.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg",
    },
    {
      name: "REST API",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postman.svg",
    },
    {
      name: "HTML/CSS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900"
      )}
    >
      <style>
        {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.5);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .hover\:glow:hover {
          animation: glow 1.5s infinite;
        }
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .skill-icon, .contact-icon {
          fill: white !important;
          color: white !important;
        }
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .home-section {
            flex-direction: column;
            text-align: center;
          }
          .profile-image {
            width: 12rem !important;
            height: 12rem !important;
          }
          .project-card {
            height: auto !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        `}
      </style>

      <ToastContainer theme={darkMode ? "dark" : "light"} />

      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center animate-fadeInUp">
              <span
                className={cn(
                  "text-xl font-bold",
                  darkMode
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
                )}
              >
                DevPortfolio
              </span>
            </div>

            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {["home", "about", "projects", "skills", "contact"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={cn(
                      "text-sm font-medium transition-all duration-300 hover:scale-105 ",
                      activeSection === item
                        ? darkMode
                          ? "text-purple-400"
                          : "text-purple-600"
                        : darkMode
                        ? "text-gray-300"
                        : "text-gray-600",
                      "animate-fadeInUp hover:text-purple-400"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center space-x-4 animate-fadeInUp">
              <button
                onClick={toggleDarkMode}
                className={cn(
                  "p-2 rounded-full transition-all duration-300 hover:scale-110 hover:glow",
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                )}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-white" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-900" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "md:hidden p-2 rounded-full transition-all duration-300 hover:scale-110",
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                )}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 glassmorphism pt-16 px-4 md:hidden animate-fadeInUp">
          <nav className="flex flex-col space-y-6 py-8">
            {["home", "about", "projects", "skills", "contact"].map(
              (item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={cn(
                    "text-lg font-medium transition-all duration-300 hover:scale-105",
                    activeSection === item
                      ? darkMode
                        ? "text-purple-400"
                        : "text-purple-600"
                      : darkMode
                      ? "text-gray-300"
                      : "text-gray-600",
                    "hover:text-purple-400"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>
      )}

      <main className="pt-16">
        <section
          id="home"
          className="min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 home-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
              <div className="flex-1 space-y-6 animate-fadeInUp">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building the Future,{" "}
                  <span
                    className={cn(
                      "bg-gradient-to-r text-transparent bg-clip-text",
                      darkMode
                        ? "from-purple-500 to-pink-500"
                        : "from-purple-600 to-pink-600"
                    )}
                  >
                    One Project at a Time
                  </span>
                </h1>
                <p
                  className={cn(
                    "text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0",
                    darkMode ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  Full-stack developer passionate about creating impactful
                  solutions that solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className={cn(
                      "hover:scale-105 transition-all duration-300 hover:glow",
                      darkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    )}
                  >
                    View Projects
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className={cn(
                      "hover:scale-105 transition-all duration-300",
                      darkMode
                        ? "border-purple-400 text-purple-400 hover:bg-purple-900/50"
                        : "border-purple-600 text-purple-600 hover:bg-purple-200/50"
                    )}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl hover:glow animate-fadeInUp profile-image">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEHPguMQ_dOIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724633867734?e=1753315200&v=beta&t=BVSLZ466isLSdW4UCusmS8nYinP3D35rOdNLIAudpk8"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className={cn(
            "py-12 sm:py-20",
            darkMode ? "bg-gray-900/50" : "bg-gray-200/50"
          )}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fadeInUp">
              <h2
                className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text",
                  darkMode
                    ? "from-purple-400 to-pink-400"
                    : "from-purple-600 to-pink-600"
                )}
              >
                About Me
              </h2>
              <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto glassmorphism p-6 rounded-lg">
              <p
                className={cn(
                  "text-base sm:text-lg mb-6 leading-relaxed",
                  darkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                I'm a passionate full-stack developer with a strong foundation
                in both frontend and backend technologies. With expertise in
                React, TypeScript, Java, and Spring Boot, I enjoy building
                robust, scalable applications that deliver exceptional user
                experiences. My journey in software development began with a
                curiosity about how digital solutions can solve real-world
                problems, and that drive continues to fuel my work today.
              </p>
              <p
                className={cn(
                  "text-base sm:text-lg mb-8 leading-relaxed",
                  darkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                I thrive in collaborative environments where I can contribute my
                technical skills while continuously learning from others. My
                goal is to create software that not only meets technical
                requirements but also positively impacts users' lives. I'm
                currently seeking opportunities to apply my skills in a dynamic
                team focused on building innovative solutions.
              </p>
              <div className="flex justify-center">
                <a
                  href="/Satyam_Pawar_Resume.pdf"
                  download="Satyam_Pawar_Resume.pdf"
                  className="inline-block"
                >
                  <Button
                    className={cn(
                      "flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:glow",
                      darkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    )}
                  >
                    <Download className="h-4 w-4 text-white" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 sm:py-20 animate-fadeInUp">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text",
                  darkMode
                    ? "from-purple-400 to-pink-400"
                    : "from-purple-600 to-pink-600"
                )}
              >
                My Projects
              </h2>
              <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
              <p
                className={cn(
                  "mt-4 text-base sm:text-lg max-w-2xl mx-auto",
                  darkMode ? "text-gray-400" : "text-gray-600"
                )}
              >
                Here are some of the projects I've worked on that showcase my
                skills and expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={cn(
                    "overflow-hidden transition-all duration-300 hover:shadow-2xl glassmorphism flex flex-col project-card",
                    darkMode ? "bg-gray-800/30" : "bg-gray-100/30"
                  )}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={project.images[0] || "/placeholder.svg"}
                      alt={`${project.title} screenshot`}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle
                      className={cn(
                        "text-lg sm:text-xl font-bold",
                        darkMode ? "text-purple-300" : "text-purple-700"
                      )}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className={cn(
                        darkMode ? "text-gray-400" : "text-gray-600"
                      )}
                    >
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={cn(
                              "px-2 py-1 text-xs rounded-full",
                              darkMode
                                ? "bg-purple-900/50 text-purple-300"
                                : "bg-purple-200/50 text-purple-700"
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul
                      className={cn(
                        "text-sm list-disc pl-5 space-y-2",
                        darkMode ? "text-gray-300" : "text-gray-700"
                      )}
                    >
                      {project.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium hover:scale-105 transition-all duration-300",
                        darkMode
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-700"
                      )}
                    >
                      <Github className="h-4 w-4 text-white" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium hover:scale-105 transition-all duration-300",
                        darkMode
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-700"
                      )}
                    >
                      <ExternalLink className="h-4 w-4 text-white" />
                      Live Demo
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={cn(
            "py-12 sm:py-20",
            darkMode ? "bg-gray-900/50" : "bg-gray-200/50"
          )}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fadeInUp">
              <h2
                className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text",
                  darkMode
                    ? "from-purple-400 to-pink-400"
                    : "from-purple-600 to-pink-600"
                )}
              >
                Technical Skills
              </h2>
              <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
              <p
                className={cn(
                  "mt-4 text-base sm:text-lg max-w-2xl mx-auto",
                  darkMode ? "text-gray-400" : "text-gray-600"
                )}
              >
                Here are the technologies and tools I work with.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg glassmorphism shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:glow animate-fadeInUp",
                    darkMode ? "bg-gray-800/30" : "bg-gray-100/30"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 relative">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="object-contain w-full h-full skill-icon"
                    />
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      darkMode ? "text-purple-300" : "text-purple-700"
                    )}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
              <h3
                className={cn(
                  "text-lg sm:text-xl font-bold text-center mb-6",
                  darkMode ? "text-purple-300" : "text-purple-700"
                )}
              >
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "Problem Solving",
                  "Time Management",
                  "Communication",
                  "Teamwork",
                  "Adaptability",
                  "Critical Thinking",
                  "Attention to Detail",
                  "Creativity",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-center p-3 rounded-lg glassmorphism animate-fadeInUp",
                      darkMode
                        ? "text-purple-300 bg-gray-800/30"
                        : "text-purple-700 bg-gray-100/30"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-20 animate-fadeInUp">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text",
                  darkMode
                    ? "from-purple-400 to-pink-400"
                    : "from-purple-600 to-pink-600"
                )}
              >
                Get In Touch
              </h2>
              <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
              <p
                className={cn(
                  "mt-4 text-base sm:text-lg max-w-2xl mx-auto",
                  darkMode ? "text-gray-400" : "text-gray-600"
                )}
              >
                Have a project in mind or want to discuss opportunities? Feel
                free to reach out!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto contact-grid">
              <div
                className={cn(
                  "glassmorphism p-6 rounded-lg",
                  darkMode ? "bg-gray-800/30" : "bg-gray-100/30"
                )}
              >
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="from_name"
                      className={cn(
                        "block text-sm font-medium mb-1",
                        darkMode ? "text-gray-300" : "text-gray-700"
                      )}
                    >
                      Name
                    </label>
                    <Input
                      id="from_name"
                      name="from_name"
                      placeholder="Your name"
                      required
                      className={cn(
                        "w-full",
                        darkMode
                          ? "bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-500"
                          : "bg-gray-200/50 border-gray-300 text-gray-900 placeholder-gray-400"
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="from_email"
                      className={cn(
                        "block text-sm font-medium mb-1",
                        darkMode ? "text-gray-300" : "text-gray-700"
                      )}
                    >
                      Email
                    </label>
                    <Input
                      id="from_email"
                      name="from_email"
                      type="email"
                      placeholder="Your email"
                      required
                      className={cn(
                        "w-full",
                        darkMode
                          ? "bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-500"
                          : "bg-gray-200/50 border-gray-300 text-gray-900 placeholder-gray-400"
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={cn(
                        "block text-sm font-medium mb-1",
                        darkMode ? "text-gray-300" : "text-gray-700"
                      )}
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      className={cn(
                        "w-full min-h-[150px]",
                        darkMode
                          ? "bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-500"
                          : "bg-gray-200/50 border-gray-300 text-gray-900 placeholder-gray-400"
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full hover:scale-105 transition-all duration-300 hover:glow",
                      darkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 animate-fadeInUp">
                  <div className="p-3 rounded-full glassmorphism">
                    <Mail className="h-6 w-6 text-purple-400 contact-icon" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-medium",
                        darkMode ? "text-purple-300" : "text-purple-700"
                      )}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:satyampawar0070@gmail.com"
                      className={cn(
                        "hover:scale-105 transition-all duration-300",
                        darkMode
                          ? "text-gray-400 hover:text-purple-400"
                          : "text-gray-600 hover:text-purple-600"
                      )}
                    >
                      satyampawar0070@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 animate-fadeInUp">
                  <div className="p-3 rounded-full glassmorphism">
                    <Github className="h-6 w-6 text-purple-400 contact-icon" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-medium",
                        darkMode ? "text-purple-300" : "text-purple-700"
                      )}
                    >
                      GitHub
                    </h3>
                    <a
                      href="https://github.com/felixxplore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "hover:scale-105 transition-all duration-300",
                        darkMode
                          ? "text-gray-400 hover:text-purple-400"
                          : "text-gray-600 hover:text-purple-600"
                      )}
                    >
                      github.com/felixxplore
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 animate-fadeInUp">
                  <div className="p-3 rounded-full glassmorphism">
                    <Linkedin className="h-6 w-6 text-purple-400 contact-icon" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-medium",
                        darkMode ? "text-purple-300" : "text-purple-700"
                      )}
                    >
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/satyam-pawar-93a800218"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "hover:scale-105 transition-all duration-300",
                        darkMode
                          ? "text-gray-400 hover:text-purple-400"
                          : "text-gray-600 hover:text-purple-600"
                      )}
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

      <footer
        className={cn(
          "py-8 border-t animate-fadeInUp",
          darkMode ? "border-gray-800" : "border-gray-300"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={cn(darkMode ? "text-gray-400" : "text-gray-600")}>
              © {new Date().getFullYear()} Satyam Pawar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com/felixxplore"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hover:scale-105 transition-all duration-300",
                  darkMode
                    ? "text-gray-400 hover:text-purple-400"
                    : "text-gray-600 hover:text-purple-600"
                )}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/satyam-pawar-93a800218"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hover:scale-105 transition-all duration-300",
                  darkMode
                    ? "text-gray-400 hover:text-purple-400"
                    : "text-gray-600 hover:text-purple-600"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:glow",
          darkMode
            ? "bg-gradient-to-r from-purple-500 to-pink-500"
            : "bg-gradient-to-r from-purple-600 to-pink-600",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default Portfolio;
