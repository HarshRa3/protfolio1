import React from 'react';

const FooterRight: React.FC = () => {
  return (
    <div className="text-center lg:text-right">
      <h2
        className="text-xl font-semibold text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Contact
      </h2>
      <div
        className="mt-4 text-gray-400 space-y-2"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        {/* <p>123, Tech Street</p>
        <p>City, Country</p> */}
        <p>Phone: +91 79837 21010</p>
        <p>Email: harshrastogi396@gmail.com</p>
      </div>
    </div>
  );
};

export default FooterRight;
