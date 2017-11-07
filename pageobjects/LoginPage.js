/***
 * @author - Oscar Quintela
 */ 

var fridge = require ('../loadjson');

module.exports = {
  url: 'https://login.salesforce.com',
  elements: {
    userNameInput: {
      selector: '#username'
    },

    Home: {
      //  selector: '#login_form'
      selector: '.bare.slds-button.uiButton.forceHeaderButton.oneUserProfileCardTrigger'
    },

    passWordInput: {
      selector: '#password'
    },

    submitButton: {
      //  selector: '#login_form'
      selector: '#Login'
    }
  },
    commands: [{
        clickSubmitButton() {
            this
                .waitForElementVisible('@submitButton', 30000)
                .click('@submitButton')
            return this.api;
        },
        fillInUsernameInput(user) {
            this
                .waitForElementVisible('@userNameInput', 30000)
                .setValue('@userNameInput', user)
            return this.api;

        },

        sfdcLogin(instanceUrl,token) {
            this.api.url(instanceUrl);
            this.api.url(instanceUrl+"/secur/frontdoor.jsp?sid=" + token);
      return this.api;
    },

        verifyLogin(){
          this
              .waitForElementVisible('@Home', 30000)
              .assert.containsText('@Home', 'View profile')
          return this.api;
        },

        fillInPasswordInput(password) {
            this
                .waitForElementVisible('@passWordInput', 30000)
                .setValue('@passWordInput', password)
            return this.api;

        }

    }]
};
