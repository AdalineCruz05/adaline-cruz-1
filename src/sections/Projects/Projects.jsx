import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import ecommerce from '../../assets/ecommerce.png';
import ecommerceadmin from '../../assets/ecommerce-admin.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}> 
    <h1 className='sectionTitle'> Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard 
      src={viberr} 
      link="https://github.com/AdalineCruz05/adaline-cruz-1"
      h3="React JS Portfolio"
      p="Portfolio Website"
      />

      <ProjectCard 
      src={ecommerce} 
      link="https://korean-merchandise.vercel.app/"
      h3="E-Commerce Web App"
      p="User UI "
      />

      <ProjectCard 
      src={ecommerceadmin} 
      link="https://korean-merchandise.vercel.app/"
      h3="E-Commerce Web App"
      p="Admin UI "
      />
    </div>
    </section>
  );
}

export default Projects