import './Home.css'
import profile from '../../img/binaryWorld.webp';
import Typical from 'react-typical';


const Home = () => {
    return ( 
    
    <div className='Home' id='home'>
        <div className='container'>
            <h1> Welcome On my Website</h1>
        </div>
        <img className='code' src= {profile} alt="no image"></img>
        <div className="profile-details-role">
                <span className="primary-text">
                    {" "}
                    <h1>
                        {""}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Enthusiastic Developer 😍",
                            1000,
                            "Front End Developper 💻",
                            1000,
                            "Back End Developer 👩‍💻",
                            1000,
                            "React JavaScript ❤️",
                            1000,
                            
                        ]}
                        />
                    </h1> 
                </span> 
            </div>

    </div>  ); 
}
 
export default Home;