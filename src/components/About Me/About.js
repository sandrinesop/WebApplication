import './About.css';
import PageHeader from './../PageHeader/PageHeader';
import profile from './../../img/profile.jpeg';

const About = () => {
    return ( 
        <div className='AboutMe' id='about'>
                 <PageHeader title={"About Me"}/> 

            <div className='container'>
                <div className='text'>
                    <h2>Hello I am Sandrine SOP</h2>
                    <p>
                    Hi, I am Sandrine SOP, a Young dedicated, intelligent, and high-motivated woman essentially looking for internship in Software, Web and Mobile Development. 
                    I have a drive for innovation, developing solutions, learning, and applying new knowledge in any environment I find myself in. 
                    I enjoy working in diverse teams with different experiences to contribute to creating innovative solutions. 
                    My determination and the love for this field since I was little, make me more enthusiast about learning more. 
                    What I Proud myself most is in my strive for always developing in every field I ever find myself interested in.
                    </p>
                    <div className="profile-options">
                        <a href="Sandrine.pdf" download='Sandrine Portfolio.pdf' >
                            <button className="btn highlighted-btn"> Get Resume </button>
                        </a>
                    </div>
                </div>
                
                <div className='photo'>
                    <img className='profile' src={profile} alt="No image"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;