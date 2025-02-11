import React from "react";

const ContactUsLeftCon: React.FC = () => {
  return (
    <div className="text-white max-w-md mx-auto space-y-6">
      <h2 className="text-4xl font-extrabold leading-tight">
        Let&apos;s Talk About Your{" "}
        <span className="text-[#FFB400]">Next Project</span>
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        We&apos;re ready to bring your ideas to life with passion and innovation. Let’s work together to create something amazing.
      </p>
      <ul className="space-y-3 text-base">
        {[
          { icon: "🌟", text: "2+ Years of Experience" },
          { icon: "💻", text: "Professional Web Developer" },
          { icon: "📱", text: "Mobile Apps Developer" },
          { icon: "⚙️", text: "Custom Solution Development" },
        ].map((item, index) => (
          <li key={index} className="flex items-center space-x-3 text-gray-300">
            <span className="text-2xl">{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUsLeftCon;
