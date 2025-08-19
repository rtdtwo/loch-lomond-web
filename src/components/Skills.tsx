import { motion } from 'motion/react'
import { Container, Card, Badge } from 'react-bootstrap'
import { skillsData as skillCategoriesData, iconMap } from '../data'
import type { IconName } from '../data'

export function Skills() {
  const skillCategories = skillCategoriesData.skillCategories.map(category => ({
    ...category,
    icon: iconMap[category.icon as IconName]
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  }

  return (
    <section className="py-5">
      <Container fluid="xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Technical Skills
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="row g-4"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants} className="col-md-6">
              <Card className="card-custom h-100">
                <Card.Header>
                  <h5 className="card-title d-flex align-items-center gap-2 mb-0">
                    <category.icon size={20} />
                    {category.title}
                  </h5>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.05 }}
                    className="d-flex flex-wrap gap-2 flex-grow-1 align-items-start"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} variants={skillVariants}>
                        <Badge bg="dark">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}