# Salesforce Connector

This is an Arrow connector to Salesforce.

## Installation

```bash
$ appc install connector/appc.salesforce --save
```

You need to set the following configuration:

- *url* URL to salesforce instance
- *username* Login username
- *password* Login password
- *token* Login token

## Usage

Reference the connector in your model.

```javascript
var Account = Arrow.createModel('Account',{
	fields: {
		Name: { type: String, required: true, validator: /[a-zA-Z]{3,}/ }
	},
	connector: 'appc.salesforce'
});
```

If you want to map a specific model to a specific sobject name, use metadata.  For example, to map the `account` model to the sobject `Account`, set it such as:

```javascript
var Account = Arrow.createModel('account',{
	fields: {
		Name: { type: String, required: false, validator: /[a-zA-Z]{3,}/ }
	},
	connector: 'appc.salesforce',
	metadata: {
		'appc.salesforce': {
			object: 'Account'
		}
	}
});
```

## Development

> This section is for individuals developing the Salesforce Connector and not intended
  for end-users.

```bash
npm install
node app.js
```

### Running Unit Tests

Copy the following to local.js and update the login parameters with your own, then you can run the unit tests.

```javascript
module.exports = {
	logLevel: 'error',
	connectors: {
		'appc.salesforce.1': {
			connector: 'appc.salesforce',
			requireSessionLogin: false,
			url: 'https://test.salesforce.com/',
			username: 'your_salesforce_username',
			password: 'your_salesforce_password',
			token: 'your_salesforce_token',
			schemaRefresh: 3.6e+6 * 24, // one day
			modelAutogen: true,
			generateModelsFromSchema: true,
			generateModels: [
				'Account',
				'Contract'
			]
		},
		'appc.salesforce.2': {
			connector: 'appc.salesforce',
			requireSessionLogin: false,
			url: 'https://test.salesforce.com/',
			username: 'your_salesforce_username',
			password: 'your_salesforce_password',
			token: 'your_salesforce_token',
			schemaRefresh: 3.6e+6 * 24, // one day
			modelAutogen: true,
			generateModelsFromSchema: true,
			generateModels: [
				'Account',
				'Contract'
			]
		}
	}
};
```

```bash
npm test
```


# Contributing

This project is open source and licensed under the [Apache Public License (version 2)](http://www.apache.org/licenses/LICENSE-2.0).  Please consider forking this project to improve, enhance or fix issues. If you feel like the community will benefit from your fork, please open a pull request. 

To protect the interests of the contributors, Appcelerator, customers and end users we require contributors to sign a Contributors License Agreement (CLA) before we pull the changes into the main repository. Our CLA is simple and straightforward - it requires that the contributions you make to any Appcelerator open source project are properly licensed and that you have the legal authority to make those changes. This helps us significantly reduce future legal risk for everyone involved. It is easy, helps everyone, takes only a few minutes, and only needs to be completed once. 

[You can digitally sign the CLA](http://bit.ly/app_cla) online. Please indicate your email address in your first pull request so that we can make sure that will locate your CLA.  Once you've submitted it, you no longer need to send one for subsequent submissions.



# Legal Stuff

Appcelerator is a registered trademark of Appcelerator, Inc. Arrow and associated marks are trademarks of Appcelerator. All other marks are intellectual property of their respective owners. Please see the LEGAL information about using our trademarks, privacy policy, terms of usage and other legal information at [http://www.appcelerator.com/legal](http://www.appcelerator.com/legal).
