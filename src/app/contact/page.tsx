import ContactCon from '@/components/contact/ContactCon';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Contact | Harsh Rastogi",
  description: "Get in touch with Harsh Rastogi for full-stack web and mobile application development projects.",
};

const ContactPage: React.FC = () => {
  return <ContactCon />;
};

export default ContactPage;

