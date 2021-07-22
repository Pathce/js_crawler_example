const {Builder, By, Key, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// chrome 옵션 설정
const options = new chrome.Options();
options.addArguments('--headless');
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');

let driver = new Builder()
.forBrowser('chrome')
.setChromeOptions(options)
.build();
