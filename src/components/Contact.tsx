import { Mail, Linkedin, MapPin, Github } from 'lucide-react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { contactData } from '../data'

export function Contact() {
  const { location, email, linkedin, github, description } = contactData

  return (
    <section className="py-5">
      <Container fluid="xl">
        <h2 className="section-title">Get In Touch</h2>
        
        <Row className="g-4">
          <Col md={6}>
            <Card className="card-custom h-100">
              <Card.Header>
                <h5 className="card-title mb-0">Let's Connect</h5>
              </Card.Header>
              <Card.Body>
                <p className="text-secondary mb-3">
                  {description}
                </p>
                
                <div className="d-grid gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <MapPin size={16} className="text-muted flex-shrink-0" />
                    <span className="text-sm">{location}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="card-custom h-100">
              <Card.Header>
                <h5 className="card-title mb-0">Quick Actions</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-grid gap-3">
                  <Button 
                    href={`mailto:${email}`}
                    variant="primary"
                    className="w-100 d-inline-flex align-items-center justify-content-center"
                  >
                    <Mail size={14} />
                    <span>Send Email</span>
                  </Button>
                  <Button 
                    href={linkedin}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variant="outline-primary"
                    className="w-100 d-inline-flex align-items-center justify-content-center"
                  >
                    <Linkedin size={14} />
                    <span>Connect on LinkedIn</span>
                  </Button>
                  <Button 
                    href={github}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variant="outline-primary"
                    className="w-100 d-inline-flex align-items-center justify-content-center"
                  >
                    <Github size={14} />
                    <span>View GitHub</span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}