module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            `${process.env.PUBLIC_URL || 'http://localhost:1337'}`,
            'https://ai-resume-builder-backend-ejnp.onrender.com'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            `${process.env.PUBLIC_URL || 'http://localhost:1337'}`,
            'https://ai-resume-builder-backend-ejnp.onrender.com'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:1337',
        'http://localhost:3000',
        'https://ai-resume-builder-frontend-beta.vercel.app',
        'https://ai-resume-builder-backend-ejnp.onrender.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];