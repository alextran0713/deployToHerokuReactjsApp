const Features = () => {
    return (
        <section id="features" className="bg-dark py-4">
            <div className="container text-white">
                <div className="row py-md-5">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="font-weight-bold mb-3">
                            <i className="fas fa-receipt"></i> Get an offer
                        </h4>
                        <p className=" text-white">
                            Select your device model and answer a few questions to receive your trade-in quote.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="font-weight-bold mb-3">
                            <i className="fas fa-box"></i> Ship it free
                        </h4>
                        <p className="text-white">
                            We’ll send you prepaid shipping supplies so you can send in your device at no cost.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="font-weight-bold mb-3">
                            <i className="fas fa-donate"></i> Get Paid Easily
                        </h4>
                        <p className="text-white">
                            Especially, you'll get 10% more when you choose to get paid by NerdGearz's store credit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
