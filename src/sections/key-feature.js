/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Company1 from 'assets/key-feature/img1.png';
import Company2 from 'assets/key-feature/img2.png';
import Company3 from 'assets/key-feature/img3.png';
import Company4 from 'assets/key-feature/img4.png';
import Company5 from 'assets/key-feature/img5.png';
import Company6 from 'assets/key-feature/img6.png';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Company1,
    altText: 'Hackwithinfy',
    title: 'Hackwithinfy',
    text:
      'Off-Campus Placement Opportunity by Infosys. Jobs worth 8 LPA , 5 LPA & 3.5 LPA offered.',
  },
  {
    id: 2,
    imgSrc: Company2,
    altText: 'BNY Hackathon',
    title: 'BNY Hackathon',
    text:
      'Off-Campus Placement Opportunity by Bank of NewYork. Jobs worth 10-20 LPA offered.',
  },
  {
    id: 3,
    imgSrc: Company3,
    altText: 'Barclays Hackathon',
    title: 'Barclays Hackathon',
    text:
      'Off-Campus Placement Opportunity by Barclays. Jobs worth 8 LPA offered.',
  },
  {
    id: 4,
    imgSrc: Company4,
    altText: 'CodeVita',
    title: 'CodeVita',
    text:
      'Off-Campus Placement Opportunity by TCS. Jobs worth 6.5 LPA , 3.5 LPA offered',
  },
  {
    id: 5,
    imgSrc: Company5,
    altText: 'NCR Hackathon',
    title: 'NCR Hackathon',
    text:
      'Off-Campus Placement Opportunity by NCR. Jobs worth 7 LPA offered',
  },
  {
    id: 6,
    imgSrc: Company6,
    altText: 'Campus Placements',
    title: 'Campus Placements',
    text:
      'Will train you for coding rounds & coding interviews of all On-Campus companies.',
  },
];

export default function KeyFeature() {
  return (
   <section id="feature" sx={{variant:'section.keyFeature', paddingTop:'80px'}}>
     <Container>
       <SectionHeader
        slogan="We prepare you for various exam"
        title="EmPower"
       >
       </SectionHeader>
       <Grid sx={styles.grid}>
          {data.map((d)=>(
            <FeatureCardColumn
              key={d.id}
              src={d.imgSrc}
              title={d.title}
              altText={d.altText}
              text={d.text}
            />
          ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
