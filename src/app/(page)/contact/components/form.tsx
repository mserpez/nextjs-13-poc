"use client";

import { Button } from "@/components";
import { FormWrapper, TextAreaField, TextField } from "@/components/form";
import { FormProviderProps } from "react-hook-form";
import * as yup from "yup";

interface FormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required("Required"),
  name: yup.string().required("Required"),
  subject: yup.string().required("Required"),
  message: yup.string().required("Required"),
});

export default function ContactForm() {
  const onSubmitHandler = (
    data: FormProps,
    form: FormProviderProps<FormProps>
  ) => {
    alert("Values: " + JSON.stringify(data, null, 4));
    form.reset();
  };
  return (
    <FormWrapper<FormProps>
      defaultValues={{ name: "", email: "", message: "", subject: "" }}
      className="flex flex-col"
      onSubmit={onSubmitHandler}
      schema={schema}
    >
      <TextField name="name" label="Name" />
      <TextField name="email" label="Email" />
      <TextField name="subject" label="Subject" />
      <TextAreaField name="message" label="Message" />
      <Button className="self-end" type="submit">
        Submit
      </Button>
    </FormWrapper>
  );
}
