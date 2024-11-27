# Shopify Function Template - Product Discount Function (app with extensions only)
### Use Case - Apply Employee Pricing as a discount on the line item

This template is for creating a Product Discount Function that checks if the customer is an employee. If they are, the function will apply an employee discount, but only if the line item has the employee price metafield filled out. This app does not include an app home UI.

It contains the basics for building a Shopify app that uses only app extensions.

(https://shopify.dev/docs/apps/getting-started)

(https://shopify.dev/docs/apps/build/discounts/build-discount-function)

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Clone the project
```
git clone https://github.com/nf-shopify/employee-pricing-app.git
```
You can find function within extensions/employee-discount-function

### Prerequisites

1. Creation of a decimal metafield on the varirant object to employee pricing.
![Location Metafield](https://screenshot.click/26-34-wgrrf-9xivo.jpg)


### Local Development

[The Shopify CLI](https://shopify.dev/docs/apps/tools/cli) connects to an app in your Partners dashboard. It provides environment variables and runs commands in parallel..

You can develop locally using your preferred package manager. Run one of the following commands from the root of your app.

Using npm:

```shell
npm run dev
```

Open the URL generated in your console. Once you grant permission to the app, you can start to to test the function in your store.


## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)
