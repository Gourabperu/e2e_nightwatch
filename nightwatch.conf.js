// for our project can understand es6
require('babel-core/register')  

const chromedriver = require('chromedriver');
require('geckodriver');

const testUrl = 'http://culqi3-qa-onboarding.s3-website-us-east-1.amazonaws.com/user/register'
const defaultTimeout = 50000

module.exports = {
    src_folders: ['tests'],

    page_objects_path: './pages',
    globals_path: './hooks/global.js',

    webdriver: {
        start_process: true,
    },

    // test_workers: {
    //   enabled: true,
    //   workers: 2
    // },

    // screenshots : {
    //     enabled: true,
    //     on_failure: true,
    //     on_error: true,
    //     path: 'tests_output/'
    // },

    test_settings: {
        default: {
            launch_url: testUrl ,
            globals: {
                waitForConditionTimeout: defaultTimeout// when the networks connection is slow
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome"
            }
        },

        headless: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout // when the networks connection is slow
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome",
                acceptInsecureCerts: true,
                //acceptSslCerts : true,
                chromeOptions: {
                    w3c: false,
                    args: ['--headless', '--no-sandbox', '--disabled-dev-shm-usage']
                }
            }
        },

        firefox : {
            launch_url: testUrl ,
            globals: {
                waitForConditionTimeout: defaultTimeout // when the networks connection is slow
            },
            webdriver: {
                server_path: './node_modules/.bin/geckodriver',
                port: 4444
            },
            desiredCapabilities: {
                browserName: "firefox",
                acceptInsecureCerts: true
            }
        },

        stage : {
            launch_url: "http://culqi3-qa-onboarding.s3-website-us-east-1.amazonaws.com"
        }
    }
}