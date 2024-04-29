import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: "tests/api",
    timeout: 30000,
    expect: {
        timeout: 5000,
    },
    retries: 0,
    reporter:[
        ["list"],
        ["html"],
    ],
    use: {
        baseURL: "https://myretro-stg.tochkavhoda.ru/api/",
        headless: true,
        actionTimeout: 10000,
        extraHTTPHeaders:{
        'Accept': "application/json;charset=UTF-8",
        'Cookie': "myretro=Fe26.2**3e26bbaa304fc4ed62bdcc5e4d92adaf94ae9a9e97716d84548f96ece27b5a6d*4v86B2Z4hViMSlMxSbhLpg*aAwQqg0KHH7QlHpphq_PJQ**0b6e340d3e7c09019222ecee2838051ab4e2700d164145976cd0428335f7d4df*JShmXvDIVBqVej6fncAaobE5rDMMhEl8m9qdXAdIEzE"
    },
},

};
export default config;