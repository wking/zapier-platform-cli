require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Creates - <%= LABEL %>', () => {
  zapier.tools.env.inject();

  it('should create an object', (done) => {
    const bundle = {
      authData: <%= AUTH_DATA %>,
<% if (INPUT_DATA) { %>
      inputData: <%= INPUT_DATA %>
<% } %>
    };

    appTester(App.creates['<%= KEY %>'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
        done();
      })
      .catch(done);
  });

});
