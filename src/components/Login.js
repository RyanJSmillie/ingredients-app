import axios from "axios";

function Login() {
  const data = JSON.stringify({
    name: "TEST1",
    email: "TEST2@test.com",
    password: "password",
  });

  const config = {
    method: "post",
    url: "http://localhost:5001/register",
    headers: {
      "Access-Control-Allow-Origin": "true",
      "Content-Type": "application/json",
    },
    data,
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default Login;
