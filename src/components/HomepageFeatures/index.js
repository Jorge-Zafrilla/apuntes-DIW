import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import apunteslogo from '@site/static/img/logo-apuntes.png';
import actividadeslogo from '@site/static/img/logo-actividades.png';
import anuncioslogo from '@site/static/img/logo-anuncios.png';

const FeatureList = [
  {
    title: 'Apuntes del curso',
    Img: apunteslogo,
    description: (
      <>
        Estos apuntes te ayudarán a seguir las clases, repasar conceptos clave y ver ejemplos para aplicar a tu diseño.
      </>
    ),
  },
  {
    title: 'Actividades',
    Img: actividadeslogo,
    description: (
      <>
        Aquí podrás encontrar ejercicios, problemas resueltos, y propuestas de trabajo para aplicar lo aprendido en las clases.
      </>
    ),
  },
  {
    title: 'Anuncios',
    Img: anuncioslogo,
    description: (
      <>
        Se publicarán todas las noticias y avisos importantes relacionados con el curso.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt={title} />
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