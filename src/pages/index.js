import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { VideoProvider } from 'contexts/video/video.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import Faq from 'sections/faq';
import Events from '../sections/event'
import CTA from '../sections/cta-three'
import FavoriteCourse from 'sections/favourite-course';
import PopularCourse from 'sections/popular-course';
import Modal from 'components/modal';
import Payment from 'sections/payment'
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <VideoProvider> 
        <Layout>
          <SEO title="EmPower Home Page" />
          <Banner />
          <Feature />
          <CTA/>
          <ServiceSection />
          <CoreFeature />
          <Payment/>
          <FavoriteCourse/>
          <KeyFeature />
          <WorkFlow />
          <Events/>
          <PopularCourse/>
          <TeamSection />
          <TestimonialCard />
          <Faq/>
          <Modal/>
        </Layout>
      </VideoProvider>
    </ThemeProvider>
  );
}
