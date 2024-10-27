// components/Hero.js
// import './styles/custom.css'

const Hero = () => {
  return (
    <main>
      <section id="index" className="hero">
          <h1>BuildMaster Construction</h1>
          <p>Providing professional construction solutions for all your building needs</p>
          <p>Expert management, reliable services, and innovative design-build solutions</p>
          <a href="#contactus" className="cta-button">Get a Free Quote</a>
      </section>
       <section id="services">
       <h2>Our Services</h2>
       <div className="services-grid">
           <div className="service-item">
               <i className="fas fa-hard-hat"></i>
               <h3>Expert Construction Management</h3>
               <p>We provide expert construction management services to ensure your projects are completed on time, within budget, and to the highest quality standards.</p>
           </div>
           <div className="service-item">
               <i className="fa-solid fa-hammer"></i>
               <h3>Reliable Construction Services</h3>
               <p>We offer a wide range of construction services, from new builds to renovations and repairs, to meet your needs.</p>
           </div>
           <div className="service-item">
               <i className="fa-solid fa-building"></i>
               <h3>Innovative Design-Build Solutions</h3>
               <p>We combine design and construction services to deliver innovative and cost-effective solutions for your projects.</p>
           </div>
       </div>
   </section>
   </main>
  );
};
export default Hero;
