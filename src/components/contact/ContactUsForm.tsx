import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface ContactFormData {
  Name: string;
  Email: string;
  Phone: string;
  Subject: string;
  Message: string;
}

type ContactFormField = "Name" | "Email" | "Phone" | "Subject" | "Message";

interface ContactFieldArrayTypes {
  name: ContactFormField;
  type: string;
  required: boolean;
}

const contactFieldArray: ContactFieldArrayTypes[] = [
  { name: "Name", type: "text", required: true },
  { name: "Email", type: "email", required: true },
  { name: "Phone", type: "tel", required: true },
  { name: "Subject", type: "text", required: true },
  { name: "Message", type: "textarea", required: true },
];

const ContactUsForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (values) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await axios.post("https://formspree.io/f/mwpvnowo", values, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setMessage("Thank you! Your message has been sent.");
        reset({
          Name: "",
          Email: "",
          Phone: "",
          Subject: "",
          Message: "",
        }); // Reset the form after successful submission
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to send the message. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-gradient-to-r from-[#0072ff66] to-[#886a42] p-6 rounded-lg shadow-xl">
      {contactFieldArray.map((field, index) => {
        const validation = field.required ? { required: `${field.name} is required` } : {};

        return (
          <div className="h-[85px] w-[100%]" key={index}>
            {field.type === "textarea" ? (
              <textarea
                className="p-4 rounded-lg w-full bg-white text-[#333] placeholder:text-[#888] border-2 border-[#0072ff] focus:outline-none focus:ring-2 focus:ring-[#00c6ff] transition duration-300 shadow-md"
                {...register(field.name, validation)}
                placeholder={field.name}
              />
            ) : (
              <input
                type={field.type}
                className="p-4 rounded-lg w-full bg-white text-[#333] placeholder:text-[#888] border-2 border-[#0072ff] focus:outline-none focus:ring-2 focus:ring-[#00c6ff] transition duration-300 shadow-md"
                {...register(field.name, validation)}
                placeholder={field.name}
              />
            )}
            {errors[field.name] && <p className="text-red-500 pl-2 text-sm mt-1">{errors[field.name]?.message}</p>}
          </div>
        );
      })}

      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        className={`mt-6 p-4 text-white rounded-lg shadow-lg transition-all ease-in duration-500 ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r to-[#0072ff66] from-[#886a42] hover:from-[#005bb5] hover:to-[#704c27] hover:shadow-xl"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {message && <p className="mt-4 text-center text-lg font-semibold text-white">{message}</p>}
    </div>
  );
};

export default ContactUsForm;
