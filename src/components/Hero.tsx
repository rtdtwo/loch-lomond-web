import { ImageWithFallback } from './ImageWithFallback'
import { ExternalLink, Mail, Github } from 'lucide-react'
import { Container, Button } from 'react-bootstrap'
import { heroData } from '../data'

export function Hero() {
  const { name, title, companyUrl, description, avatar, links } = heroData

  return (
    <section className="hero-section">
      <Container fluid="xl" className="text-center position-relative z-1">
        <div className="d-flex justify-content-center mb-4">
          <ImageWithFallback
            src={avatar}
            alt={name}
            className="profile-img"
          />
        </div>
        
        <h1 className="h1 mb-3">{name}</h1>
        
        <p className="lead mb-3">
          {title.split(' at ')[0]} at <a className="text-primary" href={companyUrl} target='_blank' rel='noopener noreferrer'>{title.split(' at ')[1]}</a>
        </p>
        
        <p className="mx-auto mb-4 text-secondary" style={{ maxWidth: '600px' }}>
          {description}
        </p>
        
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button 
            href={links.linkedin}
            target="_blank" 
            rel="noopener noreferrer" 
            variant="primary"
            className="d-inline-flex align-items-center"
          >
            <ExternalLink size={16} />
            <span>LinkedIn</span>
          </Button>
          <Button 
            href={links.github}
            target="_blank" 
            rel="noopener noreferrer" 
            variant="outline-primary"
            className="d-inline-flex align-items-center"
          >
            <Github size={16} />
            <span>GitHub</span>
          </Button>
          <Button 
            href="#contact" 
            variant="outline-primary"
            className="d-inline-flex align-items-center"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}