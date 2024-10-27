// components/Services.js
const Services = () => {
    return (
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
    );
};

export default Services;
