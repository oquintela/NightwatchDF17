/***
 * @author - Oscar Quintela
 */ 
module.exports = {

  'LoginTest' : function(client) {
      const loginPage =  client.page.LoginPage();
      loginPage
      //instanceUrl+"/secur/frontdoor.jsp?sid=" + token
      .sfdcLogin(client.globals.globalVar["result"]["instanceUrl"],
               client.globals.globalVar["result"]["accessToken"]
             );
      client.page.LoginPage().verifyLogin();
      client.end();
  }
};
