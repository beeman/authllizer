# Authllizer Twitch OAuth2 Provider
[![Source Code](https://img.shields.io/badge/%3C/%3E-source--code-blue.svg)](https://github.com/yisraelx/authllizer/blob/master/packages/providers/authllizer-twitch-oauth2)
[![Version](https://img.shields.io/npm/v/authllizer-twitch-oauth2.svg)](https://www.npmjs.com/package/authllizer-twitch-oauth2)
[![MIT License](https://img.shields.io/npm/l/authllizer-twitch-oauth2.svg?color=yellow)](https://github.com/yisraelx/authllizer/blob/master/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/min/authllizer-twitch-oauth2.svg?color=green)](https://bundlephobia.com/result?p=authllizer-twitch-oauth2)
[![TypeScript](https://img.shields.io/badge/100%25-TypeScript-blue.svg)](https://www.typescriptlang.org)

## Install
```sh
$ npm install --save authllizer-twitch-oauth2
# and install peer dependencies 
$ npm install --save @authllizer/core
```

## Use
```ts
import { Authllizer, IAuthllizerOptions } from '@authllizer/core';
import TwitchOAuth2, { ITwitchOAuth2Options } from 'authllizer-twitch-oauth2';

let authllizer: Authllizer = new Authllizer({
    providers: {
        twitch: TwitchOAuth2.extend({
            clientId: '***',
            // ...
        } as ITwitchOAuth2Options),
        // ...
    },
    // ...
} as IAuthllizerOptions);
```

## License
Copyright © 2017 [Yisrael Eliav](https://github.com/yisraelx),
Licensed under the [MIT license](https://github.com/yisraelx/authllizer/blob/master/LICENSE).
