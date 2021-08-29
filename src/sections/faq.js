/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'What is EmPower ?',
    contents: (
      <div>
       EmPower is an organisation which helps college students land their dream jobs. Our experts cum your placement companions seal the deal for you. With our tailor-made programmes & your dedication, success is not far away.Trust our experience & join us today ! Let us stitch another success story together.
      </div>
    ),
  },
  {
    title: 'What is the CODERUN program ?',
    contents: (
      <div>
        It is a 60 day training regime which includes alternate days personalised coding contests based on your level. Questions in the contests will be tailor made to target coding rounds & interviews for companies.
      </div>
    ),
  },
  {
    title: `What differnt companies preparation the program targets ?`,
    contents: (
      <div>
        The Program prepares you for competions like Hackwithinfy, BNY Hackathon, Barclays Hackathon, NCR Hackathon, CodeVita, and Campus Placements.
      </div>
    ),
  },
  {
    title: `What if I face any doubt in my Coding Journey ?`,
    contents: (
      <div>
        Our experienced mentors will always be there to help you out in your preparations and solve all your queries
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id="faq" sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your questions answered"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
