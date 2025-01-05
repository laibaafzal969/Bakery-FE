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
        <h1 className="display-3 about-title">About Spice Whirls</h1>
        <p className="lead about-subtitle">
          A legacy of delicious handmade pastries and freshly ground coffee.
        </p>
      </div>
    </div>

    <div className="container about-content">
      <section className="about-history">
        <div className="row">
          <div className="col-md-6">
            <h2 className="display-4">Our Story</h2>
            <p>
              Founded in 2010, Spice Whirls started as a small local bakery with
              a simple mission: to craft the finest handmade pastries and
              desserts. With a passion for flavor and a love for tradition, we
              quickly became a staple in the community. Our founder, Sarah
              Miller, a culinary expert, envisioned a space where people could
              gather, indulge in freshly baked goods, and share in the joy of
              great food.
            </p>
            <p>
              Over the years, Spice Whirls has grown from a humble bakery to a
              popular destination for those seeking the perfect blend of
              tradition and innovation in every bite.
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
              At Spice Whirls, we pride ourselves on creating the highest
              quality baked goods. We use only the freshest ingredients sourced
              locally to create flavors that people can trust and savor. Here
              are some of the values that drive us:
            </p>
            <ul>
              <li>
                Commitment to Quality: We believe that every product should be
                as perfect as the last.
              </li>
              <li>
                Fresh Ingredients: We source the finest ingredients from local
                suppliers, ensuring the highest quality.
              </li>
              <li>
                Community First: Our bakery is more than just a place to buy
                pastries. It’s a place where people gather, relax, and connect.
              </li>
              <li>
                Innovation: While we honor tradition, we are always innovating
                to bring new, exciting flavors to our menu.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <h2 className="display-4 text-center">Our Mission</h2>
        <p className="lead text-center">
          To create delicious, freshly baked pastries and coffee that bring
          people together, and to share our passion for baking with the world.
        </p>
        <div className="row text-center mission-goals">
          <div className="col-md-4">
            <h4>1. Excellence in Every Bite</h4>
            <p>
              We strive to deliver the highest quality baked goods to our
              customers every single day.
            </p>
          </div>
          <div className="col-md-4">
            <h4>2. A Community Experience</h4>
            <p>
              We aim to create a welcoming atmosphere where customers feel like
              part of the Spice Whirls family.
            </p>
          </div>
          <div className="col-md-4">
            <h4>3. A Commitment to Sustainability</h4>
            <p>
              We prioritize sustainability, from sourcing ingredients to
              eco-friendly packaging options.
            </p>
          </div>
        </div>
      </section>

      {/* Replaced Our Products with Our Team */}
      <section className="about-team">
        <h2 className="display-4 text-center">Meet Our Team</h2>
        <p className="lead text-center">
          Behind every perfect pastry, there's a talented team. Meet the faces
          who bring Spice Whirls to life.
        </p>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ="
              alt="Sarah Miller - Founder"
              className="img-fluid team-photo"
            />
            <h4>Sarah Miller</h4>
            <p>Founder & Head Baker</p>
            <p>
              Sarah founded Spice Whirls in 2010 with a vision to share her love
              for baking with the world. She still oversees the baking process,
              ensuring every product meets the highest standard.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={pastryChef}
              alt="John Doe - Pastry Chef"
              className="img-fluid team-photo"
            />
            <h4>John Doe</h4>
            <p>Pastry Chef</p>
            <p>
              John’s creativity and passion for baking have helped elevate Spice
              Whirls’ dessert menu to new heights.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://static7.depositphotos.com/1298242/789/i/450/depositphotos_7894140-stock-photo-cheerful-hispanic-man-smiling-at.jpg"
              alt="Jane Smith - Coffee Specialist"
              className="img-fluid team-photo"
            />
            <h4>Joseph Smith</h4>
            <p>Coffee Specialist</p>
            <p>
              Joseph has a deep knowledge of coffee, ensuring that every cup
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
