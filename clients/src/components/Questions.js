const Questions = () => {
    return (
        <section id="questions" className="py-5">
            <div className="container">
                <h1 className="display-5"><i className="far fa-question-circle"></i> Got Questions</h1>
                <hr className="mb-5" />
                <div className="row accordion accordion-flush" id="accordionFlushExample">
                    <div className="col-12 col-md-6">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                >
                                    How does it work?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne"
                                data-mdb-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <p>It's simple!</p>
                                    <p>We've worked hard to make it as easy as can be for you. To find out the value for your device, just follow these steps:</p>
                                    <ol>
                                        <li>
                                            <strong> Find your item on NerdGearz and get an offer</strong>
                                            <p>If the item is not on our website, unfortunately we do not accept it. Please do NOT select an item if it does not exactly match your item exactly, we will not be able to offer you anything for it.</p>
                                            <p>Once you've found your item, let us know what condition its in by answering a few questions. Please remember the rating of "Flawless" would be for an item which appears and functions as if it has never been used.</p>
                                            <p>If you like our offer just complete the checkout process and tell us how you'd like to get paid: Check, PayPal or Amazon.com gift card.</p>
                                        </li>
                                        <li>
                                            <strong>Send us your device</strong>
                                            <p>Shipping is FREE! Our offer is good for 30 days but the faster you send it in, the quicker you'll get paid.</p>
                                        </li>
                                        <li>
                                            <strong>Get paid</strong>
                                            <p>Once we receive your box, the NerdGearz team will check out the contents and pay you quickly.</p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                >
                                    What condition is the item in?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo"
                                data-mdb-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    Each listing includes a section that describes the cosmetic and functional condition of the item. We rate the cosmetic condition of the item as "Excellent", "Good", "Fair". While each device may have varying cosmetic conditions, we guarantee that each phone is in perfectly functional working condition.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                >
                                    Is my personal information safe with NerdGearz?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree"
                                data-mdb-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <p>NerdGearz never sells or shares any of your personal information unless you have specifically opted in to receive offers from our partners.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#flush-collapseFour"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseFour"
                                >
                                    What happens to all the devices NerdGearz buys?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFour"
                                data-mdb-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <p>NerdGearz believes in reusing products first and recycling when an item no longer has any value. The idea is to keep working products in use as long as possible, extending their life, preventing e-Waste, and ensuring you receive value for the electronics you don't need anymore. It's an idea we call reCommerce.</p>
                                    <p>Once we have checked out your item and payment has been sent, we move the item into one of a few directions depending on what it is and what condition it's in.</p>
                                    <p>Many of the products sent to NerdGearz still have plenty of life left in them so we find them a new, happy home. We do this by selling many of the items through our NerdGearz store. This is the essence of reCommerce - you sell your unwanted gadgets to us and we extend their life by selling them to someone who wants it. As a result, fewer items get thrown to the landfills or collect dust in a drawer, and fewer people buy brand new gadgets since used ones in great condition are available in the market.</p>
                                    <p>Some products that we receive in large quantity are sold to wholesale partners, who aggregate these items and resell them via their own networks globally. A smaller portion of products that are sent to us are at the end of their useful life and are sent to domestic recycling partners who abide by the highest standards.</p>
                                    <p>The idea is to optimize where to move things in order to get the best return and therefore offer the best value possible to our customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFive">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#flush-collapseFive"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseFive"
                                >
                                    How long does it take to receive my payment?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFive"
                                data-mdb-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <p>Once we receive your item</p>
                                    <p>It should only take a day or two for it to be processed. (It depends on the time of day it gets to us) If the model and condition are confirmed during the inspection, the payment is processed within 3-5 business days.</p>
                                    <p>Once Payment is Issued</p>
                                    <p>Amazon and PayPal are the fastest ways to get paid, they are sent out electronically and should arrive within 24-48 hours of the payment being processed.</p>
                                    <p>Checks are shipped via USPS first className and typically take 5 to 10 days to arrive once the payment is processed.</p>
                                    <p>An email will always be sent when a payment is processed and will include details regarding when you can expect to receive it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingSix">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#flush-collapseSix"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseSix"
                                >
                                    I can't find my device on NerdGearz, what should I do?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingSix"
                                data-mdb-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <p>If your model is not on our website, then unfortunately we do not accept it for trade.</p>
                                    <p>If we receive a different model than what you indicated in your transaction, a revised offer will be sent for as little as $0.00. As with all our offers, if the revised offer does not meet your satisfaction we will return your device - free of charge or offer to responsibly recycle it for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions;
