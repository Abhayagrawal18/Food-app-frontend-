import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is food.</p>
            </div>
            <p className="mid">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              error. Perspiciatis voluptas quisquam deserunt beatae fugiat,
              omnis sunt repellat. Labore, accusamus non adipisci, laudantium
              minima eum officiis, perspiciatis amet ipsa consectetur in libero
              molestiae repellat enim illum obcaecati voluptate. Quam fuga ut
              voluptates delectus perspiciatis laborum adipisci iste explicabo
              tempora!
            </p>
            <Link to={"/"}>
              Explore Menu
              <span>
                 <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
