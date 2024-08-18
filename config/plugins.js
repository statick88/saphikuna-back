module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "2ixqdnjlaztu53ghi9h89kv9elfpd0v34ipj2moiyygc1h3ts2278pzm53dui6eh", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "e-commerce-saphikuna", // the neon project under wich your DB runs
        neonRole: "neondb_owner", // create it manually under roles for your project first
        gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    },
  }