import foodxpress from "./assets/images/foodxpress.png" 
import project from "./assets/images/projectlogo.png"
import worklogo from "./assets/images/work.png"
import nasheedify from "./assets/images/nasheedifylogo.png"
import emegle from "./assets/images/emegle3.png"
import './assets/css/Projects.css'; 


const projects =[
    {
        name: "Food Xpress", 
        description: "A web application providing over 4500+ multicultural recipes along with their respective ingredients. Aimed to promote cooking culture within university community.", 
        image: foodxpress, 
        type: project,
        tools2: "React, Node.js, Python, Mongodb", 
        tools: ["React", "Node,js", "Python", "Mongodb"], 
        link: "https://github.com/bilalc3/cooking-project-program", 
        id: 1
    }, 
    {
        name: "Nasheedify", 
        description: "A buisness site for the Nasheedify youtube channel, featuring the channel's key metrics and content. Live email connection between the website and buisness's email", 
        image: nasheedify, 
        type: worklogo,
        tools2: "React, Bootstap, EmailJs", 
        tools: ["React", "Bootstap", "EmailJs"], 
        link: "https://nasheedifylive.firebaseapp.com/", 
        id: 2
    }, 
    {
        name: "Emegle", 
        description: "Education meets Omegle, Emegle allows you to virtually connect with  students in your grade level that are studying similar subjects.",  
        image: emegle, 
        type: project,
        tools2: "React, Node.js, Socket.io", 
        tools: ["React", "Node.js", "Socket.io"], 
        link: "https://emegle-76079.firebaseapp.com/",
        id: 3
    }, 

]




const Projects = () => {
    return ( 
        <div className="projectContainer">
           <div className="projectHeading">
                <h1>Projects/Work Experience</h1>
            </div>

            <div className="projectsInfo">

                {projects.map((project) => (
                         
                       <div className="projectpreview" key = {project.id}>
                           <a href={project.link} className="projectlink" target="_blank" rel="noreferrer">  
                            <div className="projecttop">
                                <img className= "projectimage" src={project.image} alt="ProjectImage" /> 
                            </div>
                            </a> 
                            <div className="projectinfo">
                                <div className="projectTop">
                                    <div className="projectName">
                                        <p className="theprojectName">
                                            {project.name}
                                        </p>
                                    </div>
                                    <div className="projectType">
                                        <img src={project.type} alt="" className="projectstyle" />
                                    </div>
                                </div>
                                <div className="projectMiddle">
                                    {project.tools.map((tool) => (
                                        <div className="returnTools">
                                            <p className="indvTool">{tool}</p>
                                        </div>
                                    ))}                            
                                </div>
                                <div className="projectBottom">
                                    {project.description}
                                </div>
                                
                                

                            </div>
                        </div>
                        
                    ))}
                
            </div>
        </div>
     );
}
 
export default Projects;