'use client';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Smartphone, Globe, Calendar, Award, Users, ChevronDown, Menu, X, Download, Eye, Star, BookOpen, TrendingUp, Lightbulb, Target, Zap, Heart, Coffee, Quote, ArrowRight, CheckCircle, Clock, BarChart3, FileText, Play } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  process: string[];
  challenges: string[];
  results: Record<string, string>;
  technologies: string[];
  images: string[];
  liveDemo: string;
  github: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tags: string[];
  link: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  story: string;
}

interface Skill {
  skills: string[];
  level: number;
}

interface LearningItem {
  tech: string;
  progress: number;
  reason: string;
}

interface PersonalityTrait {
  icon: any; // or import the specific Lucide icon types
  text: string;
  color: string;
}

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'journey', 'projects', 'case-studies', 'skills', 'testimonials', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const personalityTraits: PersonalityTrait[] = [
    { icon: Coffee, text: "Coffee-fueled coder", color: "text-amber-400" },
    { icon: Lightbulb, text: "Problem solver at heart", color: "text-yellow-400" },
    { icon: Heart, text: "Passionate about AI/ML", color: "text-red-400" }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 'driverassist',
      title: 'DriverAssist: AI-Powered Traffic Safety',
      subtitle: 'Final Year Project',
      category: 'AI/ML • Mobile Development',
      duration: '6 months',
      team: 'Solo Project',
      challenge: "Road accidents due to missed traffic signs are a critical safety issue in Pakistan. Traditional driver assistance systems were either too expensive or not context-aware for local traffic conditions.",
      solution: "Developed an AI-powered mobile application that uses YOLOv8n computer vision to detect and classify traffic signs in real-time, providing voice alerts and visual guidance to drivers.",
      process: [
        "Research & Data Collection: Gathered 5000+ traffic sign images from Pakistani roads",
        "Model Training: Fine-tuned YOLOv8n using Google Colab with custom dataset",
        "Mobile Integration: Built Flutter app with real-time camera processing",
        "User Testing: Conducted field tests with 50+ users across different scenarios"
      ],
      challenges: [
        "Low-light detection accuracy - Solved with data augmentation and brightness normalization",
        "Real-time processing on mobile - Optimized model size from 25MB to 8MB",
        "Local traffic sign variations - Created custom annotation pipeline"
      ],
      results: {
        accuracy: "94%",
        detectionSpeed: "30 FPS",
        modelSize: "8MB",
        userSatisfaction: "4.7/5"
      },
      technologies: ['YOLOv8n', 'Flutter', 'Firebase', 'Google Colab', 'Python', 'Dart'],
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
      liveDemo: '#',
      github: 'https://github.com/haseeb-yousaf/driverassist'
    },
    {
      id: 'daycare-management',
      title: 'Full-Stack Daycare Management System',
      subtitle: "Tech's Candy - Production App",
      category: 'Full-Stack Development',
      duration: '4 months',
      team: 'Lead Developer',
      challenge: "Daycare centers struggled with manual processes for staff scheduling, parent billing, and regulatory compliance, leading to operational inefficiencies and compliance issues.",
      solution: "Built a comprehensive web application with automated scheduling, billing system, parent portal, and compliance tracking that streamlined all daycare operations.",
      process: [
        "Requirement Analysis: Interviewed 3 daycare centers to understand pain points",
        "System Architecture: Designed scalable microservices architecture",
        "Development: Built with Next.js 15, TypeScript, and PostgreSQL",
        "Testing & Deployment: Implemented automated testing and CI/CD pipeline"
      ],
      challenges: [
        "Complex scheduling algorithm - Implemented constraint-based solver",
        "Multi-tenant architecture - Built scalable database design",
        "Payment integration - Integrated Stripe API with error handling"
      ],
      results: {
        efficiency: "75%",
        userAdoption: "3 centers",
        timeReduction: "60%",
        satisfaction: "4.8/5"
      },
      technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Stripe API', 'Vercel'],
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      liveDemo: '#',
      github: 'https://github.com/haseeb-yousaf/daycare-management'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Ahmed Hassan",
      role: "Project Manager",
      company: "Online Client",
      text: "Haseeb's ability to deliver complex full-stack solutions is impressive. His daycare management system exceeded our expectations and is now being used by multiple clients. His clean code and attention to detail make him a valuable team member.",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Mr Saad-ur-Rehman",
      role: "Project Supervisor",
      company: "AIR University",
      text: "Haseeb's final year project demonstrated exceptional technical skills and innovation. His DriverAssist application solved a real-world problem with cutting-edge AI technology. His research methodology and implementation were outstanding.",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Ahmed Hassan",
      role: "Team Lead",
      company: "DevsAim",
      text: "During his internship, Haseeb showed remarkable learning ability and delivered high-quality Flutter code. His proactive approach and willingness to take on challenges made him stand out among interns.",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      title: "Building Real-Time AI Applications with Flutter and YOLOv8",
      excerpt: "A deep dive into integrating computer vision models with mobile applications, covering optimization techniques and real-world challenges.",
      readTime: "8 min read",
      date: "Dec 2024",
      tags: ["AI/ML", "Flutter", "YOLOv8"],
      link: "#"
    },
    {
      title: "From Intern to Full-Stack Developer: My Journey",
      excerpt: "Lessons learned from multiple internships and how they shaped my development philosophy. Tips for fellow developers starting their careers.",
      readTime: "6 min read",
      date: "Nov 2024",
      tags: ["Career", "Learning", "Development"],
      link: "#"
    },
    {
      title: "Next.js 15 Performance Optimization: Real-World Case Study",
      excerpt: "How I improved our daycare management app's performance by 60% using Next.js 15 features, caching strategies, and database optimization.",
      readTime: "10 min read",
      date: "Oct 2024",
      tags: ["Next.js", "Performance", "Optimization"],
      link: "#"
    }
  ];

  const experiences: Experience[] = [
    {
      title: "Junior Programmer",
      company: "Tech's Candy",
      location: "Remote",
      period: "July 2025 – Present",
      description: "Leading full-stack development of enterprise applications, architecting scalable solutions in the industry.",
      achievements: [
        "Built complete daycare management system serving 500+ children across 3 centers",
        "Reduced manual administrative work by 75% through automation",
        "Implemented multi-tenant architecture supporting unlimited scaling"
      ],
      technologies: ["Next.js 15", "TypeScript", "React", "Tailwind CSS", "PostgreSQL"],
      story: "When I joined Tech's Candy, they needed someone who could build enterprise-level applications from scratch. The daycare management project became my proving ground, where I learned to balance complex business requirements with clean, maintainable code."
    },
    {
      title: "Associate Software Engineer",
      company: "Thathal ITS",
      location: "Islamabad, Pakistan",
      period: "Aug 2024 – Sep 2024",
      description: "Developed dynamic content management features and marketing automation tools, working directly with client requirements and API integrations.",
      achievements: [
        "Integrated Facebook Marketing API for automated campaign management",
        "Built dynamic content editor increasing client engagement by 40%",
        "Streamlined blog publication workflow reducing time-to-publish by 50%"
      ],
      technologies: ["Web Development", "Facebook Marketing API", "Content Management"],
      story: "This role taught me the importance of understanding business needs beyond just coding. Working with marketing APIs showed me how technology can directly impact business metrics."
    }
  ];

  const skills: Record<string, Skill> = {
    "Frontend Development": {
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      level: 90
    },
    "Backend Development": {
      skills: ["Node.js", "PostgreSQL", "Firebase", "RESTful APIs", "Database Design"],
      level: 85
    },
    "Mobile Development": {
      skills: ["Flutter", "Dart", "Android Studio", "Cross-platform Development"],
      level: 88
    },
    "AI/ML": {
      skills: ["YOLOv8", "Computer Vision", "Python", "Google Colab", "TensorFlow"],
      level: 75
    },
    "DevOps & Tools": {
      skills: ["Git", "GitHub", "Vercel", "Netlify", "VS Code", "CI/CD"],
      level: 80
    }
  };

  const currentLearning: LearningItem[] = [
    { tech: "MERN Stack", progress: 80, reason: "Full Stack Web Development" },
    { tech: "Flutter", progress: 50, reason: "Mobile development" },
    { tech: "AWS Cloud Services", progress: 20, reason: "Scaling applications" }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Haseeb Yousaf
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'journey', 'projects', 'case-studies', 'skills', 'testimonials', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item === 'case-studies' ? 'Case Studies' : item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 py-4">
              {['home', 'about', 'journey', 'projects', 'case-studies', 'skills', 'testimonials', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                >
                  {item === 'case-studies' ? 'Case Studies' : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Professional Photo Placeholder */}
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-8 lg:mb-0 lg:order-2">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gray-80f0 overflow-hidden">
    <img 
  src="./1.jpg" 
  alt="Haseeb Yousaf - Profile Photo" 
  className="w-full h-full object-cover rounded-full"
/>
  </div>
                  </div>
                  <p className="text-sm text-gray-400">Profile Picture</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              {personalityTraits.map((trait, index) => (
                <div key={index} className={`flex items-center gap-1 ${trait.color} text-sm`}>
                  <trait.icon size={16} />
                  <span className="hidden sm:inline">{trait.text}</span>
                </div>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                M Haseeb Yousaf
              </span>
            </h1>
            
            {/* Personal Brand Statement */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl text-blue-300 mb-4 font-semibold">
                Full-Stack Developer & AI Enthusiast
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                <span className="text-blue-400 font-semibold">"I turn complex problems into elegant digital solutions."</span>
                <br />
                From AI-powered mobile apps to enterprise web systems, I build technology that makes a real difference.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => scrollToSection('case-studies')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Eye size={20} />
                View Case Studies
              </button>
              <a
                href="https://docs.google.com/document/d/1MTCJRJwfR7AGZwTpFS78v_tl35gqBMch/edit?usp=sharing&ouid=114713764060503742733&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/haseeb-yousaf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                <Github size={24} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/haseebshyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin size={24} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:haseebyousaf325@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                <Mail size={24} />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section with Story */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Story
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">The Beginning</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My journey started at AIR University Multan, where I discovered my passion for solving real-world problems through code. 
                  What began as curiosity about mobile apps evolved into a deep love for full-stack development and AI.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-blue-400 font-semibold">"Every bug I fixed, every feature I built, taught me that great software isn't just about code—it's about understanding people's problems and crafting elegant solutions."</span>
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">The Growth</h3>
                <p className="text-gray-300 leading-relaxed">
                  From my first Flutter internship to leading full-stack projects, each experience shaped my philosophy: 
                  <span className="text-purple-400 font-semibold"> technology should be invisible, impactful, and delightful</span>. 
                  Today, I build systems that don't just work—they transform how people work.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">What Drives Me</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Building solutions that solve real problems for real people</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Pushing the boundaries of what's possible with modern tech</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="text-red-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Creating technology that brings people together</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-300">Continuous learning and sharing knowledge with the community</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="text-blue-400" size={20} />
                  Currently Learning
                </h4>
                <div className="space-y-3">
                  {currentLearning.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-300">{item.tech}</span>
                        <span className="text-xs text-gray-400">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="text-blue-400" size={16} />
                        <span className="text-blue-400 text-sm font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                      <h4 className="text-lg text-gray-200 mb-2">{exp.company}</h4>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-gray-300 leading-relaxed italic">"{exp.story}"</p>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                          <CheckCircle size={16} />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <ArrowRight className="text-green-400 mt-1 flex-shrink-0" size={16} />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A showcase of my best work - from AI-powered mobile apps to enterprise web systems. 
            Each project represents a unique challenge and innovative solution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      {project.id === 'driverassist' ? <Smartphone className="text-white" size={24} /> : <Globe className="text-white" size={24} />}
                    </div>
                    <p className="text-gray-400 text-sm">Project Screenshots</p>
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="text-white" size={32} />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.category}</p>
                  </div>
                  {project.title.includes('Final Year') && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{project.challenge}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {project.team}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-400 text-xs">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('case-studies')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <FileText size={20} />
              View Detailed Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Deep dives into my most impactful projects, showcasing the problems solved, 
            processes followed, and results achieved.
          </p>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-blue-400">{study.title}</h3>
                        <p className="text-gray-400">{study.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="text-blue-400" size={16} />
                          <span className="text-sm font-semibold text-blue-400">Duration</span>
                        </div>
                        <p className="text-gray-300">{study.duration}</p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="text-purple-400" size={16} />
                          <span className="text-sm font-semibold text-purple-400">Team</span>
                        </div>
                        <p className="text-gray-300">{study.team}</p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="text-green-400" size={16} />
                          <span className="text-sm font-semibold text-green-400">Category</span>
                        </div>
                        <p className="text-gray-300">{study.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 h-fit">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <BarChart3 className="text-blue-400" size={20} />
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(study.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="flex justify-between items-center">
                          <span className="text-gray-400 capitalize text-sm">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-white font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Target className="text-red-400" size={20} />
                        The Challenge
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Lightbulb className="text-yellow-400" size={20} />
                        The Solution
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Zap className="text-orange-400" size={20} />
                        Key Challenges & Solutions
                      </h4>
                      <div className="space-y-3">
                        {study.challenges.map((challenge, challengeIndex) => (
                          <div key={challengeIndex} className="bg-gray-700/30 rounded-lg p-4">
                            <p className="text-gray-300 text-sm leading-relaxed">{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="text-blue-400" size={20} />
                    Development Process
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {study.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="bg-gray-700/30 rounded-lg p-4 relative">
                        <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed pt-2">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={study.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-4 py-2 rounded-full transition-colors text-sm"
                    >
                      <Play size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, continuously evolving with industry trends and project demands.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                    {category === 'Frontend Development' && <Globe size={20} />}
                    {category === 'Backend Development' && <Database size={20} />}
                    {category === 'Mobile Development' && <Smartphone size={20} />}
                    {category === 'AI/ML' && <Lightbulb size={20} />}
                    {category === 'DevOps & Tools' && <Code size={20} />}
                    {category}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{data.level}%</div>
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${data.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {data.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200 text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Feedback from colleagues, supervisors, and mentors who've worked with me.
          </p>
          
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
              <Quote className="text-blue-400 mb-6" size={48} />
              
              <div className="mb-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  "{testimonials[activeTestimonial].text}"
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeTestimonial].role}</p>
                  <p className="text-blue-400 text-sm font-medium">{testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Sharing my journey, learnings, and insights from the world of software development and technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar size={14} />
                    {post.date}
                    <span>•</span>
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-blue-400 transition-colors" size={16} />
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Ready to turn your ideas into reality? I'm always excited to discuss new projects, 
            opportunities, and ways we can create impactful solutions together.
          </p>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Currently Available For</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Globe className="text-blue-400 mx-auto mb-3" size={32} />
                <h4 className="font-semibold mb-2">Full-Stack Development</h4>
                <p className="text-gray-400 text-sm">Web applications, APIs, and database design</p>
              </div>
              <div className="text-center">
                <Smartphone className="text-purple-400 mx-auto mb-3" size={32} />
                <h4 className="font-semibold mb-2">Mobile App Development</h4>
                <p className="text-gray-400 text-sm">Cross-platform apps with Flutter</p>
              </div>
              <div className="text-center">
                <Lightbulb className="text-yellow-400 mx-auto mb-3" size={32} />
                <h4 className="font-semibold mb-2">AI/ML Integration</h4>
                <p className="text-gray-400 text-sm">Computer vision and intelligent systems</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Mail className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:haseebyousaf325@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors break-all"
              >
                haseebyousaf325@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Phone className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+923006053456"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                +92 300 6053456
              </a>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Multan, Pakistan</p>
              <p className="text-gray-500 text-sm">Available for remote work</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/haseeb-yousaf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-colors duration-200 flex items-center gap-2"
            >
              <Github size={24} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/haseebshyk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors duration-200 flex items-center gap-2"
            >
              <Linkedin size={24} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:haseebyousaf325@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 p-4 rounded-full transition-colors duration-200 flex items-center gap-2"
            >
              <Mail size={24} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Haseeb Yousaf
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Developer passionate about creating innovative solutions that make a real difference.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('projects')} className="block text-gray-400 hover:text-blue-400 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('case-studies')} className="block text-gray-400 hover:text-blue-400 transition-colors">Case Studies</button>
                <button onClick={() => scrollToSection('blog')} className="block text-gray-400 hover:text-blue-400 transition-colors">Blog</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="https://docs.google.com/document/d/1MTCJRJwfR7AGZwTpFS78v_tl35gqBMch/edit?usp=sharing&ouid=114713764060503742733&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/haseeb-yousaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/haseebshyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 M Haseeb Yousaf. Crafted with ❤️ using Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
