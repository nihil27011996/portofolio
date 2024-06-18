import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import reminderapp from "../../Assets/Projects/reminderapp.png";
import carpool from "../../Assets/Projects/Carpool.png";
import AHub from "../../Assets/Projects/Ahub.png";
import IAC from "../../Assets/Projects/IAC.png";
import serverless from "../../Assets/Projects/serverless.png";
import reciepe from "../../Assets/Projects/reciepe-app.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AHub}
              isBlog={false}
              title="Assignment Hub"
              description="Created a web application using Node.js, PostgreSQL, and bcrypt for secure user authentication and data validation. The application can upload files using a Lambda function triggered by an SNS topic. Implemented YAML for CI/CD automation, and used Packer and systemctl for automated service restarts, ensuring continuous deployment and high availability"
              ghLink="https://github.com/CSYECLOUDNIHIL/webapp"
              /* demoLink="https://chatify-49.web.app/" */
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IAC}
              isBlog={false}
              title="Infrastructure as a code Using Pulumi/Terraform"
              description="Developed an Infrastructure as Code (IaC) solution using Terraform to provision resources for the Assignment Hub web application. Configured AWS services including VPC, security groups, ALB, ASG, EC2 launch templates, and RDS with PostgreSQL. Managed DNS and routing with Route 53 and set up target groups to ensure reliable and scalable deployment. This comprehensive setup ensures secure, high-performance, and scalable infrastructure for the application"
              ghLink="https://github.com/CSYECLOUDNIHIL/iac-pulumi"
              /* demoLink="https://chatify-49.web.app/" */
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carpool}
              isBlog={false}
              title="Carpool Application"
              description="Built a carpooling MERN stack web application to reduce gas consumption by 50%. The app features efficient route planning using Google Maps API and Haversine algorithm. Enhanced user data security with JWT tokens, Redux, and bcrypt encryption. Integrated Socket.IO for real-time ride approval and confirmation notifications, improving communication and reliability"
              ghLink="https://github.com/nihil27011996/Carpool-Application"
              /* demoLink="https://chatify-49.web.app/" */
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serverless}
              isBlog={false}
              title="Lambda Serverless Architecture"
              description="Developed a Lambda function using JavaScript to handle file uploads to cloud storage. This function supports uploading files to both AWS S3 and GCP Cloud Storage buckets, ensuring seamless integration and cross-platform compatibility. The Lambda function is designed for efficiency, scalability, and secure file handling, utilizing cloud-native features to optimize performance"
              ghLink="https://github.com/CSYECLOUDNIHIL/serverless"
              /* demoLink="https://chatify-49.web.app/" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reciepe}
              isBlog={false}
              title="Reciepe-App"
              description="Developed a recipe application to help users discover, share, and save recipes. The app features an intuitive interface built with React.js and vanilla JavaScript. Leveraged third-party APIs for recipe data, eliminating the need to create a custom backend. Integrated features for users to upload images, rate recipes, and leave comments. Enhanced user experience with search functionality, filtering options, and real-time updates"
              ghLink="https://github.com/nihil27011996/receipe-app"
              /* demoLink="https://blogs.soumya-jit.tech/" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reminderapp}
              isBlog={false}
              title="Reminder-app using vanilla Javascript"
              description="Built a reminder application using vanilla Javascript to create edit store and delete Reminders"
              ghLink="https://github.com/nihil27011996/reminder-app"
              /* demoLink="https://editor.soumya-jit.tech/" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reminderapp}
              isBlog={false}
              title="Reminder App using MERN Stack"
              description="Built a Reminder MERN stack web application to create update delete."
              ghLink="https://github.com/nihil27011996/react-reminder-app"
              /* demoLink="https://plant49-ai.herokuapp.com/" */
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
