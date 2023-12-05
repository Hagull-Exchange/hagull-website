import React from "react";
import Footer from "../../components/Footer/Footer";
import Team from "../../assets/team.jpeg";
import "./About.css";
import Ourvision from "../../assets/team1.jpeg";
import Ourmission from "../../assets/team2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import KachiPic from "../../assets/kachi.jpeg";
import ChimdiaPic from "../../assets/chimdia.png";
import Patrick from "../../assets/patrick.jpeg";
import JenniferPic from "../../assets/jennifer.jpeg"
import StephenPic from "../../assets/stephen.jpeg"
import { motion } from "framer-motion";


const About = () => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 1.5 } },
  };

  const teamCardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.5 } },
  };

  const overlayVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.4, // 0.4 seconds
        ease: "easeInOut", // ease-in-out transition
      },
    },
  };

  const iconVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="about">
      <div className="about-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>About Us</h2>
              <p>
                We are dedicated to providing a seamless platform that connects
                currency buyers and sellers from around the world.{" "}
                <span>Hagull</span> is your best currency exchange platform with
                you in mind, we think of parents paying tuition fees abroad, the
                businessman trading goods, the student that needs to pay bills
                and shop foreign goods at affordable rate, the normal African
                who finds it difficult to access foreign currencies. We are{" "}
                <span>HAGULL,</span> we are you.
              </p>
            </div>
            <div className="col-md-7 images">
              <div className="img-group mt-5">
                <img src={Team} alt="Team" className="FirstImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vision-section mt-5">
        <div className="container">
          <div className="row vision">
            <div className="col-md-6">
              <img src={Ourvision} alt="Ourvision" className="Ourvision mt-5" />
            </div>
            <div className="col-md-6">
              <h5>Our Vision</h5>
              <p>
                Hagull wants to ensure that your funds are at your fingertips
                whenever you need them at an affordable rate anywhere you go.
              </p>
            </div>
          </div>
          <div className="row vision">
            <div className="col-md-6">
              <h5>Our Mission</h5>
              <p>
                To make it easy for anyone to have access to any currency
                anywhere at an affordable rate.
              </p>
            </div>
            <div className="col-md-6">
              <img src={Ourmission} alt="Logo" className="Ourmission" />
            </div>
          </div>
        </div>
      </div>

      <div className="value mt-5">
        <div className="header-container">
          <h4 className="small-header">Our Core Values</h4>
          <h1 className="big-header">Hagull Culture</h1>
        </div>

        <div className="container">
          <div className="row justify-content-center values-row">
            <div className="col-md-4">
              <div className="value-card  text-center mb-3">
                <div className="card-body">
                  <div className="letter">
                    <h1>H</h1>
                  </div>
                  <h5 className="card-title pb-3">Honesty</h5>
                  <p className="card-text">
                    Being honest and transparent with our customers is something
                    we pursue as a company. We do this by having a clear and an
                    effectively communication between our users and our product.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card  text-center mb-3">
                <div className="card-body">
                  <div className="letter">
                    <h1>A</h1>
                  </div>
                  <h5 className="card-title pb-3">Adaptability</h5>
                  <p className="card-text">
                    We understand that times will change and as a company we are
                    quick to adapt in other to able to provide our customers a
                    best solution. We have an open mind to allow us to seize new
                    opportunities and overcome challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card  text-center mb-3">
                <div className="card-body">
                  <div className="letter">
                    <h1>G</h1>
                  </div>
                  <h5 className="card-title pb-3">Grit</h5>
                  <p className="card-text">
                    We have an unwavering pursuit of excellence. This underpins
                    our commitment to our users and our determination to provide
                    the best services and solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center values-row">
            <div className="col-md-4">
              <div className="value-card  text-center mb-3">
                <div className="card-body">
                  <div className="letter">
                    <h1>U</h1>
                  </div>
                  <h5 className="card-title pb-3">User Focusedy</h5>
                  <p className="card-text">
                    Users and the community are the reason why we exist. Our job
                    is to provide the best solutions for our users while making
                    sure they are protected. This is why our users interest is
                    paramount.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card  text-center mb-3">
                <div className="card-body">
                  <div className="letter">
                    <h1>L</h1>
                  </div>
                  <h5 className="card-title pb-3">Listen</h5>
                  <p className="card-text">
                    We are always listening to our users. We are open to every
                    feedback in other to better the experiences of our users on
                    our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card  text-center mb-3">
                <div className="card-body">
                  <div className="letter">
                    <h1>L</h1>
                  </div>
                  <h5 className="card-title pb-3">Learning</h5>
                  <p className="card-text">
                    We believe learning is fundamental to human flourishing. As
                    a company we understand and prioritize personal growth as
                    much as we do to team growth. We are always innovating,
                    looking for new ways to make our users shine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="team mt-5">
        <div className="container">
          <motion.h1
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-center pt-3"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            We are proud to have a dedicated and talented team of professionals
            revolutionizing the currency marketplace industry.
          </motion.p>

          <div className="container d-flex align-items-center justify-content-center ">
            <div className="row mt-5">
              <div className="col-md-4">
                <motion.div
                  className="team-card"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <img src={KachiPic} alt="Team Member 1" />
                  <motion.div
                    className="overlay linkedin"
                    initial="hidden"
                    animate="visible"
                    variants={overlayVariants}
                  >
                    <a
                      href="https://www.linkedin.com/in/onyedikachi-shedrach-erugo-b1bab3152/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div variants={iconVariants}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </motion.div>
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-center mt-3 mb-3 team-desc"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <h6>Onyedikachi Shedrach Erugo</h6>
                  <p className="text-center">co-CEO</p>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  className="team-card"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <img src={ChimdiaPic} alt="Team Member 2" />
                  <motion.div
                    className="overlay linkedin"
                    initial="hidden"
                    animate="visible"
                    variants={overlayVariants}
                  >
                    <a href="http://linkedin.com/in/shedrack-erugo-4465b223b">
                      <motion.div variants={iconVariants}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </motion.div>
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-center mt-3 mb-3 team-desc"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <h6>Shedrack Akuchukwu Erugo</h6>
                  <p className="text-center">co-CEO / C O O</p>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  className="team-card"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <img src={Patrick} alt="Team Member 3" />
                  <motion.div
                    className="overlay linkedin"
                    initial="hidden"
                    animate="visible"
                    variants={overlayVariants}
                  >
                    <a href="https://www.linkedin.com/in/patrickaziken">
                      <motion.div variants={iconVariants}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </motion.div>
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-center mt-3 mb-3 team-desc"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <h6>Patrick Aziken</h6>
                  <p className="text-center">C T O</p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="container d-flex align-items-center justify-content-center ">
            <div className="row ">
              <div className="col-md-4">
                <motion.div
                  className="team-card"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <img src={JenniferPic} alt="Team Member 4" />
                  <motion.div
                    className="overlay linkedin"
                    initial="hidden"
                    animate="visible"
                    variants={overlayVariants}
                  >
                    <a
                      href="https://www.linkedin.com/in/jennifer-ujugo-atong-pmp-81907693?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div variants={iconVariants}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </motion.div>
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-center mt-3 mb-3 team-desc"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <h6>Atong Jennifer Ujugo</h6>
                  <p className="text-center">Product Manager</p>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  className="team-card"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <img src={StephenPic} alt="Team Member 5" />
                  <motion.div
                    className="overlay linkedin"
                    initial="hidden"
                    animate="visible"
                    variants={overlayVariants}
                  >
                    <a href="http://www.linkedin.com/in/stephen-adewale-faleti">
                      <motion.div variants={iconVariants}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </motion.div>
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-center mt-3 mb-3 team-desc"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <h6>Faleti Stephen Adewale</h6>
                  <p className="text-center">Operations</p>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  className="team-card"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <img src={Patrick} alt="Team Member 6" />
                  <motion.div
                    className="overlay linkedin"
                    initial="hidden"
                    animate="visible"
                    variants={overlayVariants}
                  >
                    <a href="https://www.linkedin.com/in/patrickaziken">
                      <motion.div variants={iconVariants}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </motion.div>
                    </a>
                  </motion.div>
                </motion.div>

                {/* <motion.div
                  className="text-center mt-3 mb-3 team-desc"
                  initial="hidden"
                  animate="visible"
                  variants={teamCardVariants}
                >
                  <h6>Patrick Aziken</h6>
                  <p className="text-center">C T O</p>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
