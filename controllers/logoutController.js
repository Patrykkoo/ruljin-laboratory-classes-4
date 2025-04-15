const { LOGOUT_LINKS } = require("../constants/navigation");
const logger = require("../utils/logger");

const getLogoutView = (_request, response) => {
  response.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
};

const killAplication = () => {
  logger.getProcessLog();
  process.exit();
};

module.exports = {
  getLogoutView,
  killAplication,
};
