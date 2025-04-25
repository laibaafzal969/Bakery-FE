import React from "react";
import "./about.css";
import CreditPopup from "../Components/Popups";
import pastryChef from "../img/pastryChef.jpg";

const description =
  "Featuring delicious handmade pastries and freshly ground coffee";

const About = () => (
  <div id="about">
    <div className="about-banner">
      <div className="container text-center about-header">
        <h1 className="display-3 about-title">About Bake Connect</h1>
        <p className="lead about-subtitle">
          A legacy of delicious handmade cakes, pastries and freshly ground
          coffee.
        </p>
      </div>
    </div>

    <div className="container about-content">
      <section className="about-history">
        <div className="row">
          <div className="col-md-6">
            <h2 className="display-4">Our Story</h2>
            <p>
              Established in 2025, BakeConnect started out as a straightforward
              concept motivated by the daily challenges faced by gifted women
              like Farzana Aunty, who worked from home as bakers, handling
              orders with handwritten journals and sporadic WhatsApp messages.
              Our goal was very clear: to give local female entrepreneurs access
              to a tool that is not only digital but also specifically made for
              them. We developed a platform that speaks to Pakistani home
              bakers' cultural and technological constraints in a way that is
              both emotionally and literally relevant to them. With features
              like customer loyalty monitoring, audio-based instructions, and
              simple Urdu-English navigation, BakeConnect evolved from an app to
              a growth partner.
            </p>
            <p>
              Today, one delicious dish, one devoted client, and one
              accomplishment at a time, BakeConnect enables home bakers to turn
              their passion for baking into successful microbusinesses.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://us.images.westend61.de/0001404795pw/beautiful-woman-drinking-coffee-at-home-EBBF00290.jpg"
              alt="Bakery Image"
              className="img-fluid about-image"
            />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/07/0a/a6/3c/the-baker-s-coffee-shop.jpg"
              alt="Freshly baked pastries"
              className="img-fluid about-image"
            />
          </div>
          <div className="col-md-6">
            <h2 className="display-4">Our Values</h2>
            <p>
              At BakeConnect, we stand by home bakers that value your health,
              happiness, and trust more than just delicious food.
            </p>
            <ul>
              <li>
                Safe and Fresh:- Fresh, home-sourced foods and hygienic cooking
                techniques are used to make every product; there are no hazards
                or preservatives.
              </li>
              <li>
                Reliable and High-Quality:- Each order is carefully processed.
                Consumers are confident that they will always receive precisely
                what they want, on schedule.
              </li>
              <li>
                Love Baked:- It's a passion rather than just a business. Every
                product embodies the baker's values, history, and aspirations
                for development.
              </li>
              <li>
                Innovation:- While we honor tradition, we are always innovating
                to bring new, exciting flavors to our menu.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <h2 className="display-4 text-center">Our Mission</h2>
        <p className="lead text-center">
          To empower women bakers who work from home by streamlining their
          business processes, fostering community relationships, and assisting
          them in become more self-assured one order at a time.
        </p>
        <div className="row text-center mission-goals">
          <div className="col-md-4">
            <h4>1. Every Step Is Simple</h4>
            <p>
              Even for bakers who are not tech-savvy, we want order management,
              customer monitoring, and menu sharing to be simple.
            </p>
          </div>
          <div className="col-md-4">
            <h4>2. Community Empowerment</h4>
            <p>
              We create a network of support so that home bakers can feel
              appreciated, encouraged, and a part of the expanding local baking
              community.
            </p>
          </div>
          <div className="col-md-4">
            <h4>3. Development with Honesty</h4>
            <p>
              Without sacrificing quality, we support ethical, fresh, and safe
              baking methods while empowering women to transform their passion
              into a steady source of income.
            </p>
          </div>
        </div>
      </section>

      {/* Replaced Our Products with Our Team */}
      <section className="about-team">
        <h2 className="display-4 text-center">Meet Our Team</h2>
        <p className="lead text-center">
          Behind every perfect pastry, there's a talented team. Meet the faces
          who bring Bake Connect to life.
        </p>
        <div className="row">
          <div className="col-md-4">
            <img
              src="/farzana.jpg"
              alt="Sarah Miller - Founder"
              className="img-fluid team-photo"
            />
            <h4>Mr's Farzana</h4>
            <p>Founder & Head Baker</p>
            <p>
              Farzana founded BakeConnect in 2025 with a vision to share her
              love for baking with the world. She still oversees the baking
              process, ensuring every product meets the highest standard.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={"/laiba.jpg"}
              alt="John Doe - Pastry Chef"
              className="img-fluid team-photo"
            />
            <h4>Laiba Afzal</h4>
            <p>Pastry / Cake Chef</p>
            <p>
              Laiba creativity and passion for baking have helped elevate
              BakeConnect dessert menu to new heights.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="/zoella.jpg"
              alt="Jane Smith - Coffee Specialist"
              className="img-fluid team-photo"
            />
            <h4>Zoella Malik</h4>
            <p>Coffee Specialist</p>
            <p>
              Zoella has a deep knowledge of coffee, ensuring that every cup
              served is perfectly brewed.
            </p>
          </div>
        </div>
      </section>

      {/* Add Fun Facts Section */}
      <section className="about-fun-facts">
        <h2 className="display-4 text-center">Fun Facts</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h4>1. Over 100,000 Pastries Sold!</h4>
            <p>
              We’ve baked and sold over 100,000 pastries since we opened our
              doors!
            </p>
          </div>
          <div className="col-md-4">
            <h4>2. Award-Winning Coffee</h4>
            <p>
              Our coffee has been recognized by local experts as the best in
              town!
            </p>
          </div>
          <div className="col-md-4">
            <h4>3. Famous for Our Chocolate Croissants</h4>
            <p>
              Our signature chocolate croissants have been featured in food
              magazines and blogs.
            </p>
          </div>
        </div>
      </section>

      <section className="about-credit">
        <div className="text-center">
          <CreditPopup
            credit={
              <a
                id="photoCredit"
                href="https://unsplash.com/@karishea"
                target="_blank"
                rel="noopener noreferrer"
              >
                Photo by Kari Shea on Unsplash
              </a>
            }
          />
        </div>
      </section>
    </div>
  </div>
);

export default About;
