import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink, tools }) => {
  const toolNames = tools ? Object.values(tools).join(", ") : '';
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbox">
        <a href={projectLink} target="_blank">
          <img src={imgUrl} alt="project img"/>
          <div className="proj-text">
            <h4>{title}</h4>
            <span>{description}</span>
            <br></br><br></br>
            <span id='tools'>Tools: {toolNames}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}