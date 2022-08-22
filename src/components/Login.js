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

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default Login;
