import React, { useMemo, Fragment, useCallback } from 'react';
import { Link } from 'react-router-dom';
import FormLoader from 'ui/form-loader';
import Button from 'ui/button';
import { useGlobalContext } from 'context';
import './index.css';

const Form = ({
  header="Header",
  fields=[],
  onSubmit=() => {},
  submitLabel="Submit",
  links=[]
}) => {
  const { contextState: { isLoading, Errors } } = useGlobalContext();
  const names = Array.from(new Set(fields.map(({ name }) => name)));

  if (names.length !== fields.length) throw new Error("Name of fields should be unique.");

  const submitButton = useMemo(() => {
    if (isLoading) return <FormLoader />;

    return <Button type="submit" label={submitLabel} />;
  }, [isLoading]);

  const preparedFields = useMemo(() => (
    fields.map(({ name, type="text", placeholder }) => (
      <Fragment key={name} >
        <div className="form__inputWrapper">
          <input
            className={`form__input_${type}`}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
          />
        </div>
        { Errors && Errors[name] && <label className="form__inputLabel" htmlFor={name} >{name}</label> }
      </Fragment>
    ))
  ));

  const preparedLinks = useMemo(() => (
    links.map(({ text, to }, index) => (
      <Link key={to+index} to={to} >{text}</Link>
    ))
  ), [links.length]);

  const preventedSubmit = useCallback(event => {
      event.preventDefault();

      const formData = Array.from(event.target).reduce((acc, { name, value }) => {
        if(name) acc[name] = value;

        return acc;
      }, {});

      onSubmit(formData);
    }, []);

  return (
    <div className="form">
      <h2 className="form__header">{header}</h2>
      <form className="form__body" onSubmit={preventedSubmit}>
        {preparedFields}
        <div className="form__links">
          {preparedLinks}
        </div>
        <div className="form__submitWrapper">
          {submitButton}
        </div>
      </form>
    </div>
  );
};

export default Form;
