const Slide = () => {
    return (
        <section id="navtwopages" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div
                            className="bg-image ripple"
                            data-mdb-ripple-color="light">
                            <img
                                src="img/buy-btn.jpg"
                                className="w-100" />
                            <a href="https://store.nerdgearz.com">
                                <div className="mask">
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <h1 className="text-white mb-0">BUY</h1>
                                        <h2 className="text-white mb-0"><br />SMART</h2>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ background: "linear-gradient(45deg, rgba(29, 236, 197, 0.5),rgba(91, 14, 214, 0.5) 100%)" }}>
                                        <div className="d-flex justify-content-center align-items-center h-100">
                                            <h1 className="text-white mb-0">BUY</h1>
                                            <h2 className="text-white mb-0"><br />SMART</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="col-6">
                        <div
                            className="bg-image ripple"
                            data-mdb-ripple-color="light">
                            <img
                                src="img/sell-btn.jpg"
                                className="w-100" />
                            <a href="#startnow">
                                <div className="mask">
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <h1 className="text-white mb-0">SELL</h1>
                                        <h2 className="text-white mb-0"><br />SMART</h2>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ background: "linear-gradient(45deg, rgba(29, 236, 197, 0.5),rgba(91, 14, 214, 0.5) 100%)" }}>
                                        <div className="d-flex justify-content-center align-items-center h-100">
                                            <h1 className="text-white mb-0">SELL</h1>
                                            <h2 className="text-white mb-0"><br />SMART</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slide;
