// import Api from "@/services/Api";

// export default {
//   signup(credentials) {
//     return Api().post("signup", credentials);
//   },
// };
// AuthenticationService.js

import Api from "@/services/Api";

export default {
  async signup(userData) {
    try {
      const response = await Api().post("/signup", userData);
      return response.data; // Return the response data if needed
    } catch (error) {
      throw new Error("Signup failed: " + error.message);
    }
  },
};
