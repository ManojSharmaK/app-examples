const SmartApp = require('@smartthings/smartapp')
const indexPage = require('./pages/index-page')
const devicesPage = require('./pages/devices-page')
const enumsPage = require('./pages/enums-page')
const imagesPage = require('./pages/images-page')
const linksPage = require('./pages/links-page')
const numbersPage = require('./pages/numbers-page')
const textPage = require('./pages/text-page')
const collapsablePage = require('./pages/collapsable-page')
const dynamicPage = require('./pages/dynamic-page')
const linkedPage1 = require('./pages/linked-page1')
const linkedPage2 = require('./pages/linked-page2')

/* Define the SmartApp */
const smartApp = new SmartApp()
    .enableEventLogging(2)
    .configureI18n({updateFiles: false})
    .appId('52ef54d8-f991-4ef8-9bf0-733e32143fc6')
    .disableCustomDisplayName()
    .permissions(['r:devices:*', 'r:locations:*','r:scenes:*'])
    .page('indexPage', indexPage)
    .page('devicesPage', devicesPage)
    .page('enumsPage', enumsPage)
    .page('imagesPage', imagesPage)
    .page('linksPage', linksPage)
    .page('numbersPage', numbersPage)
    .page('textPage', textPage)
    .page('collapsablePage', collapsablePage)
    .page('dynamicPage', dynamicPage)
    .page('linkedPage1', linkedPage1)
    .page('linkedPage2', linkedPage2)

    .updated(async context => {
    })

module.exports = smartApp
