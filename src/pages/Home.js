import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { ShowMenu } from "../Components/ShowMenu";
import CreditPopup from "../Components/Popups";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <section id="problem-statment">
        <div
          className="d-flex flex-column bd-highlight mb-3"
          style={{
            backgroundImage:
              "url('https://timelinecovers.pro/facebook-cover/download/coffee-time-facebook-cover.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-fill align-self-center">
            <div className="container text-center">
              <h1 className="display-4 description">Problem Statement</h1>
            </div>
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <CreditPopup
              credit={
                <a id="photoCredit" href="https://unsplash.com/@karishea">
                  Photo by Laiba Afzal on Unsplash
                </a>
              }
            />
            <p className="showMenu-description">
              Organizing their menu selections, tracking down devoted customers,
              and managing dispersed orders are daily challenges for home-based
              female entrepreneurs like Farzana Aunty. Their economic potential
              is limited since they frequently encounter uncertainty, missing
              orders, and dissatisfied customers as a result of their limited
              exposure to digital tools and platforms.These ongoing issues not
              only cause daily stress but also restrict their ability to grow
              and run their business smoothly.
            </p>
          </div>
        </div>
      </section>
      <section id="problem-understanding">
        <div
          className="d-flex flex-column bd-highlight mb-3"
          style={{
            backgroundImage:
              "url('https://addcovers.com/covers/ky9pl1c15lm6wj.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-fill align-self-center">
            <div className="container text-center">
              <h1 className="display-4 description">Problem Understanding</h1>
            </div>
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <CreditPopup
              credit={
                <a id="photoCredit" href="https://unsplash.com/@karishea">
                  Photo by Laiba Afzal on Unsplash
                </a>
              }
            />
            <p className="showMenu-description">
              Farzana Aunty is not the only home-based female entrepreneur; many
              others, like her, are driven, talented, and hardworking, but they
              also find it difficult to figure out the complexities of internet
              communication. They lack the procedures necessary to arrange
              marketing materials, delivery timetables, and client information.
              WhatsApp messages, diaries, and memories power everything.
            </p>
            <p className="showMenu-description">
              Their best products (such as cakes, savory foods, or traditional
              sweets) suffer from by their lack of digital organization, which
              prevents them from expanding or effectively managing their firm.
              Platforms made for tech-savvy users underserve them.
            </p>
          </div>
        </div>
      </section>

      <section id="user-persona">
        <div
          className="d-flex flex-column bd-highlight mb-3"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/elevate-your-book-cover-designs-stunning-mockup-featuring-blank-book-cover-placed-textured-rustic-wooden-371563263.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-fill align-self-center">
            <div className="container text-center">
              <h1 className="display-4 description">User Persona</h1>
            </div>
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <CreditPopup
              credit={
                <a id="photoCredit" href="https://unsplash.com/@karishea">
                  Photo by Laiba Afzal on Unsplash
                </a>
              }
            />
            <p className="showMenu-description">
              Meet Farzana Aunty, the Real Persona. Her name is Farzana Rizvi,
              but she goes by Farzana Aunty in the community.
            </p>
            <p className="showMenu-description">
              <h6 style={{ fontSize: "24px" }}>Age:</h6>45
            </p>
            <p className="showMenu-description">
              <h6 style={{ fontSize: "24px" }}>Location:</h6> Karachi&#39;s
              Nazimabad
            </p>
            <p className="showMenu-description">
              <h6 style={{ fontSize: "24px" }}>Business:</h6> Farzana&#39;s
              Delight is a small cake business run from home.
            </p>
            <p className="showMenu-description">
              <h6 style={{ fontSize: "24px" }}>Tech Comfort:</h6> Only uses
              Facebook and WhatsApp; doesn&#39;t know how to use Trello or Canva
            </p>

            <h6 className="showMenu-description" style={{ fontSize: "26px" }}>
              Struggles:
            </h6>

            <p className="showMenu-description">
              1:Dispersed WhatsApp messages are used to send orders; these
              messages are frequently text, voice notes, or pictures.
            </p>
            <p className="showMenu-description">
              2:Uses a physical diary to record orders; occasionally, entries
              are lost or forgotten.
            </p>
            <p className="showMenu-description">
              3:No mechanism to monitor delivery schedules or identify recurring
              clients.
            </p>
            <p className="showMenu-description">
              4:Becomes overburdened during hectic times such as wedding months,
              birthdays, or Eid.
            </p>

            {/* <p className="showMenu-description">
              Farzana Aunty is not the only home-based female entrepreneur; many
              others, like her, are driven, talented, and hardworking, but they
              also find it difficult to figure out the complexities of internet
              communication. They lack the procedures necessary to arrange
              marketing materials, delivery timetables, and client information.
              WhatsApp messages, diaries, and memories power everything.
            </p> */}
          </div>
        </div>
      </section>

      <section id="story-board">
        <div
          style={{
            height: "1300px",
            backgroundColor: "",
            border: "1px solid #000",
            backgroundImage: "url('/story-board.jpg')",
          }}
        ></div>
      </section>
      <ShowMenu />
    </div>
  );
};
