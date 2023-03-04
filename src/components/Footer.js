import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Darshan Savani</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://twitter.com/Darshan0710?t=N0QDGwO8H1bZsRJ4P5m7gw&s=09"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/darshan-savani-631515176"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/darshan_savani_07?igshid=ZDdkNTZiNTM="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
