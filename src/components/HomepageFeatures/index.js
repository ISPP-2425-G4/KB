import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Una plataforma intuitiva y amigable',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        La base de datos del conocimiento del grupo 4 de ISPP 24/25 se ha desarrollado
        a través del generador de Docusaurus, para una gestión fácil y accesible a la 
        información y documentación desarrollada a lo largo del proyecto.
      </>
    ),
  },
  {
    title: '¡Encuéntranos!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Haz click <a href="https://sites.google.com/view/borroo">aquí</a> y ve directo a nuestra Landing Page, donde iremos añadiendo
        las últimas novedades y actualizaciones de Borroo.
      </>
    ),
  },
  {
    title: 'Organización cómoda y simple',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        La base del conocimiento está organizada de una forma simple para una 
        comprensión sin dificultad. Principalmente, está dividida en las Actas 
        de reuniones del grupo, y el Feedback recibido cada semana. Además, se pueden
        ver los acuerdos firmados por el equipo, en concreto, el Commitment Agreement, 
        y el Protocolo de Gestión de Conflictos.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
