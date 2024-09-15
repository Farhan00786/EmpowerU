

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome, user</p>
              <h1>Welcome to EmpowerU</h1>
              <p>
              Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
              Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
              Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
              Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Reliability: Count on us to be there when you need us We're commited to ensuring you IT environment is reliable and available 24/7.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>5+</h2>
                <p>Companies Register </p>
            </div>
            <div className="div1">
                <h2>50+</h2>
                <p>Project Done</p>
            </div>
            <div className="div1">
                <h2>200+</h2>
                <p>Happy Clients</p>
            </div>
            <div className="div1">
                <h2>600+</h2>
                <p>Youtube Videos</p>
            </div>
        </div>
      </section>
    </>
  );
};