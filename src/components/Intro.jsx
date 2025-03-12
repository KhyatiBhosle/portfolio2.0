import {motion} from "framer-motion";

function Intro(){
    return(
        <div className="intro2">
            <div>
                <motion.h1
                    className="lappy"
                    initial={{y: '20vh', fontSize: '10rem'}}
                    animate={{y : 0, fontSize: '6rem'}}
                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                    >Khyati</motion.h1>

                <motion.h1
                    className="mobile"
                    initial={{y: '20vh', fontSize: '6rem'}}
                    animate={{y : 0, fontSize: '4rem'}}
                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                    >Khyati</motion.h1>
                    <motion.div 
                    className="sub-intro">   
                        <motion.div 
                            initial={{ y: 0 }}
                            animate={{ y: "-100%"}}
                            transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                            className="curtainTop"
                        >
                        </motion.div>

                        <motion.div 
                            initial={{ y: 0 }}
                            animate={{ y: "100%" }}
                            transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
                            className="curtainBottom"
                        >
                        </motion.div>

                        <motion.img 
                            src ="./images/background.jpeg" 
                            alt="intro2"
                            initial={{opacity: 0}}
                            animate={{opacity: .45}}
                            transition={{delay: 0.5, duration: 0.7}}
                        />
                        <motion.h4 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.2, duration: 0.7}}
                        >  
                            SOFTWARE ENGINEER
                        </motion.h4>
                    </motion.div>
                <motion.h1  
                    className="lappy"                   
                    initial={{y: '-20vh', fontSize: '10rem'}}
                    animate={{y : 0, fontSize: '6rem'}}
                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut"}}>Bhosle
                </motion.h1>
                <motion.h1  
                    className="mobile"                   
                    initial={{y: '-20vh', fontSize: '6rem'}}
                    animate={{y : 0, fontSize: '4rem'}}
                    transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut"}}>Bhosle</motion.h1>
            </div>
        </div>
    )
}

export default Intro;