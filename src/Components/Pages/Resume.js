import React, { useState } from 'react';
import myResume from './images/myResume.pdf';

function Resume() {
  return  (
    <div className='container'>
      <h1>Laura Gupta, MSW</h1>
      <h6><a href={myResume} target="_blank">Download my resume here.</a></h6>
      <p>I am a full-stack web developer already using HTML, CSS, JavaScript, MySQL, Handlebars,
and several Node Modules like Express, Sequelize, Inquirer crypt, express-session, connectsession-sequelize, express-handlebars, . I’ve also used Third-Party-API’s and Server-Side
API’s. In addition, I have experience using Bulma CSS Framework, and Bootstrap. Through a
full time coding bootcamp, I have been learning new technologies almost every day. Learning
and growing are important core values to me. I am passionate about my own learning as well
as helping other people develop their skills and strengths. I like to fostering an environment of
critical thinking, experimentation, working together, and self-motivated learning. 
      </p>
      <h2>Education</h2>
        <h3>UC Berkeley Extension - Full Stack Web Development Bootcamp 2021-Current</h3>
        <p>I have been doing hands on web development using browser based technologies,
  JavaScript, Databases, Server Side Development, API Designs, Computer Science topics,
  and using different methods of deployment.
        </p>
        <h4>Boston University – Master of Social Work 2006-2007 </h4>
        <h6>Internship - Attleboro Public Schools - Brennan Middle School 
  </h6>
        <p>
  I worked with middle school students needing extra support through groups and individual
  meetings. I provided support to special education students, especially in the area of social
  skills. I worked on crisis intervention through the district after the death of a teacher. Helped
  to create district crisis intervention processes for future crisis events. 
        </p>
        <h4>Illinois State University - Bachelor of Science in Social Work, Minor in Psychology and
Certificate in Child Welfare 1999-2002 </h4>
        <h6>Internship - The Baby Fold - Family Services</h6>
        <p>Families were referred to us from social services after a report had been filed, but they were
not continuing with the family. We were able to provide extra help to the families and children
including referrals to make sure families received services like food, shelter, therapy, and
medical care. We also provided social skills support/training for parents and for children
including parenting classes and kids groups. </p>
      <h2>Professional Work Experience</h2>
      <h3>Momentum for Mental Health, San Jose, CA 2008-2013 </h3>
      <h4>Assistant Manager, Clinician, Personal Services Coordinator </h4>
      <p>
        I started at Momentum as a Personal Services Coordinator, providing services to clients in a program that provided intensive services for those who needed extra support. I was then promoted to be the Clinician for the Intake and Assessment team, where I Welcomed new clients into the agency as the first point of contact giving them an introduction
by discovering what brought them to the agency and how we could specialize our services to
serve their needs. I gathered information on the client’s history to remind clients of strengths
and create hope for how we could work together to improve their quality of life. I was then promoted to Asssitant Manager of the company's largest outpatient program including overseeing 40+ staff who served over a thousand
clients. I worked with local Colleges and Universities to hire, train, and maintain an internship
program. I worked on improving technology availability for staff to improve work productivity. I
made technology resources more available to clients in order to provide resources where
clients could take initiative in their own recovery. I coordinated the transfer of clients to lower
levels of care. 
      </p>
      <h3>Fellowship Health Resources, New Bedford and Plymouth MA 2003-2007</h3>
      <h4>Mental Health Counselor, Culinary Unit Coordinator, Vocational Specialist/Case Manager</h4>
      <p>I started at FHR working as a Mental Health Counselor supporting clients both in a group home and in the community living independently. I helped them with activities of daily living, goal setting, and managing medications. I then received a promotion to coordinate the Culinary Unit at Plymouth Bay House, including helping members iprove their job skills and their daily living skills. I coordinated the planning and implementing of 2-3 meals per day including the food ordering, shopping, cooking, and clean-up. I also managed the  I also did job coaching on-site with the members at their jobs in the community. 
food pantry and the resources of getting food for the food pantry, scheduling workers, and distributing the food. Then I received a promotion to work in an intensive program doing vocational and educational services for clients. I helped clients at all stages of the process of preparing for job or education readyness, preparing for work or education, and getting and maintaining employment. </p>
      <h4>Skills</h4>
      <p>My organization and determination have been integral to me completing my degrees (early)
while also employed. My leadership skills have often brought me to positions with increased
responsibility at many of the organizations where I have worked and volunteered. I work well
with others and am not afraid to jump in alongside others. I value life long learning and strive
to continuously evaluate and improve my skills. I have training and experience in vocational/
educational rehabilitation including job coaching. I also have work history managing kitchen
staff and a food pantry.</p>
      <h4>Volunteering </h4>
      <h5>Board Member, Transfiguring Adoption, 2019-current </h5>
      <p>I help evaluate the direction of the organization to make sure decisions align with the values of
the organization. Overseeing budgets and financial planning. </p>
      <h5>Parent Helper - Willow Glen Elementary - Ms. Ochoa’s Kindergarten Classroom
2019-2019</h5>
      <p>I primarily helped with art projects, pulling out a few kids at a time to work on additional
projects and helping them to improve skills like penmanship. tracing, cutting, writing and
following directions while building relationships with the kids</p>
      <h5>Mothers of Pre-Schoolers (MOPS) Leadership Team, San Jose, CA 2013- 2019 </h5>
      <p>I joined the MOPS leadership team after just 5 months of being involved in the group. I started
by taking on hospitality responsibilities including intro/welcome publications, ordering/
maintaining supplies for meetings, creating a welcoming atmosphere, MCing the meeting, and
coordinating and giving gifts for attendees. I have also taken on discussion group leadership,
meeting planning, and assisting the coordinator. </p>
    </div>
  );
};

export default Resume;