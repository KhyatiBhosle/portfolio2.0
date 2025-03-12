import {motion} from "framer-motion";

function Projects(){
    return(
        <div className="projects">
        <motion.h1
            initial={{x: "20px"}}
            whileInView={{ x: "0"}}
            transition={{duration: 2}}>RECENT WORKS</motion.h1>
            <hr/>        
            <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2}}
                className="row">
                <div className="col-1"><h4>1.</h4></div>
                <div className="col-5">
                    <img src="./images/projects/todo.png"></img><br/><br/>
                </div>
                <div className="col-6">
                    <h4>To-Do Tower</h4>
                    <p>
                        'To-Do Tower' is a full MERN stack task management app with Node.js and Express.js for the backend and React.js for the frontend. It handles tasks, subtasks, and statuses across various boards, demonstrating my ability to develop advanced productivity tools.
                        <br/>
                        <br/>
                        <a href="https://majestic-pasca-0d9260.netlify.app">View Project</a> | <a href="https://github.com/KhyatiBhosle/todoTower">View Code</a>
                    </p>
                </div>
            </motion.div>

            <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2}}
                className="row">
                <div className="col-1"><h4>2.</h4></div>
                <div className="col-5">
                    <img src="./images/projects/rcube.png"></img><br/><br/>
                </div>
                <div className="col-6">
                    <h4>Our Cube</h4>
                    <p>
                        'OurCube' connects people offering services with those in need, covering accommodation, ride-shares, and jobs. This platform simplifies connecting offerers and requesters, showcasing my skills in creating community-driven web applications.
                        <br/>
                        <br/>
                        <a href="https://ourcube.onrender.com">View Project</a> | <a href="https://github.com/KhyatiBhosle/OurCube">View Code</a>
                    </p>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2}}
                className="row">
                <div className="col-1"><h4>3.</h4></div>
                <div className="col-5">
                    <img src="./images/projects/byou.png"></img><br/><br/>
                </div>
                <div className="col-6">
                    <h4>B-You</h4>
                    <p>
                        This simple blogging platform was my first full-stack project, enhancing both my front-end and backend skills. It utilizes HTML5, CSS, JavaScript, Bootstrap, Node.js, Express.js, and Git, demonstrating my ability to build functional web applications.
                        <br/>
                        <br/><a href="https://blogging-7hre.onrender.com">View Project</a> | <a href="https://github.com/KhyatiBhosle/blogging">View Code</a>
                    </p>
                </div>
            </motion.div>
           
        </div>
    )
}

export default Projects;