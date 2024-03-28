// Step 1: Import React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import {
  jrowah,
  aeso,
  intro,
  skillset,
  links,
} from "../styles/about.module.css";
import Skills from "../components/skills";
import Footer from "../components/footer";
import SocialFollow from "../components/socialFollow";
import { container } from "../styles/layout.module.css";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main className={container}>
      <h1 class="text-black text-2xl md:text-3xl lg:text-5xl mt-5 mb-2 md:mb-4">
        James Rowa
      </h1>
      <h2 class="text-lg md:text-xl lg:text-3xl mb-1 lg:mb-2">
        Software Developer
      </h2>
      <hr />
      <section className={intro}>
        <div className={aeso}>
          <p class="text-gray-700 font-serif text-lg md:text-xl lg:text-2xl">
            Self-taught software developer proficient in OOP and functional
            programming with Elixir background, currently mastering Python.
            <br />
            Holds a degree in Biochemistry and a Post Graduate Diploma in
            Education focusing on Biology and Chemistry.
            <br />
            Also a technical writer on{" "}
            <a
              className={links}
              href="https://medium.com/@jrowah"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>{" "}
            and on{" "}
            <a className={links} href="/blog">
              My Blog
            </a>
            . <br />
            Check out my{" "}
            <a className={links} href="/projects">
              Projects
            </a>
            . <br />
          </p>
          <br />
          <p class="text-lg md:text-xl lg:text-2xl">
            See my{" "}
            <a className={links} href="/journey">
              Journey
            </a>
          </p>
        </div>
        <StaticImage
          alt="Jrowah's picture"
          src="../images/devjay.png"
          className={jrowah}
        />
      </section>
      <hr />
      <div className={skillset}>
        <Skills />
        <SocialFollow />
      </div>
      <Footer>
        <ul id="copyright">
          <li>
            Copyright &copy; Jrowah. All rights reserved. <span>2023</span>{" "}
            <span>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Terms
              </a>
            </span>
          </li>
        </ul>
      </Footer>
    </main>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
