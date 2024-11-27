import styles from './page.module.scss';
import { Top, Middle, Bottom, Props, Faceplate, Table } from './svgs';
import Swatches from '../heroes/swatches';
// import Link from 'next/link';
import Blueprints from '../heroes/blueprints';
import SvgSprite from '../heroes/svgSprite';
const Page: React.FC = () => {
  return (<>
    <SvgSprite />
    <section className='content'>
      <h1>Design System Blueprints</h1>
      <p>
        Design systems are more than a collection of pre-built components; they are the embodiment of deliberate decisions that shape your product&apos;s identity and functionality. These decisions stem from your brand&apos;s personality, accessibility standards, localization requirements, and user research insights. Together, they provide the foundation for a cohesive and inclusive design system that empowers teams to create with confidence and consistency.
      </p>

      <p>
        Every component in a design system carries the weight of countless considerations, from typography and color contrast to interaction patterns and cultural nuance. These choices ensure your product reflects your brand values while meeting the diverse needs of your users. By understanding the principles behind these decisions, teams can move beyond assembling components to crafting user experiences that feel intuitive and purposeful.
      </p>

      <p>
        Thinking of design systems as a framework of decisions rather than just a toolbox of parts encourages a deeper appreciation for their role in product development. They are not just about speed and efficiency but about fostering collaboration and enabling scalable, user-centric solutions. When you see the system as a living guide to your product&apos;s essence, you unlock its true potential as a strategic asset for design and development teams alike.
      </p>
      <p>Let&apos;s dive into a series of considerations when building out your design system</p>
    </section>
    <section className={`${styles.hero} ${styles.tokens}`}>
      <div className={styles.heroImage}>
        <div className="backdropContainer">
          <Swatches />
        </div>
      </div>
      <div className={`${styles.headingHero}`}>
        <h1 className="gooey">  <span>Fundamentals</span><br /><span>
          {/* <Link href="/tokens"> */}
          Design Tokens (coming soon)
          {/* </Link> */}
        </span>
        </h1>
      </div>
    </section>
    <section className={`${styles.hero} ${styles.tokens}`}>
      <div className={styles.heroImage}>
        <div className="backdropContainer">
          <Blueprints />
        </div>
      </div>
      <div className={`${styles.headingHero}`}>
        <h1 className="gooey">  <span>Blueprints</span><br /><span>
          {/* <Link href="/tokens"> */}
          UX Patterns (coming soon)
          {/* </Link> */}
        </span>
        </h1>
      </div>
    </section>
    <section className={`${styles.hero}`}>
      <div className={styles.heroImage}>
        <div className={`backdropContainer   ${styles.blueprintSVG}`}>
          <div className={styles.propsTable}>
            <Table />
          </div>
          <div className={styles.component}>

            <Bottom />
            <Top />
            <Middle />
            <Faceplate />
            <Props />
          </div>
        </div>
      </div>
      <div className={`${styles.headingHero}`}>
        <h1 className="gooey">  <span>UX patterns</span><br /><span>
          {/* <Link href="/typography"> */}
          Component Blueprints
          {/* </Link> */}
        </span>
        </h1>
      </div>
    </section>
  </>
  );
};

export default Page;