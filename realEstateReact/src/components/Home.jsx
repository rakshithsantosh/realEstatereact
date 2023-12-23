import './css/App.css'

function Home() {
  const houseOne = 'https://raw.githubusercontent.com/rakshithsantosh/realEstate/main/images/house-1.avif'
  const humanimg = 'https://raw.githubusercontent.com/rakshithsantosh/realEstate/main/images/humanimg.avif'
  const homeOne = 'https://raw.githubusercontent.com/rakshithsantosh/realEstate/main/images/home1.avif'
  return (
    <>
      <section className="home">
      <div className="home-text" data-aos="zoom-in-up">
        <h1>Your House is Waiting For You!</h1>
        <p>
          Your dream home is eagerly awaiting your arrival in the Bay Area. It's
          more than bricks and mortar; it's where your life's chapters unfold.
          Whether it's a cozy cottage, a modern urban retreat, or a spacious
          family haven, we're here to guide you on this exciting journey. Let's
          find the perfect place that truly feels like home in the Bay Area –
          your house is waiting for you!
        </p>

        <div className="h-search">
          <form>
            <input
              type="search"
              placeholder="Search by location... "
              className="search-input"
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
      <div className="home-img" data-aos="zoom-in-up">
        <img src={houseOne} alt="" />
      </div>
    </section>


    <section className="intro">
      <div className="intro-img" data-aos="zoom-in-up">
        <img src={humanimg} alt="" />
      </div>
      <div className="intro-text" data-aos="zoom-in-up">
        <h1>Ravi Pavagada</h1>
        <p>
          Welcome to the Bay Area, where opportunities abound, and dreams find
          their perfect home. If you're embarking on a real estate journey in
          this vibrant and dynamic region, allow me to introduce you to your
          guiding light: Ravi, your trusted Realtor. With a deep-rooted passion
          for real estate and an unwavering commitment to your success, Ravi is
          your dedicated partner in navigating the diverse and ever-evolving Bay
          Area housing market. Whether you're a first-time homebuyer, a seasoned
          investor, or looking to sell your property, Ravi's expertise and local
          knowledge are your invaluable assets in achieving your real estate
          goals.
        </p>
        <p>
          Ravi brings a unique blend of professionalism, integrity, and a
          personalized approach to each client relationship. His comprehensive
          understanding of the Bay Area's neighborhoods, market trends, and
          property values ensures that you'll make informed decisions every step
          of the way.
        </p>
      </div>
    </section>

    <section className="about">
      <div className="about-text" data-aos="zoom-in-up">
        <h2>We Help People To Find Homes</h2>
        <p>
          In the diverse and bustling Bay Area, our mission is simple yet
          profound: We help people find homes. Our commitment extends beyond
          just real estate transactions; it's about connecting individuals and
          families with the perfect place to call home in one of the most
          sought-after regions in the world. With an intimate knowledge of the
          Bay Area's neighborhoods, communities, and the unique lifestyle they
          offer, we serve as guides and advocates for our clients. Whether
          you're searching for a cozy city apartment with breathtaking views of
          the San Francisco skyline, a tranquil suburban retreat in Silicon
          Valley, or a wine country escape surrounded by vineyards, we're here
          to make your homeownership dreams a reality. Let us be your trusted
          partner in this exciting journey of finding not just a house, but a
          true home in the heart of the Bay Area.
        </p>
      </div>
      <div className="about-img" data-aos="zoom-in-up">
        <img src={homeOne} alt="" />
      </div>
    </section>
    </>
  )
}

export default Home
