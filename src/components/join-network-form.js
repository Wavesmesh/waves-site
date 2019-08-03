import React from 'react';
import { useForm } from '../utilities/hooks';
import { css } from '@emotion/core';

/* Leaving support in for React stateful forms, but
  we're going to use Netlify for now. Commenting out the
  React specific items and adding the Netlify form support
*/

const JoinNetworkForm = () => {
  const confirmEntry = () => {
    console.log(`
    Entry submitted! 
    Name: ${input.name}
    Address: ${input.address}
    Phone: ${input.phone || 'No phone number provided'}
    Email: ${input.email || 'No email address provided'} 
    `);
  };
  const { input, handleChange, handleSubmit } = useForm(confirmEntry);

  return (
    <form
      netlify-honeypot="bot-field"
      data-netlify="true"
      method="POST"
      name="waves-login"
      css={css`
        max-width: 600px;
        margin: 2rem auto;
        label {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        input,
        textarea {
          font-size: 1.5rem;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 0.5rem;
          padding: 0.5rem;
          margin-bottom: 1.5rem;

          &:focus {
            outline: 2px solid var(--primary-color);
          }
        }
        input::placeholder,
        textarea::placeholder {
          font-size: 1.5rem;
          color: #777;
        }
      `}
      // onSubmit={handleSubmit}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <input type="hidden" name="bot-field" />
        <label for="name">Enter your full name:</label>
        <input
          type="text"
          name="name"
          // onChange={handleChange}
          // value={input.name}
          placeholder="First Last"
          required
        />
        <label for="address">Enter your street address:</label>
        <textarea
          id="address"
          name="address"
          rows="5"
          cols="33"
          // onChange={handleChange}
          // value={input.address}
          placeholder="1234 Street Baltimore MD, 21202"
        />
        <label for="phone">Enter your phone number (optional):</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          // onChange={handleChange}
          // value={input.phone}
          placeholder="410-555-5555"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <label for="email">Enter your email (optional):</label>
        <input
          type="email"
          name="email"
          size="50"
          // onChange={handleChange}
          // value={input.email}
          placeholder="name@email.com"
        />
        <button
          type="submit"
          css={css`
            color: #121212;
            background: #e5f8ff;
            padding: 1rem;
            font-size: 2rem;
            margin-top: 1rem;
            border: 2px solid #121212;
            border-radius: 16px;
            transition: all ease 0.3s;
            text-transform: none;

            &:hover {
              color: #e5f8ff;
              background: #121212;
              border: 2px solid #e5f8ff;
              cursor: pointer;
            }
            &:focus {
              outline: 0.5px dashed #000;
            }
          `}
        >
          Join Now
        </button>
      </div>
    </form>
  );
};

export default JoinNetworkForm;
