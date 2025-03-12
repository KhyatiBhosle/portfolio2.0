import {motion} from "framer-motion";

function About(){
    return(
       <div className="about"> 
            <motion.h1
            initial={{x: "20px"}}
            whileInView={{ x: "0"}}
            transition={{duration: 2}}>ABOUT</motion.h1>
            <hr/>
            
            <motion.p
            initial={{opacity: 0, y : "100px"}}
            whileInView={{ opacity: 1, y : 0}}
            transition={{duration: 1, delay: .2}}>
            As a dedicated and self-taught full-stack web developer, I bring a strong foundation in building scalable applications with React, Node.js, Express, and MongoDB. With a Masters in Electrical and Computer Engineering and hands-on experience as a Junior Frontend Developer, I’ve enhanced user experiences, driven engagement, and delivered visually appealing, responsive designs. 
            <br/><br/>
            My work, including projects like ToDo Tower and Bookish Journey, demonstrates my passion for simplifying complex processes and designing efficient, user-centered systems. I’m particularly excited about opportunities to leverage cutting-edge technologies such as cloud computing and AI, while continuing to grow my expertise in front-end and full-stack development.
            <br/><br/>
            Let’s connect if you're looking for someone who can combine technical know-how with a keen eye for design and innovation.            </motion.p>
        </div>
    )
}

export default About;