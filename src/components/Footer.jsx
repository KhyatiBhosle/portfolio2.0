import {motion} from "framer-motion";

function Footer(){
return(
    <div className="footer row">
        <motion.h1
            initial={{x: "20px"}}
            whileInView={{ x: "0"}}
            transition={{duration: 2}}>LETS CONNECT!</motion.h1>
            <hr/>
        <div className="col-2">
            <img src="./images/bg1.jpg" alt="footer"/>
        </div>
        <motion.div 
        initial={{opacity: 0, y: "50px"}}
        whileInView={{opacity: 1, y : 0}}
        transition = {{duration: 1}}
        className="col-5">
            <span>LinkedIN: </span><a href="https://www.linkedin.com/in/khyati-bhosle/">linkedin.com/in/khyati-bhosle</a><br/><br/>
            <span>GitHub: </span><a href="https://github.com/KhyatiBhosle">github.com/KhyatiBhosle</a><br/><br/>
            <span>Mail: </span><a href="mailto: khyatibhosle@gmail.com">khyatibhosle@gmail.com</a>
        </motion.div>
        <div className="col-5">
            <div className="row align-items-center">
                <motion.div 
                initial={{opacity: 0, y: "50px"}}
                whileInView={{opacity: 1, y : 0}}
                transition = {{duration: 1}}
                className="col link">
                    <a href="https://www.facebook.com/khyati.bhosle/">
                        <i className="fa-brands fa-square-facebook"></i><br/>
                        <p>KhyatiBhosle</p>
                    </a>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, y: "50px"}}
                whileInView={{opacity: 1, y : 0}}
                transition = {{duration: 1}}
                className="col link">
                    <a href="https://www.instagram.com/khyatibhoslle/">
                        <i className="fa-brands fa-instagram"></i><br/>
                        <p>@khyatibhoslle</p>
                    </a>
                </motion.div>
            </div>
        </div>
    </div>
)
}

export default Footer;