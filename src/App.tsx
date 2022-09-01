import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { PageNotFound } from './components/PageNotFound';
import { BlogPage } from './components/blog/BlogPage';
import { Dedicated } from './components/blog/Dedicated';
import { GoodFirms } from './components/blog/GoodFirms';
import { NewWebsite } from './components/blog/NewWebsite';
import { TopCompany } from './components/blog/TopCompany';
import { CareerPage } from './components/career/CareerPage';
import { FrontEnd } from './components/career/FrontEnd';
import { LeadSpecialist } from './components/career/LeadSpecialist';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Design } from './components/services/Design';
import { Mobile } from './components/services/Mobile';
import { TeamServices } from './components/services/TeamServices';
import { Web } from './components/services/Web';
import { ScrollTop } from './components/additional/ScrollTop';
import { Miia } from './components/Miia';
import { Ivala } from './components/Ivala';
import { RehabFinder } from './components/RehabFinder';
import './styles/App.scss';
import { NewMe } from './components/NewMe';

export const App = () => {
  return (
    <div className="website">
      <ScrollTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/ui-ux-design/" element={<Design />} />
          <Route path="/services/mobile-development/" element={<Mobile />} />
          <Route path="/services/web-development/" element={<Web />} />
          <Route path="/services/dedicated-team-services/" element={<TeamServices />} />
          <Route path="/portfolio/" element={<Portfolio />} />
          <Route path="/company/about-us/" element={<About />} />
          <Route path="/company/blog/" element={<BlogPage />} />
          <Route path="/company/career/" element={<CareerPage />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/dedicated-team-services/" element={<Dedicated />} />
          <Route path="/got-it-agency-has-paved-its-way-to-thrive-by-offering-great-business-solutions-goodfirms/" element={<GoodFirms />}></Route>
          <Route path="/the-launch-of-our-new-website-blog/" element={<NewWebsite />} />
          <Route path="/got-it-agency-named-to-clutch-2019-top-eastern-european/" element={<TopCompany />} />
          <Route path="/company/career/middle-frontend-position/" element={<FrontEnd />} />
          <Route path="/company/career/leadspecialist-position/" element={<LeadSpecialist />} />
          <Route path="/portfolio/miia/" element={<Miia />} />
          <Route path="/portfolio/ivala-learn/" element={<Ivala />} />
          <Route path="/portfolio/rehab-finder/" element={<RehabFinder />} />
          <Route path="/portfolio/clinics/" element={<NewMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollTop>
    </div>
  );
}
