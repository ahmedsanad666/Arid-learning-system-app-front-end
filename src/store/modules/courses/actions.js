export default {
  login() {},

  async signup(context, payload) {
    //  fetch

    let response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7IZr6li6U_xQ3zHRfZaW7zY-TYCI4Yck',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    let responseData = await response.json();

    if (!response.ok) {
      let error = new Error(responseData.message || 'faild to authenticatino');
      console.log(responseData);

      throw error;
    }

    context.commit('setUser', {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiratoin: responseData.expiresIn,
    });
    // let userData = {
    //
    // }
  },
};
