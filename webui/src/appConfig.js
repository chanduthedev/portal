// ------------------------------------------------
// * Application: Vegan recipes app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

module.exports = {
  configuration: {
    appServer: { host: "http://localhost", port: 7788 },
    api: {
      user: {
        register: "/user/register",
        login: "/user/login",
        updateDetails: "/user/update",
        deteleUser: "/user/",
      },
      recipe: {
        create: "/recipe/create",
        view: "/recipe/view",
        update: "/recipe/update",
        detele: "/recipe/",
      },
    },
  },
};
