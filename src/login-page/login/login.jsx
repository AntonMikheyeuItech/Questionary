import React from 'react';
import Form from 'ui/form';
import './index.css';

const formProps = {
  header: "Вход",
  submitLabel: "Войти",
  fields: [
    { name: "login", placeholder: "Логин" },
    { name: "password", placeholder: "Пароль", type: "password" }
  ],
  links: [
    { text: "Регистрация", to: "/register" },
    { text: "Забыли пароль?", to: "/forgot-password" }
  ]
};


const LogIn = ({ authAsync=() => {} }) => {

  return (
    <div className="login">
      <Form {...formProps} onSubmit={authAsync} />
    </div>
  );
};

export default React.memo(LogIn);
