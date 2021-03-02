const axios = require('axios');
const qs = require('qs');

module.exports = async function (context, req) {
  const postData = {
    client_id: req.body.client_id,
    client_secret: req.body.client_secret,
    resource: req.body.resource,
    grant_type: 'client_credentials'
};

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  console.log(`Triggered request for client id ${req.body.client_id}`)
  await axios
    .post(`https://login.microsoftonline.com/${req.body.tenant_id}/oauth2/token`, qs.stringify(postData))
    .then(response => {
      context.res = {
        body: {
          access_token: response.data.access_token,
          resource: req.body.resource
        },
        headers: {'Content-Type': 'application/json'}
      }

    })
    .catch(error => {
      context.res = {
        body: error
      }
    });

}