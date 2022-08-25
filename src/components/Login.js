import axios from "axios";

function Login() {
  const data = JSON.stringify({
    email: "TEST2@test.com",
    password: "password",
  });

  const config = {
    method: "post",
    url: "http://localhost:5001/login",
    headers: {
      "Access-Control-Allow-Origin": "true",
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data), "login response");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default Login;
