const { config } = require('@vue/test-utils')
const { createVuetify } = require('vuetify')
const Vue = require('vue')

const vuetify = createVuetify()

config.global.plugins = [vuetify] 