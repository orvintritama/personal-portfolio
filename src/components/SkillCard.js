import { Col } from "react-bootstrap";

export const SkillCard = ({ title, tools }) => {
  const toolNames = tools ? Object.values(tools).join(", ") : '';
  return (
    <Col size={4} sm={4} md={4}>
      <div className="skill-box">
          <div className="skill-text">
            <h4>{title}</h4>
            <span>{toolNames}</span>
          </div>
      </div>
    </Col>
  )
}