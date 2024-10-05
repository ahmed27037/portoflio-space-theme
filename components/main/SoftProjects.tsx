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
          description="Built with MERN Stack: Utilized MongoDB for data storage, Express.js for server-side logic, React.js for the frontend, and Node.js for backend operations.
                      Secure User Authentication: Implemented Auth0 for handling user registrations and logins, ensuring secure access to user accounts.
                      Dynamic Product Catalog: Created a responsive product catalog that retrieves and displays items from MongoDB, enhancing user shopping experience.
                      Shopping Cart Functionality: Developed a shopping cart that maintains state across sessions, allowing users to add and review items before checkout.
                      Responsive Design: Leveraged Material UI for a visually appealing interface that adapts seamlessly across devices, ensuring a consistent user experience.
                      Challenges Addressed: Overcame authentication complexities and state management issues through robust integration of Auth0 and effective use of React's state management."
        />
        <ProjectCard
          href="https://issue-tracker-oc7x2rbi4-ahmeds-projects-4e2b796d.vercel.app/"
          src="/it pic1.png"
          src2="/it pic2.png"
          title="Next js Issue Tracker Website"
          description="Built with Next.js: Utilized Next.js for server-side rendering and efficient page loading, allowing for fast performance and dynamic content updates. The framework's file-based routing system was used to structure the application, organizing different views like issue creation, user dashboard, and graphical reports.
                      User Authentication: Implemented NextAuth to manage user authentication, allowing users to register and log in securely. User sessions were managed efficiently with tokens, providing access to protected routes such as issue creation and the user dashboard.
                      Issue Creation and Display: Designed a system where users can create issues by entering relevant details such as titles, descriptions, and categories. Issues were stored in a database and displayed in a list format for easy access. Each issue can be tracked over time, allowing users to monitor project progress.
                      Graphical Issue Visualization: Created a graph feature that visually displays issue data. Users can see their issues represented in bar graphs or line charts, making it easier to analyze patterns and trends. This visual representation helps in tracking the progress of each issue and understanding the overall project status.
                      Challenges Addressed: Handled the complexity of managing user authentication and sessions, while organizing the flow of data between issue creation and graphical display. Optimized the backend structure to support real-time data updates for the graph."
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