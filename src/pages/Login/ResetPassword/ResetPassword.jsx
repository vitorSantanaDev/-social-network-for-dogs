import React, { useEffect, useState } from "react";
import Input from "../../../Components/Forms/Input/Input";
import Button from "../../../Components/Forms/Button/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { RESET_PASSWORD } from "../../../api/api";
import { H1Element } from "../../../Components/Titles/H1/H1";
import Error from "../../../Components/Helper/Error/Error";
import { useNavigate } from "react-router";
import Head from "../../../Components/Helper/Head/Head";

const ResetPassword = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("password");
  const { error, request, loading } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (password.validate()) {
      const params = new URLSearchParams(window.location.search);
      const key = params.get("key");
      const login = params.get("login");
      if (key) setKey(key);
      if (login) setLogin(login);
    }
  }, [password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = RESET_PASSWORD({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) navigate("/login");
  };

  return (
    <>
    <Head title="Resetar senha"/>
      <H1Element>Resetar senha</H1Element>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </>
  );
};

export default ResetPassword;
