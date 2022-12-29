import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../Assets/logo-full-v.png";
import SignIn from "../../Services/SignIn";

function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const onSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const { email, password } = formValues;

    SignIn({ email, password })
      .then(() => navigate("/"))
      .catch((err) => {
        setLoading(false);
        setErrors({ base: err.message });
      });
  };

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src={Logo} alt="Logo" className="w-3/4 m-auto" />
          </div>

          <form
            className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"
            onSubmit={onSubmit}
          >
            <input
              required
              type="text"
              name="email"
              placeholder="E-mail"
              className="mb-6 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={({ target }) =>
                setFormValues({ ...formValues, email: target.value })
              }
            />

            <input
              required
              type="password"
              name="password"
              placeholder="Senha"
              className="mb-6 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={({ target }) =>
                setFormValues({ ...formValues, password: target.value })
              }
            />

            {errors.base ? (
              <p className="mb-4 text-red-700 font-medium">{errors.base}</p>
            ) : null}

            <div className="flex justify-between items-center gap-4 mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />

                <p className="form-check-label inline-block text-gray-800">
                  Lembrar dados
                </p>
              </div>

              <button
                type="button"
                className="text-gray-800"
                onClick={() => navigate("../recover-account")}
              >
                Esqueceu a senha?
              </button>
            </div>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-palette-1 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-palette-3 hover:shadow-lg transition duration-150 ease-in-out mb-2"
              >
                Entrar
              </button>

              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Não tem conta?
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => navigate("../signup")}
                  className="text-palette-1 hover:text-palette-1 focus:text-palette-1 transition duration-200 font-bold ease-in-out ml-1"
                >
                  Registre-se!
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
