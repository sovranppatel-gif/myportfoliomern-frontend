import AboutImg from '../assets/profile-image.jpg';
function About(){
    return(<>
    <section id="about">
        <h2>About Me</h2>
        <div class="about-section">
                    <img src={AboutImg} alt="about-image" />
                    <div class="about-content">
                                <h3>Hello! I am Shivam Dixit</h3>
                                            <p>I am a BSC final Year student from MIMT Colleg Narsinghpur. I am interested in<br/>
             technology, computers and learning new skills.</p>
    <p>Currently, I am learning HTML, CSS and JavaScript and working <br/>
        towards becoming a better developer.</p>
    <p>My goal is to build useful websites and continue improving my <br/>
        technical skills.</p>
                    </div>
        </div>
    </section>
    </>)
}
export default About;