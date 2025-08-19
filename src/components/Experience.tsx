import { Building, Calendar } from 'lucide-react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { experienceData } from '../data'

export function Experience() {
  const { experiences } = experienceData

  return (
    <section className="py-5 bg-light">
      <Container fluid="xl">
        <h2 className="section-title">Professional Experience</h2>
        
        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col key={index} xs={12}>
              <Card className="card-custom h-100">
                <Card.Header className="border-bottom">
                  <div className="d-flex justify-content-between align-items-start gap-4">
                    <div>
                      <h4 className="h4 mb-2 text-primary">{exp.title}</h4>
                      <div className="d-flex align-items-center gap-2 text-secondary mb-2">
                        <Building size={14} className="flex-shrink-0" />
                        <span className="fw-medium text-sm">{exp.company}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted">
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="text-xs">{exp.duration}</span>
                        <span className="text-xs">•</span>
                        <span className="text-xs">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="text-secondary mb-3">{exp.description}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} bg="dark">
                        {tech}
                      </Badge>
                    ))}
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