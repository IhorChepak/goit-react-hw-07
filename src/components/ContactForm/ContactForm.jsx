import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./contactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();
  const initialValues = { name: "", number: "", id: "" };

  const onSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 символів!")
      .required("Обов'язково введить Ваше ім'я!"),
    number: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 символів!")
      .required("Обов'язково введить Ваш номер телефона!"),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={feedbackSchema}
      >
        <Form className={s.form}>
          <label htmlFor={nameId}>Name: </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className={s.input}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={s.error}
          />

          <label htmlFor={numberId}>Number: </label>
          <Field
            type="tel"
            name="number"
            id={numberId}
            className={s.input}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.error}
          />

          <button
            type="submit"
            className={s.button}
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;