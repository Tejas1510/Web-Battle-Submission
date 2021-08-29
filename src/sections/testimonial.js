/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image, Link} from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import ReadMoreReact from 'read-more-react';
import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const data = [
  {
    id: 1,
    title: 'Data Engineer Intern at Amazon',
    description:
      'I started my interview preparation journey from the first seminar of O(1). Things were explained very well in detail, from tips and tricks for interviews to resources for DSA and core subjects.CPL was one of the highlights for me as I was able to improve my problem solving skills significantly. I would recommend O(1) to every fresher looking for mentorship, guidance and a productive atmosphere to learn and grow.',
    avatar: Avatar1,
    name: 'Akshay Mishra',
    designation: '@denny.hil',
    review: 5,
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    title: 'BackEnd Developer Intern at HackerEarth',
    description:
      'I participated in CPL organized by EmPower in May 2020 and I was team leader of my team. As, CPL was a team game it not only helped me to enhance my codingskills but also helped me to understand- 1. How to collaboratively solve a problem as a team. 2. Other better approaches for the same problem that you find out after discussing with your team mates. I would highly recommend to participate in CPL contest organized by EmPower.',
    avatar: Avatar2,
    name: 'Amarkumar Mishra',
    designation: '@denny.hil',
    review: 5,
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    title: 'SDE-T at Amazon',
    description:
      'I took part in Coding Premier League and multiple Competitive Coding Streak contests organised by EmPower.Before attending those events I was not able to solve even very simplecoding problems on Codechef and Codeforces but after receiving proper guidance on resources and improving thought process for solving problems by EmPower, I improved a lot in few months. None of the interviews I gave had gone without solving a coding problem, so I would suggest to improve your competitive coding skill if you are not good in it and I would highly recommend to be part of EmPower and take active participation in various contests and sessions organized by them.',
    avatar: Avatar3,
    name: 'Sudhanshu Bhogal',
    designation: '@denny.hil',
    review: 5,
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    title: 'Software Engineering Intern at Fivetran',
    description:
      'CPL and various knowledge sessions helped me in my competitive coding and interview preparation.CPL was quite helpful as it helped to improve competitive coding in a funway and it also improved coding culture. It would help beginners to kickstart their coding journey. Various off-campus opportunities were also posted which can help to avoid missing on opportunities.',
    avatar: Avatar4,
    name: 'Pranav Manbhekar',
    designation: '@denny.hil',
    review: 4,
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function TestemonialCard() {
  return (
   <section id="testimonial" sx={{variant:'section.testimonial'}}>
     <Container>
       <SectionHeader
        slogan="Testimonials"
        title="Meet Client Satisfaction"
       />
      </Container>
       <Box sx={styles.carouselWrapper}>
         <Carousel 
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
         >
          {data.map((d)=>(
            <Box sx={styles.reviewCard}>
              <Rating rating={d.review}/>
              <Heading as="h3" sx={styles.title}>
                {d.title}
              </Heading>
              <ReadMoreReact sx={styles.description} text={d.description}
                min={80}
                ideal={100}
                max={200}
                readMoreText="read more...."/>
              {/* <Text sx={styles.description}>{d.description}</Text> */}
              <div className="card-footer">
                <div className="image">
                  <Image src={d.avatar}/>
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {d.name}
                  </Heading>
                  <Box sx={styles.socialmedia} className="social__share">
                    {d.socialProfile.map((s)=>(
                      <Link key={s.id} href={s.path} sx={{color:'primary',fontSize:'18px'}}>
                        {s.icon}
                      </Link>
                    ))}
                  </Box>
                </div>
              </div>
            </Box>

          ))}
         </Carousel>
       </Box>
   </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  socialmedia:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
  socialShare: {
    position: 'absolute',
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: 'primary',
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',
      '&:hover': {
        color: ['primary', null, 'text'],
      },
    },
  },
};






