import portfolioImg from '../assets/portfolio-website.jpg';
import jobPortalImg from '../assets/job-portal.jpeg';
import calculatorImg from '../assets/js-calculator.png';
function Projects(){
return(<>
<section class="projects" id="projects">

    <h2>My Projects</h2>

    <p class="projects-intro">
        Some projects I have created while learning web development.
    </p>

    <div class="project-container">

        <div class="project-card">

            <div class="project-image">
                <img src={portfolioImg} alt="portfolio-website"/>
            </div>

            <div class="project-content">

                <h3>Personal Portfolio</h3>

                <p>
                    A responsive personal portfolio website
                    created using HTML, CSS and JavaScript.
                </p>

                <div class="project-tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </div>

                <a href="#" class="project-btn">View Project</a>

            </div>

        </div>


        <div class="project-card">

            <div class="project-image">
                <img src={jobPortalImg} alt="Job Portal"/>
            </div>

            <div class="project-content">

                <h3>Job Portal Website</h3>

                <p>
                    A job portal website where users can
                    explore different job opportunities.
                </p>

                <div class="project-tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </div>

                <a href="#" class="project-btn">View Project</a>

            </div>

        </div>


        <div class="project-card">

            <div class="project-image">
                <img src={calculatorImg} alt="calculator"/>
            </div>

            <div class="project-content">

                <h3>JavaScript Calculator</h3>

                <p>
                    A simple calculator built using HTML,
                    CSS and JavaScript with interactive buttons.
                </p>

                <div class="project-tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                </div>

                <a href="#" class="project-btn">View Project</a>

            </div>

        </div>

    </div>

</section>
</>)
}
export default Projects;