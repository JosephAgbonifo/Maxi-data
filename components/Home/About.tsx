export default function About() {
  return (
    <div className="container p-16 lg:p-4 mb-20">
      <h1 className="text-4xl text-center underline">About Us</h1>
      <div className="max-w-2xl mx-auto mt-4  p-5 leading-8">
        <p>
          At Maxi Data, we make bill payments seamless, fast, and reliable.
          Whether you need mobile data, airtime, or cable TV subscriptions,
          we’ve got you covered with instant transactions and a user-friendly
          platform. Why Choose Maxi Data?
          <ul>
            <li className="before:content-['✅'] before:pr-5">
              Fast & Secure Payments - Get your airtime, data, or TV
              subscriptions processed instantly.
            </li>
            <li className="before:content-['✅'] before:pr-5">
              Affordable Prices - Enjoy competitive rates with no hidden
              charges.
            </li>
            <li className="before:content-['✅'] before:pr-5">
              Multiple Payment Options - Pay via card, bank transfer, or wallet.
            </li>
            <li className="before:content-['✅'] before:pr-5">
              Reliable Customer Support - We’re here to assist you 24/7. Join
            </li>
          </ul>
          Join thousands of satisfied users who trust Maxi Data for their daily
          transactions. Stay connected, stay entertained—with ease!
        </p>
      </div>
    </div>
  );
}
