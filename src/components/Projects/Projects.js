import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import p1 from "../../Assets/Projects/p1.png"
import p2 from "../../Assets/Projects/p2.png"
import p3 from "../../Assets/Projects/p3.png"
import p4 from "../../Assets/Projects/p4.png"
import p5 from "../../Assets/Projects/p5.png"
import a1 from "../../Assets/Projects/a1.png"
import a2 from "../../Assets/Projects/a2.png"
import a3 from "../../Assets/Projects/a3.png"
import a4 from "../../Assets/Projects/a4.png"
import a5 from "../../Assets/Projects/a5.png"
import a6 from "../../Assets/Projects/a6.png"
import h1 from "../../Assets/Projects/h1.png"
import h2 from "../../Assets/Projects/h2.png"
import h3 from "../../Assets/Projects/h3.png"

function Projects() {
  const prithviImg = [p1, p2, p3, p4, p5]
  const ampliTeach = [a1, a2, a3, a4, a5, a6]
  const hive = [h1, h2, h3]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", display: 'flex', flexDirection: 'column' }}>
          <Col className="project-card">
            <ProjectCard
              imgPath={ampliTeach}
              isBlog={false}
              title="Ampli Teach"
              description="AmpliTeach is the Music Studio Platform, You can Manage your Schedule, Students and Billing, Keep your Students Engaged and Learning, Tools to Grow as big as you can Dream! nothing else even comes close! You can Watch your business grow while you do less work. Everything you need to grow and take control."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={prithviImg}
              isBlog={false}
              title="RummyXL"
              description="It is a rummyXL game admin panel. You can basically do a cms work from it. You can check a daily user addition, approve or reject withdrawal, upi, pan details and many more. owner can also see every table's member, card and wild cards of every round."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={hive}
              isBlog={false}
              title="Hive"
              description="It is a landing page of hive. which is mainly focused in medical line analytics of data. This is totally graphical representation of data which includes pie, XY, radar, gauge charts and many more. It represent the scheduled appointment, insaurance, phoneflow, scheduling report etc. We have used amchart for the graphical representation."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
