import axios from "axios";

const url = "https://bootcampspot.com/api/instructor/v1";

// login takes BCS email and password, then retrieves authToken needed for subsequent API calls
const login = async (email, password) => {
  const response = await axios.post(url + "/login", { email, password });

  let error = null;
  if (
    response.data &&
    response.data.success === true &&
    response.data.authenticationInfo &&
    response.data.authenticationInfo.authToken
  ) {
    return { token: response.data.authenticationInfo.authToken };
  } else {
    error = "Invalid login";
    if (response && response.data && response.data.errorCode) {
      return { error: response.data.errorCode };
    }
    console.warn(response);
  }
};

export default login;

// fail

// authenticationInfo: null
// errorCode: "INVALID_CREDENTIALS"
// resetToken: null
// success: false

// success

// active: true
// authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4MTAzLCJtaW51dGVzVGltZW91dCI6NjAsImNyZWF0aW9uVGltZSI6IjIwMTktMDQtMTZUMTM6NTE6MTguOTA1OTU3NjcyWiJ9.dXpn-WpD4EyDdhqPhSNpe9wWmyk2R4xGbv000CDfm8c"
// firstLogin: false
// userId: 18103
