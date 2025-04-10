import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail(""); // Clear input after submission
  };

  return (
    <section className="section-box box-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <h3 className="color-white">
              Subscribe & Get <span className="color-warning">10%</span>{" "}
              Discount
            </h3>
            <p className="font-lg color-white">
              Get E-mail updates about our latest product and{" "}
              <span className="font-lg-bold">special offers.</span>
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="box-form-newsletter mt-15">
              <form className="form-newsletter" onSubmit={handleSubmit}>
                <input
                  className="input-newsletter font-xs"
                  type="email"
                  value={email}
                  placeholder="Your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-brand-2" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
