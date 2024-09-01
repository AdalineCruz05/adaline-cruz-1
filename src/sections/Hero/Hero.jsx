import styles from './HeroStyles.module.css';
import heroImg from "../../assets/hero-img.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Cruz, Adaline C. Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}> 
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Adaline Cruz"
            />
            <img 
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1> 
                Adaline <br/> Cruz
            </h1>
            <h2> Student Intern</h2>
            <span> 
                <a href="https://x.com/Yerenica3" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>

                <a href="https://github.com/AdalineCruz05" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>

                <a href="https://linkedin.com/in/adaline-cruz-b57976271/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}> 
                An aspiring Front-End Developer <br/> AMA Computer College Cabanatuan
            </p>
            <a href={CV} download>
                <button className="hover"> Resume </button>
            </a>
        </div>
    </section>
  );
}

export default Hero