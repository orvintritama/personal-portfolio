import 'react-multi-carousel/lib/styles.css';
import { SkillCard } from "./SkillCard";

function Skill() {

  const skills = [
    {
      title: "Java",
      tools: { 
        "0": "Object-Oriented Programming",
        "1": "Java Swing",
        "2": "JSP",
        "3": "JUnit",
      }
    },
    {
      title: "PHP",
      tools: { 
        "0": "Web application",
        "1": "WordPress",
        "2": "Composer",
        "3": "PHPUnit",
      }
    },
    {
      title: "Python",
      tools: { 
        "0": "Flask",
        "1": "Jupyter Notebook",
        "2": "Pandas",
        "3": "NumPy",
        "4": "Matplotlib"
      }
    },
    {
      title: "JavaScript",
      tools: { 
        "0": "JQuery",
        "1": "AJAX",
        "2": "TypeScript",
      }
    },
    {
      title: "C++",
      tools: { 
        "0": "Data Structures",
        "1": "Algorithms",
      }
    },
    {
      title: "C",
      tools: { 
        "0": "Parallel Computing (OpenMP, CUDA, MPI)",
        "1": "Operating Systems"
      }
    },
    {
      title: "Database",
      tools: { 
        "0": "MySQL",
        "1": "Microsoft SQL",
        "2": "MongoDB",
        "3": "PostgreSQL",
      }
    },
    {
      title: "Front-End Framework",
      tools: { 
        "0": "React",
        "1": "Angular"
      }
    },
    {
      title: "Back-End Framework",
      tools: { 
        "0": "Flask (Python)",
        "1": "Springboot (Java)"
      }
    },
    {
      title: "Tools",
      tools: { 
        "0": "Docker",
        "1": "Git",
        "2": "GitHub",
        "3": "Confluence",
        "4": "Agile Methodologies",
      }
    }
    
  ]

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-container wow zoomIn">
                        <h2>Skills</h2>
                        <div className="row">
                        {
                            skills.map((skill, index) => {
                            return (
                                <SkillCard
                                key={index}
                                {...skill}
                                />
                            )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={blackwhite} alt="Image" /> */}
    </section>
  )
}

export default Skill;