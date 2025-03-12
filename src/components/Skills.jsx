import {motion} from "framer-motion";

function Skills(){
    return(
        <div className="skills row">
            <motion.h1
            initial={{x: "20px"}}
            whileInView={{ x: "0"}}
            transition={{duration: 2}}>WORK EXPERIENCE AND SKILLS</motion.h1>
            <hr/>
            <div className="col-6">
                <span>Frontend Developer</span>
                <p>Indralok Technologies Pvt. Ltd.</p>
                <ul>
                    <li>
                    Collaborated with cross-functional teams, including developers and content creators, to translate design concepts into functional web interfaces.
                    </li>
                    <li>
                    Enhanced website aesthetics and functionality, optimizing user engagement and visual appeal through advanced use of CSS, JavaScript, and Bootstrap.
                    </li>
                    <li>
                    Conceptualized and executed visually compelling website designs that met client requirements and adhered to brand guidelines.
                    </li>
                    <li>
                    Applied best practices in UX design to ensure intuitive navigation and seamless user interactions.<br/>
                    </li>
                </ul>									     
                <br/>

                <span>Junior UI/UX Developer</span>
                <p>Indralok Technologies Pvt. Ltd.</p>
                <ul>
                    <li>
                    Designed responsive email templates using HTML, CSS, and Bootstrap, maintaining brand consistency.
                    </li>
                    <li>
                    Supported the development team in refining UI design to enhance user experience.
                    </li>
                    <li>
                    Collaborated with developers to implement design specifications, ensuring seamless UI integration.<br/>
                    </li>
                </ul>
            </div>
            <div className="col-6 skill">
                <ul>
                    <li>
                    <span>Programming Languages: </span>
                     JavaScript, Node.js, Python, Java
                    </li>
                    <li>
                    <span>Web Development: </span>ReactJS, ExpressJS, HTML5, CSS, Bootstrap, MongoDB
                    </li>
                    <li>
                    <span>Cloud Technologies: </span>Currently expanding my knowledge in Azure and Docker
                    </li>
                    <li>
                    <span>Development Tools: </span>Git (Currently expanding my knowledge in CI/CD pipelines and DevOps methodologies)
                    </li>
                    <li>
                    <span>Data Management: </span>MongoDB, SQL, PostgreSQL
                    </li>
                    <li>
                    <span>Testing and Debugging: </span>Familiar with TDD and security by design in development work
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Skills;