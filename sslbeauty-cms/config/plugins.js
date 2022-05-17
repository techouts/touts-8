module.exports = ({ env }) => ({
	publisher: {
		enabled: true,
	},
'transformer': {
    enabled: true,
    config: {
      prefix: '/content/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
'website-builder': {
    enabled: true,
    config: {
      url: 'https://link-to-hit-on-trigger.com',
      trigger: {
        type: 'manual',
      },
    }
  },


upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },

"content-versioning": {
		enabled:  true,
	},
scheduler: {
    enabled: true,
    config: {
      model: "scheduler",
    },
  },
 "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
});
