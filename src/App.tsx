import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { ArrowUp, Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Container, Navbar, Button } from 'react-bootstrap'

// Simple scroll animation wrapper
function SectionWrapper({ children, id }: { children: React.ReactNode, id?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Force dark theme always
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    
    // Set page title dynamically
    document.title = 'Rishabh Tatiraju - Financial Software Engineer | Portfolio'
    
    // Add meta description if not present
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', 'Financial Software Associate at Galatea Associates LLC. Specializing in algorithmic trading systems, financial applications, and high-performance software solutions.')
      document.head.appendChild(metaDescription)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + (window.innerHeight / 2)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: "easeInOut" as const }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  }

  return (
    <div className="min-vh-100">
      {/* Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar 
          expand="lg" 
          className="navbar-custom fixed-top"
          bg="transparent"
          role="navigation"
          aria-label="Main navigation"
        >
          <Container fluid="xl">
            <h1 
              className="navbar-brand mb-0 h4"
              onClick={() => scrollToSection('hero')}
              style={{ cursor: 'pointer' }}
            >
              Rishabh Tatiraju
            </h1>
            
            {/* Desktop Navigation */}
            <div className="d-none d-md-flex align-items-center gap-3">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variant="link"
                  className={`nav-link-custom ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="d-flex d-md-none align-items-center">
              <Button
                className="btn-theme-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                variant="outline-secondary"
                size="sm"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </Button>
            </div>
          </Container>
        </Navbar>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-backdrop d-md-none"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mobile-menu position-fixed top-0 end-0 bottom-0 d-md-none"
              style={{ width: '280px', maxWidth: '80vw', paddingTop: '80px', zIndex: 1050 }}
            >
              <div className="d-flex flex-column h-100 p-4">
                <motion.div variants={mobileMenuItemVariants} className="mb-4">
                  <h5 className="mb-2">Navigation</h5>
                  <p className="text-muted text-sm">Jump to any section</p>
                </motion.div>
                
                <nav className="flex-grow-1">
                  <ul className="list-unstyled">
                    {navItems.map((item) => (
                      <motion.li key={item.id} variants={mobileMenuItemVariants} className="mb-2">
                        <Button
                          onClick={() => scrollToSection(item.id)}
                          variant="link"
                          className={`text-start w-100 p-3 rounded ${
                            activeSection === item.id ? 'bg-secondary text-light' : 'text-muted'
                          }`}
                          style={{ textDecoration: 'none' }}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <span>{item.label}</span>
                            {activeSection === item.id && (
                              <div
                                className="bg-primary rounded-circle"
                                style={{ width: '6px', height: '6px' }}
                              />
                            )}
                          </div>
                        </Button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                
                <motion.div variants={mobileMenuItemVariants} className="pt-3 border-top">
                  <p className="text-xs text-muted">© 2025 Rishabh Tatiraju</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main role="main" aria-label="Portfolio content">
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>

      {/* Footer */}
      <footer className="bg-light py-4">
        <Container fluid="xl" className="text-center">
          <p className="text-muted mb-0 text-xs">
            © 2025 Rishabh Tatiraju. Built with React.
          </p>
        </Container>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToTop}
            variant="primary"
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </Button>
        </motion.div>
      )}
    </div>
  )
}