import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as Section from "../Section";
import { ContactForm } from "./ContactForm";
import sendEmail from "../../services/sendEmail";
import data from "../../config.json";

const contactData = data.pt.contact;

const Contact = () => {
  const form = useRef();
  const { handleSubmit } = useForm();
  const onSubmit = () => sendEmail(form);

  return (
    <Section.Structure name={"contact"}>
      <Section.Title title={contactData.title} />
      <Section.Text text={contactData.text} />
      <Section.Content>
        <ContactForm form={form} handler={handleSubmit(onSubmit)} />
      </Section.Content>
    </Section.Structure>
  );
};

export default Contact;
