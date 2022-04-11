import './Skills.css';
import PageHeader from './../PageHeader/PageHeader';
import skills from './../../img/skills.jpeg';

//skills

const listTitlestile = { fontWeight: 900, color: '#9b1fe8', marginBottom: '4px'

}

const backendskills=
<ul>
    <li style={ listTitlestile}>BACKEND</li>
    <li>MySQL - Java - PHP</li>
    <li>JavaScript</li>

</ul>

const frontendskills =
<ul>
    <li style={ listTitlestile}>FRONTEND</li>
    <li>HTML - CSS - ReactJS</li>
    <li>WebGL</li>

</ul>

const computerskills =
<ul>
    <li style={ listTitlestile}>COMPUTER Skills</li>
    <li>Word - Excel - PowerPoint</li>
    <li>Umlet</li>

</ul>
 
 const totalSkills =[backendskills, frontendskills, computerskills]


const Skills = () => {
    return (  
    <div className='skills' id='skills'>
            <PageHeader title={"What about the skills?"}/>
            <p>
                
            </p>
            <div className='container'>
                {
                   totalSkills.map(skills =>{
                       return (
                           <div className='list'>
                               {skills}
                            </div>
                       )
                   })
                }

            </div>
    </div>
    );
}
 
export default Skills; 