import { Container, Row, Col, Card } from 'react-bootstrap'
import { aboutData } from '../data'

export function About() {
  const { background, focusAreas } = aboutData

  return (
    <section className="py-5">
      <Container fluid="xl">
        <h2 className="section-title">About Me</h2>
        
        <Card className="card-custom">
          <Card.Body className="p-4">
            <Row className="g-4 align-items-center">
              <Col md={6}>
                <h3 className="h3 mb-3">{background.title}</h3>
                <p className="text-secondary mb-3">
                  {background.description1}
                </p>
                <p className="text-secondary">
                  {background.description2}
                </p>
              </Col>
              
              <Col md={6}>
                <h3 className="h3 mb-3">{focusAreas.title}</h3>
                <ul className="list-unstyled">
                  {focusAreas.areas.map((area, index) => (
                    <li key={index} className="d-flex align-items-center mb-2 text-secondary">
                      <div 
                        className="flex-shrink-0 me-3 rounded-circle"
                        style={{ 
                          width: '6px', 
                          height: '6px',
                          background: 'linear-gradient(135deg, #3b82f6, #2563eb)'
                        }}
                      ></div>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}