import backgroundImage from "./assets/images/backgroundFrame.jpeg";
import github from "./assets/images/githublogo.png" 
import linkedin from "./assets/images/linkedinlogo.png" 
import devpost from "./assets/images/devpostlogo.png" 

//<img src={backgroundImage} alt="background" class = "backgroundImage" />
const datas = [
    {
        name: "Linkedin",
        image: linkedin, 
        link: "https://www.linkedin.com/in/bilalchdry1", 
        id: 1
    },
    {
        
        name: "Devpost",
        image: devpost, 
        link: "https://devpost.com/bilalc3", 
        id: 2
    },
    {
        name: "Github",
        image: github, 
        link: "https://github.com/bilalc3", 
        id: 3
    }, 

]
const Landing = () => {


    
    return (  
        <div className="backgroundContainer">
            <div className="primaryContainer">

                <div className="name">
                    Bilal Choudhary
                </div>

                <div className="university">
                    1st year Computer Science Student at the Univeristy of Waterloo
                </div>


                <div className="logoInfo">
                    {datas.map((data) => (
                        <a href={data.link} target="_blank" rel="noreferrer">
                        <div className="logopreview" key = {data.id}>
                            <img className= "logo-image" src={data.image} alt="" />                  
                        </div>
                        </a>
                        ))}
                </div>

            </div>
           
        </div>
    );
}
 
export default Landing;