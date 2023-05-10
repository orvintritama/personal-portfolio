import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-ROSEN.png";
import projImg2 from "../assets/img/project-slotify.jpg";
import projImg3 from "../assets/img/project-recipe-book.jpg";
import projImg4 from "../assets/img/project-chatbot.jpg";
import projImg5 from "../assets/img/project-ramonemporium.jpg";
import projImg6 from "../assets/img/project-data-analysis.jpg";
import projImg7 from "../assets/img/project-cms.jpg";
import projImg8 from "../assets/img/project-gradius.jpg";
import projImg9 from "../assets/img/project-brackets.png";

function Project() {   

  const projects = [
    {
      title: "Image Detection",
      description: "Capstone Engineering project created for ROSEN to ease Data Scientist in Image Detection",
      imgUrl: projImg1,
      projectLink: "https://github.com/ROSEN-A/ROSEN-Group-A",
      tools: {
        "0": "HTML",
        "1": "CSS",
        "2": "JavaScript",
        "3": "Python",
        "4": "Flask",
      }
    },
    {
      title: "Slotify - Website Spotify Clone ",
      description: "A digital music web application with user, music and playlist features",
      imgUrl: projImg2,
      projectLink: "https://github.com/orvintritama/slotify",
      tools: {
        "0": "HTML",
        "1": "CSS",
        "2": "JavaScript",
        "3": "AJAX",
        "4": "PHP",
        "5": "MySQL",
      }
    },
    {
      title: "Food App",
      description: "A recipe book and shopping list Website Application",
      projectLink: "https://github.com/orvintritama/food-app",
      imgUrl: projImg3,
      tools: {
        "0": "HTML",
        "1": "CSS",
        "2": "TypeScript",
        "3": "Angular",
      }
    },
    {
      title: "Movie ChatBot",
      description: "An interactive ChatBot with IMBDpY library to provide detailed information of movies",
      projectLink: "https://github.com/orvintritama/chatbot",
      imgUrl: projImg4,
      tools: {
        "0": "Python",
      }
    },
    {
      title: "Ramonemporium",
      description: "A Containerized Web-Application with Docker",
      projectLink: "https://github.com/orvintritama/ramonemporium",
      imgUrl: projImg5,
      tools: {
        "0": "Java",
        "1": "JSP",
        "2": "Docker",
        "3": "MySQL",
        "4": "Microsoft SQL",
      }
    },
    {
      title: "Video Game Data Analysis",
      description: "A statistical data analysis on video games from 1995-2020",
      projectLink: "https://github.com/orvintritama/video-game-analysis",
      imgUrl: projImg6,
      tools: {
        "0": "Python",
        "1": "Jupyter Notebook",
        "2": "NumPy",
        "3": "Seaborn",
        "4": "Matplotlib",
      }
    },
    {
      title: "Content Management System",
      description: "A web Content Management System",
      projectLink: "https://github.com/orvintritama/cms",
      imgUrl: projImg7,
      tools: {
        "0": "HTML",
        "1": "CSS",
        "2": "JavaScript",
        "3": "AJAX",
        "4": "PHP",
        "5": "MySQL",
        "6": "API",
      }
    },
    {
      title: "Gradius",
      description: "An arcade game inspired by Gradius",
      projectLink: "https://github.com/orvintritama/gradius",
      imgUrl: projImg8,
      tools: {
        "0": "Java",
        "1": "Java Swing"
      }
    },
    {
      title: "Brackets",
      description: "A simple balanced brackets checker of an expression",
      projectLink: "https://github.com/orvintritama/brackets",
      imgUrl: projImg9,
      tools: {
        "0": "C++",
      }
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Here are some of projects. Find more information by clicking on each project!</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                        {
                            projects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                            })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>Coming Soon...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p>Coming Soon...</p>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Project;