import React from 'react';
import Form from 'ui/form';
import './index.css';

const formProps = {
  header: "Регистрация",
  submitLabel: "Создать аккаунт",
  fields: [
    { name: "login", placeholder: "Логин" },
    { name: "email", placeholder: "e-майл" },
    { name: "password", placeholder: "Пароль", type: "password" },
    { name: "password_repeat", placeholder: "Повторите пароль", type: "password" }
  ]
};


const Register = ({ registerAsync=() => {} }) => {

  return (
    <div className="register">
      <Form {...formProps} onSubmit={registerAsync} />
    </div>
  );
};

export default React.memo(Register);
