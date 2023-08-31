import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { FaBitbucket } from "react-icons/fa";

function Versionstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBitbucket />
      </Col>
    </Row>
  );
}

export default Versionstack;
