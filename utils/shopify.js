import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: 'cat-jackets.myshopify.com',
    storefrontAccessToken: 'dfd21d34567aa56f82c72780551ffb9a'
});

export {client}