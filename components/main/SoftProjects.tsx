"use client"
import React from "react";
import ProjectCard from "./sub/ProjectCard";

const SoftwareProjects = () => {
  return (
    <div className="z-30">
    <h1 id="SoftProjects" className=" text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900 py-20">
        Software Projects
      </h1>

      <div className="flex flex-col gap-10 px-10">
        <ProjectCard
          github="https://github.com/ahmed27037/Ecommerce-Website"
          href="https://shop-sprint.onrender.com/"
          src="/ew pic1.png"
          src2="/ew pic2.png"
          title="MERN Stack Eccomerce Website"
          description="* Developed an E-commerce platform with React, attracting over 100 unique visitors in the first month.
                      • Used Node.js and Express to create a scalable API, handling 200 concurrent requests with low latency.
                      • Implemented MongoDB to manage product, user, and order data, achieving a 30% improvement in data
                      retrieval times over previous databases."
        />
        <ProjectCard
          href="https://issue-tracker-oc7x2rbi4-ahmeds-projects-4e2b796d.vercel.app/"
          src="/it pic1.png"
          src2="/it pic2.png"
          title="Next js Issue Tracker Website"
          description="Developed a bug tracking app using Next.js that enabled a team of 6 developers to efficiently list and visualize
                      *  issues, reducing bug resolution time by 40%.
                      • Utilized MySQL with Prisma ORM for efficient issue data management and streamlined access.
                      • Integrated NextAuth for secure user authentication, restricting access to sensitive project data to a team of 6
                      authorized users, resulting in a 75% reduction in potential unauthorized access attempts."
          github="https://github.com/ahmed27037/issue-tracker"
        />
        <ProjectCard
        href="https://securevpn4u.com/"
          src="/sv pic 1.png"
          src2="/sw pic 2.png"
          title="Marketing VPN website "
          description="Built with WordPress: Utilized WordPress as the content management system (CMS), leveraging its user-friendly interface to manage posts, pages, and media. This allowed for easy content creation and editing without extensive coding knowledge.
                        VPN Reviews and Comparisons: Designed the site to feature in-depth reviews of different VPN services, covering aspects such as pricing, features, performance, and privacy policies. Each review includes a summary, pros and cons, and user ratings to help visitors make informed decisions.
                        SEO Optimization: Implemented SEO best practices to improve the website's visibility on search engines. This included using appropriate keywords, optimizing meta tags, and creating an XML sitemap to enhance organic traffic.
                        User Engagement: Incorporated features such as comment sections and ratings for each VPN review, encouraging user interaction and feedback. This community engagement adds credibility to the reviews and helps readers share their experiences.
                        Responsive Design: Ensured the website is mobile-friendly, allowing users to access content easily on various devices. WordPress themes were customized to provide a consistent and attractive layout across desktops, tablets, and smartphones.
                        Challenges Addressed: Managed the organization and categorization of content to facilitate easy navigation. Handled the technical aspects of hosting and maintaining a WordPress site, ensuring smooth performance and security."
        />
      </div>
    </div>
  );
};

export default SoftwareProjects;