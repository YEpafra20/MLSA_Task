/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";


/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am Yeddula Epafra born in 15/03/2002. Home town at Nandyal Districit, Andhra Pradesh, India. My Education at Sreesaila high school, Nandyal-10th class(July 2018-April 2019), Intermediate(11 + 12) at Rao's Junior College IC campus, Nandyal from June 2019 - April 2021 and My Bachelor's in Electronics and communication from KVSRIT, Jawaharlal Nehru Technological University Anantapur (Nov 2021 - April 2025). Having skills on machine learning, HTML, Fast learner, Team learder, Data Engineer, Network security. I've done certifications on Cloud computing- NPTEL, Machine Learning, Robotics - Teachnook, Data Engineering- EduSkills. I'm did the projects on UlUX-Top 50 in Guvi Skill A Thon, Web Development-CodeClouse and machine learning- Teachnook. Also Ethical hacking and Cybersecurity leading enthusiast. Now leading MLSA society in my university. My aim to get full benefit from this program to get skills in the field of my interest and to help my peers get those skills.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Top 50 in Guvi Skill A Thon",
  "Frontend developer",
  "UI&UX",
  "Intern -Cloud computing/ML/NetworkSecurity", 
  "Ethical hacking & Cybersecurity Enthusiast",
  ];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm a self-taught programmer with a B.Tech in Electronics & Communication Engineering. My skills include UI/UX design, Frontend developer. As a Microsoft Student Ambassador, I engage with the tech community. I also run a YouTube channel, Career Helpline, offering tech career insights.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
