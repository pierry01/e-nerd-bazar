import axios from "axios";
import client from "Config/GraphqlApiService";

const Signup = (user, token) =>
  new Promise((res, rej) => {
    axios
      .post("/signup", { user, token })
      .then((response) => {
        client.clearStore();

        localStorage.setItem(
          "E-NERD-BAZAR-AUTH-TOKEN",
          response.headers.authorization
        );

        res(true);
      })
      .catch((error) => {
        console.log("error", error);

        rej(new Error(error.response.data.error));
      });
  });
export default Signup;
