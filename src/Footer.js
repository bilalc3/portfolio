import github from "./assets/images/githublogo.png" 
import linkedin from "./assets/images/linkedinlogo.png" 

const githublink = "https://github.com/bilalc3"; 
const linkedinlink = "https://www.linkedin.com/in/bilalchdry1/"; 

const Footer = () => {
    return (  
        <div className="footer-container">
            <div className="footer-left">
                © Bilal Choudhary
            </div>
            <div className="footer-right">
                <a href={githublink} className="iglink" target="_blank" rel="noreferrer">
                    <img src={github} alt="" className="iconimage" />
                  </a>
                <a href={linkedinlink} className="twitterlink" target="_blank" rel="noreferrer"> 
                    <img src={linkedin} alt="" className="iconimage" />
                </a>
            </div>
        </div>
    );
}
 
export default Footer;