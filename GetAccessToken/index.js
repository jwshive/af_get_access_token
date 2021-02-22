const axios = require('axios');
const qs = require('qs');
const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';

module.exports = async function (context, req) {
  const postData = {
  client_id: req.body.client_id,
  client_secret: req.body.client_secret,
  scope: MS_GRAPH_SCOPE,
  grant_type: 'client_credentials'
};

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
console.log(`Triggered request for client id ${req.query.client_id}`)
await axios
  .post(`https://login.microsoftonline.com/${req.body.tenant_id}/oauth2/token`, qs.stringify(postData))
  .then(response => {
    context.res = {
      body: response.data.access_token
    }

  })
  .catch(error => {
    context.res = {
      body: error
    }
    console.log(error);
  });

}