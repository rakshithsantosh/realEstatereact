import './css/App.css'

function Footer() {
    const imageurl = 'https://github.com/rakshithsantosh/realEstate/blob/main/images/logohome.png?raw=true'
  
  return (
    <>
       <section className="contact">
      <div className="contact-content">
        <img src={imageurl} alt="" />
        <div className="contact-content-text">
          <p>
            Your house is not just a dwelling; it's a reflection of you, and
            it's waiting for you to make it your own, right here in the Bay
            Area.
          </p>
          <div id="icons">
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-instagram-alt"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-youtube"></i></a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer
