import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import linkedinIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/orvintritama" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin"></img></a>
              <a href="https://www.github.com/orvintritama" target="_blank" rel="noreferrer"><img src={githubIcon} alt=""></img></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <a href="http://www.freepik.com">Home Image designed by catalyststuff / Freepik</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;