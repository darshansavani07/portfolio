import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Darshan Savani </span>
            from <span className="purple"> Surat, India.</span>
            <br />I have done my B.Tech from marwadi university in the field of I.T(2018-2022) it self.
          </p>
          <p style={{ textAlign: "justify" }}>
            I have over 1.5+ years of Front End Developer experience ✏️ working with technologies like:
            ✅ <span className="purple">HTML | CSS | React | Javascript | Typescript | Bootstrap | MUI | Antd | Figma</span> <br /> <br />
            I can build you a custom website solution using REST APIs or even make a React ⚛️ powered front end with CMS backend so your team can modify some content on the page without a developer's help.
            <br /> <br />
            So many possibilities, I can say so much. But maybe it's best that you start off by telling me what you need help in. How can I help? :-)
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Darshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
