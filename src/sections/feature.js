/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Beginner Friendly',
    title: 'Beginner Friendly',
    text:
      'Our programs are tailor made and are beginner friendly. We want all to prosper and none to be left behind.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Hands On',
    title: 'Hands On',
    text:
      'Create from your learning. We focus on hands on. We believe practical knowledge is as important as conceptual knowledge.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Keep it Simple',
    title: 'Keep it Simple',
    text:
      'We believe in simplicity. Learning can be very simple if you have the right approach. Keep simple, learn more.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Domain Specialists',
    title: 'Domain Specialists',
    text:
      'We got experts in each domain to make your learning smooth and get you equipped with the right skills, the right way.',
  },
];

export default function Feature() {
  return (
   <section sx={{variant:'section.feature'}}>
     <Container>
       <SectionHeader
        slogan="CLOSER TO YOUR AMBITIONS, A STEP AT A TIME."
        title="Meet exciting features of EmPower"
       />
       <Grid sx={styles.grid}>
       {data.map((d)=>(
            <FeatureCard
              key={d.id}
              src={d.imgSrc}
              title={d.title}
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
