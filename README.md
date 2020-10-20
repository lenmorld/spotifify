# From express to vercel

https://vercel.com/guides/using-express-with-vercel

# rewrites

The routes go to rewrites

source - pattern that matches the incoming pathname
destination - absolute pathname to existing resource or external URL

examples:

```
{
  "rewrites": [
    { "source": "/about", "destination": "/about-our-company.html" },
    { "source": "/resize/:width/:height", "destination": "/api/sharp" },
    { "source": "/user/:id", "destination": "/api/user" },
    { "source": "/proxy/:match*", "destination": "https://example.com/:match*" }
  ]
}
```

https://vercel.com/docs/configuration#project/rewrites