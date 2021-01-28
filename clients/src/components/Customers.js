const Customers = () => {
    return (
        <section id="our-customer">
            <div className="container my-5">
                <h1 className="display-5"><i className="far fa-comments"></i> Our Customers</h1>
                <hr className="mb-5" />
                <div className="row">
                    <div className="col-12 col-md-4">
                        <figure>
                            <blockquote className="blockquote">
                                <div
                                    className="avatar w-100 white d-flex justify-content-center align-items-center"
                                >
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                        className="img-fluid rounded-circle z-depth-1"
                                    />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    ante.
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Alan Turing <cite title="Source Title">from Marysville, OH</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-md-4">
                        <figure>
                            <blockquote className="blockquote">
                                <div
                                    className="avatar w-100 white d-flex justify-content-center align-items-center"
                                >
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg"
                                        className="img-fluid rounded-circle z-depth-1"
                                    />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    ante.
        </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Joanna Thompson <cite title="Source Title">from Sante Fe, OH</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-md-4">
                        <figure>
                            <blockquote className="blockquote">
                                <div
                                    className="avatar w-100 white d-flex justify-content-center align-items-center"
                                >
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                        className="img-fluid rounded-circle z-depth-1"
                                    />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    ante.
      </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Billy Turner <cite title="Source Title">from Oxnard, CA</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers;
