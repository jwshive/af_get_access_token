# Azure Function - Get REST API Access Token

Simple javascript/nodejs function to get a access (bearer) token for programatic Azure API calls.

## Installation

Clone repo and create as an Azure Function (vs code makes this easy).

## Usage
In Postman or your custom code, simply make a POST request to the azure function endpoint.
Ensure you're passing a JSON object with the following properties:
* client_id
* client_secret
* tenant_id
* resource [ex: 'https://graph.microsoft.com/.default' or 'https://management.azure.com/']

![Postman Screenshot](/img/postman_demo.png?raw=true "Optional Title")


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)