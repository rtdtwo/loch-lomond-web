import { ExternalLink, Github } from 'lucide-react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { projectsData } from '../data'

export function Projects() {
  const { projects } = projectsData

  return (
    <section className="py-5 bg-light">
      <Container fluid="xl">
        <h2 className="section-title">Featured Projects</h2>
        
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6}>
              <Card className="card-custom h-100">
                <Card.Header>
                  <h5 className="card-title mb-0">{project.title}</h5>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <p className="text-secondary mb-3 text-sm">{project.description}</p>
                  
                  <div className="mb-3">
                    <h6 className="mb-2 text-sm">Key Features:</h6>
                    <ul className="list-unstyled">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="d-flex align-items-center text-secondary mb-1 text-xs"
                        >
                          <div className="bg-primary rounded-circle me-2 flex-shrink-0" style={{ width: '4px', height: '4px' }}></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} bg="dark">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-2 mt-auto">
                    {project.github && (
                      <div className="flex-fill">
                        <Button 
                          size="sm" 
                          variant="outline-primary" 
                          className="w-100 d-inline-flex align-items-center justify-content-center"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={12} />
                          <span>Code</span>
                        </Button>
                      </div>
                    )}
                    {project.demo && (
                      <div className="flex-fill">
                        <Button 
                          size="sm" 
                          variant="outline-primary" 
                          className="w-100 d-inline-flex align-items-center justify-content-center"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={12} />
                          <span>Demo</span>
                        </Button>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}