# DELETE ALL FILES IN PUBLIC SO THAT SERVERSIDE RENDERING WILL TAKE PLACE

This is a [Next.js](https://nextjs.org/) project bootstrapped with Tristan's Template UwU.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying `pages`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Firebase

To deploy on Google Firebase do the following

```
npm install firebase-tools
firebase init
select hosting
1. you will decide a public directory (it's public)
2. you will decide to rewrite it as a SPA (don't)
3. you will set up auto deploys with github (do that)
4. visit the URL
5. you will select a repository to deploy it to
6. overwrite the .yamls 
```

recopy the function to the from firebase.json in the template to this one or copy it here put it after the ignore array in the firebase.json

```
,
    "rewrites": [
      {
        "source":"**",
        "function":"nextServer"
      }
    ]

```

