import axios from "axios";
import client from "Config/GraphqlApiService";

const SignIn = (user) =>
  new Promise((res, rej) => {
    axios
      .post("/users/sign_in.json", { user })
      .then((response) => {
        client.clearStore();
        localStorage.setItem("E-NERD-BAZAR-TOKEN", response.data.jti);
        res(true);
      })
      .catch(() => {
        rej(new Error("E-mail ou senha inválida."));
      });
  });

export default SignIn;
