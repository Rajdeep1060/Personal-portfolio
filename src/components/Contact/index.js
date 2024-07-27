import { useForm } from "@formspree/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactLabel = styled.label`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 4px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  &:disabled {
    opacity: 0.6;
  }
`;

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwawbql");
  console.log("🚀 ~ Contact ~ state:", state);
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (state?.submitting) {
      Swal.fire({
        icon: "success",
        title: "Message sent! Thanks for reaching out!",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff", // Ensures the background is white to match the theme
      }).then(() => {
        setFormValues({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
      });
    }
  }, [state.submitting]);

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactLabel htmlFor="email" required>
            Email
          </ContactLabel>
          <ContactInput
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />

          <ContactLabel htmlFor="name">Name</ContactLabel>
          <ContactInput
            id="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />

          <ContactLabel htmlFor="subject">Subject</ContactLabel>
          <ContactInput
            id="subject"
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={handleInputChange}
            required
          />

          <ContactLabel htmlFor="message">Message</ContactLabel>
          <ContactInputMessage
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
            rows="4"
            required
          />

          <ContactButton type="submit" disabled={state.submitting}>
            Send
          </ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
