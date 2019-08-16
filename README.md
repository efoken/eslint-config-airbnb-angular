# eslint-config-airbnb-angular

> Airbnb's ESLint config with Angular and TypeScript support

Use this when you're trying to use
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
and [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
in your Angular project.

Note: this config works for both JS and TS files.

## Installation

Install dependencies. ESLint plugins must also be installed.

```bash
npm install --save-dev eslint-config-airbnb-angular \
                       eslint-plugin-import \
                       @typescript-eslint/eslint-plugin
```

Within your ESLint config file:

```javascript
module.exports = {
  extends: ['airbnb-angular'],
};
```

Alter your eslint command to include ts files:

```bash
eslint --ext .js,.ts .
```

## Credits

Authored and maintained by Eike Foken ([eikefoken.com](https://eikefoken.com/))

## License

Open source licensed as MIT.
