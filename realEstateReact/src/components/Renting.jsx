import './css/App.css'

function Renting() {
  const imageRenting = 'https://raw.githubusercontent.com/rakshithsantosh/realEstate/main/images/renting.avif'
  return (
    <>
      <section>
      <div className="renting" data-aos="zoom-in-up">
        <div className="renting-content">
          <h3>
            Bay Area Rentals Made Simple: Your Realtor, Your Peace of Mind
          </h3>
          <p>
            Renting in the dynamic Bay Area can be a daunting task, but with the
            guidance of an experienced realtor, the process becomes a breeze.
            Whether you're a newcomer to the region, seeking a temporary
            residence, or exploring different neighborhoods before making a
            long-term commitment, our dedicated team of real estate
            professionals is here to help. We understand the unique challenges
            of the Bay Area rental market, from competitive pricing to rapidly
            changing availability. Our realtors have a deep knowledge of the
            local rental landscape and can assist you in finding the perfect
            rental property that aligns with your lifestyle and budget. We'll
            streamline the search, handle negotiations, and ensure that your
            renting experience in the Bay Area is not only efficient but also
            tailored to your specific needs. Let us be your trusted partner in
            securing the ideal rental property amidst the Bay Area's diverse and
            vibrant communities. From assisting with lease agreements to
            providing insights into local amenities and neighborhood dynamics,
            we go the extra mile to make your transition to the Bay Area as
            smooth as possible. Discover the convenience and peace of mind that
            comes with having a dedicated realtor by your side as you embark on
            your Bay Area rental journey.
          </p>
        </div>
        <img src={imageRenting} alt="" />
      </div>
    </section>

    </>
  )
}

export default Renting
