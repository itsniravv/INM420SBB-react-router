import Header from "../components/Header";
export default function About() {
  return (
    <div>
      <Header />
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur facilis corrupti fuga odio. Ea eos sit veritatis
                rerum temporibus modi nobis minus, recusandae beatae. Sint minus
                quis laboriosam voluptates reiciendis..
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
