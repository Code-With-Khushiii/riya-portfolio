import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, FileText, Users, Lightbulb, Rocket, ExternalLink, X, Github } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'overview', 'journey', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Projects ordered from most recent to oldest
  const projects = [
    {
      title: "Generative AI Research Assistant",
      subtitle: "Research with Prof. Srikrishnamurthy",
      category: "Multi-Agent RAG System",
      introduction: "Production-ready multi-agent AI system integrating Snowflake SQL, RAG, web search, and ETL pipelines orchestrated via Airflow.",
      problem: "Domain knowledge is distributed across documents, databases, and the web, making accurate retrieval and synthesis difficult for analysts.",
      objective: "Build a robust retrieval and orchestration system that grounds LLM outputs in high-quality enterprise and web data.",
      methodology: [
        "Implemented LangGraph agents with tool-calling for retrieval and planning",
        "Built ETL pipelines on Airflow to ingest, chunk, and embed documents",
        "Used Snowflake for structured data joins and Pinecone for vector search",
        "Deployed FastAPI services in Docker on AWS; integrated MCP tools"
      ],
      results: [
        "Accurate, grounded responses with reduced hallucinations via RAG",
        "Modular agents enabling easy extension for new data domains",
        "End-to-end observability across ingestion, retrieval, and synthesis"
      ],
      conclusion: "Demonstrated reliable, production-grade multi-agent orchestration with strong data engineering and retrieval best practices."
    },
    {
      title: "Distributed Deep Learning - ResNet Classifier",
      subtitle: "PyTorch DDP on Tesla T4 + SLURM",
      category: "Computer Vision",
      introduction: "Optimized a distributed ResNet9 image classifier across multiple GPUs and compute nodes for a 95K+ image dataset.",
      problem: "Single-GPU training was too slow and underutilized available cluster resources.",
      objective: "Scale training efficiently across nodes while maintaining convergence and reproducibility.",
      methodology: [
        "Configured Distributed Data Parallel with gradient synchronization",
        "Scheduled multi-node jobs via SLURM with deterministic seeds",
        "Applied mixed precision and optimized dataloaders for throughput"
      ],
      results: [
        "Significant reduction in epoch time with stable accuracy",
        "Efficient GPU utilization and predictable scaling"
      ],
      conclusion: "Delivered a scalable training pipeline suitable for larger model experiments and datasets."
    },
    {
      title: "Marketplace – Full-Stack Application",
      subtitle: "MERN stack with Auth and Admin",
      category: "Full-Stack Web",
      introduction: "Real estate marketplace with secure listing management, JWT + Google OAuth, and Firebase image storage.",
      problem: "Property discovery needed secure, rich listings with advanced filtering and responsive UX.",
      objective: "Ship a production-ready CRUD app with modern auth, search, and admin tools.",
      methodology: [
        "Implemented React + Tailwind responsive UI with Redux Toolkit",
        "Designed refined MongoDB queries for advanced filters",
        "Integrated JWT + Google OAuth and Firebase storage"
      ],
      results: [
        "Fast search and management experience with secure media handling",
        "Clean separation of concerns across API, auth, and UI"
      ],
      conclusion: "Showcases solid full-stack engineering with attention to security, DX, and UX."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex  justify-end">
            {/* <div className="text-2xl font-display text-black tracking-wide">RIYA MATE</div> */}
            <div className="hidden md:flex space-x-8 justify-end">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'overview', label: 'Overview' },
                { id: 'journey', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="assets/image.jpg"
                alt="Riya Mate"
                className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-display text-black mb-8 tracking-wide">
              RIYA MATE
            </h1>
            <div className="text-xl text-brown mb-4 font-light tracking-widest">
              AI/ML ENGINEER | DATA ENGINEER | SOFTWARE ENGINEER
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-12"></div>
            <p className="text-lg text-brown mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              I build AI systems, scalable data pipelines, and production-grade services. From multi-agent RAG to distributed training and cloud-native microservices, I ship reliable systems that deliver measurable impact.
            </p>
            <p className="text-lg text-brown mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Pragmatic, metrics-driven, and hands-on with modern ML + data tooling. Let's build systems that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🎯 VIEW PROJECTS
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                🤝 GET IN TOUCH
              </button>
            </div>
          </div>
          <div className="text-center mt-20">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('overview')}
            />
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">OVERVIEW</h2>
          </div>
          <div className="grid lg:grid-cols-1 gap-16 items-center mb-20 w-full max-w-4xl lg:max-w-6xl">
            <div className="space-y-6">            
            <div className="bg-cream p-8 mx-auto rounded-sm">
              <p className="text-lg text-brown leading-relaxed font-light">
                AI/ML engineer with strong software and data engineering foundations. I have built multi-agent assistants (RAG), vector search pipelines, and fine-tuned LLMs (LoRA/PEFT). Previously shipped enterprise microservices and DevOps at scale.
              </p>
            </div>
          </div> </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display text-black mb-4 tracking-wide">PROBLEM</h3>
              <p className="text-brown leading-relaxed font-light">
                Organizations struggle to operationalize AI due to fragmented data, high infra costs, and unreliable retrieval. Traditional systems are not built for LLM-native workflows. 
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display text-black mb-4 tracking-wide">SOLUTION</h3>
              <p className="text-brown leading-relaxed font-light">
                Build retrieval-first, cost-aware systems: robust ETL + embeddings, high-signal RAG, and efficient training via LoRA/PEFT. Wrap with APIs, monitoring, and clear SLAs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display text-black mb-4 tracking-wide">IMPACT</h3>
              <div className="text-brown space-y-2 font-light">
                <p>50% faster workflows for 3K+ engineers via LLM assistant (NVIDIA). 40% lower fine-tuning cost with LoRA/PEFT 15% faster inference.
                99.99% uptime across microservices with Docker + K8s (Veritas).</p>        
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">Highlights across AI/ML, data engineering, and large-scale software delivery</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brown/30"></div>
            
            {[
              {
                year: '2024',
                title: 'Artificial Intelligence Intern — NVIDIA, Santa Clara, CA',
                description: 'Built a multi-agent LLM assistant and Airflow-based RAG pipelines for 500GB of docs, improving accuracy and reducing manual effort for 3K+ engineers. Implemented LoRA/PEFT to cut training costs by 40% and boost inference by 15%. Analyzed NIM microservices to architect high-performance multi-LLM pipelines. Enabled KPI visibility via Tableau + Python.',
                color: 'bg-brown/70'
              },
              {
                year: '2021–2023',
                title: 'Associate Software Engineer — Veritas Technologies, Pune, India',
                description: 'Delivered a full-stack licensing platform (15+ Spring Boot microservices + React) for 48K+ users. Dockerized 10+ services, deployed with Kubernetes + AWS LB to achieve 99.99% uptime. Built JUnit test suites and SonarQube static analysis to improve reliability and cut defects by 40%. Implemented fault-tolerant backup/restore and parallel DB-upgrades (78 → 9 mins).',
                color: 'bg-brown'
              },
              {
                year: '2023–2025',
                title: 'M.S. Management Information Systems — Northeastern University, Boston, MA',
                description: 'Coursework: Data Science Engineering and Methodologies, Web Design and UX, High Parallel Computing, Machine Learning and AI, Big Data and Intelligent Systems, Operating Systems.',
                color: 'bg-brown'
              },
              {
                year: '2017–2021',
                title: 'B.Tech. Computer Science — VIT, Pune, India',
                description: 'Graduated with strong foundations in computer science and software engineering.',
                color: 'bg-brown'
              }
            ].map((item, index) => (
              <div key={index} className="relative flex items-start mb-16">
                <div className={`w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg relative z-10`}></div>
                <div className="ml-12 bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-brown bg-cream px-4 py-1 tracking-wide">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-display text-black mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-brown leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 bg-white p-8 rounded-sm max-w-2xl mx-auto">
            <p className="text-lg text-brown font-light italic">Building reliable AI + data systems that turn information into leverage.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              A collection of work that showcases my approach to product thinking and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in learning more about any of these projects? 
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies and insights.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">Core competencies across AI/ML, data, cloud, and full-stack engineering</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                icon: TrendingUp, 
                title: 'AI/ML & Data', 
                skills: ['PyTorch', 'LangGraph', 'RAG', 'LoRA/PEFT', 'Airflow', 'Snowflake', 'Pinecone'] 
              },
              { 
                icon: Rocket, 
                title: 'Cloud & DevOps', 
                skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'Argo CD', 'Jenkins'] 
              },
              { 
                icon: Users, 
                title: 'Web Development', 
                skills: ['React.js', 'Node.js', 'FastAPI', 'Spring Boot', 'Nginx', 'Tailwind CSS'] 
              },
              { 
                icon: Lightbulb, 
                title: 'Programming & Quality', 
                skills: ['Python', 'Java', 'C++', 'TypeScript', 'JUnit', 'SonarQube', 'CI/CD'] 
              }
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's connect - whether it's to jam on user empathy, talk shipping rituals, or just swap weird product metaphors.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+18573767866"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (857) 376-7866
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:riyamate4567@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                riyamate4567@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/riya-mate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Github className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://github.com/RiyaMate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
            {/* <div className="flex items-center">
              <FileText className="w-6 h-6 text-brown mr-6" />
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                Resume
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">© 2025 Riya Mate. Built for AI/ML and data-driven impact.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;