import Navbar from "../components/navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper py-10">
        <h1 className="text-heading-1 text-center">Contact Us</h1>
        <p className="text-light-90 text-center mt-4 max-w-lg mx-auto">
          Get in touch with us for any inquiries or to schedule a property
          visit.
        </p>
      </div>
    </>
  );
};

export default Contact;
