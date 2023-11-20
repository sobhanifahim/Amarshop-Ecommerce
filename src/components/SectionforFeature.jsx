import Section from '../styles/section.module.css'
export default function SectionforFeature() {
    return(
        <div className={Section.outerdiv}>
            <div className={Section.innerdiv}>
            <div className={Section.Electronics}>A</div>
            <div className={Section.jewelery}>B</div>
            <div className={Section.men}>C</div>
            <div className={Section.women}>D</div>
            </div>
        </div>
        
    );
};
