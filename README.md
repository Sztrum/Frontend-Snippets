# cheatsheet-sztrum

Personal cheatsheet

## Getting Started <a name = "getting_started"></a>

Personal cheatsheet

### Prerequisites

Start project  
```
npm init --yes
```
Things to install:  
- **webpack**
```
npm install webpack --save-dev
```
- **webpack-cli**
```
npm install webpack-cli --save-dev
```
- **autoprefixer**
```
npm install autoprefixer --save-dev
```
- **cross-env**
```
npm install cross-env --save-dev
```
- **date-fns**
```
npm install date-fns
```
- **lodash**
```
npm install lodash
```
- **tailwindcss**
```
npm install tailwindcss --save-dev
```
- **@tailwindcss/forms**
```
npm install @tailwindcss/forms --save-dev
```
- **postcss**
```
npm install postcss --save-dev
```
- **postcss-cli**
```
npm install postcss-cli --save-dev
```
- **postcss-import**
```
npm install postcss-import --save-dev
```
- **eslint**
```
npm install eslint --save-dev
./node_modules/.bin/eslint --init
```
- **prettier**
```
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
npm install --save-dev eslint-config-prettier
```

## Files configs:

**package.json scripts**
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "npx webpack",
  "build:watch": "npx webpack --watch",
  "dev": "postcss src/css/styles.css -o dist/main.css --watch",
  "prod": "cross-env NODE_ENV=production postcss src/css/styles.css -o dist/main.css",
  "git": "git subtree push --prefix dist origin gh-pages"
}
```

**.eslintrc.json**
```
    {
        "env": {
          "browser": true,
          "commonjs": true,
          "es2021": true
        },
        "extends": [
          "airbnb-base",
          "some-other-config-you-use",
          "prettier"
        ],
        "parserOptions": {
          "ecmaVersion": 12
        },
        "rules": {
          "no-console": "off",
          "quotes": ["error", "double"]
        }
      }
```

**settings.jso**
```
      {
        "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
        },
        "eslint.validate": ["javascript"]
      }
```

**webpack.config.js, tailwind.config.js, postcss.config.js**
```
      // webpack.config.js
      const path = require('path');
      
      module.exports = {
        entry: './src/js/index.js',
        output: {
          filename: 'main.js',
          path: path.resolve(__dirname, 'dist'),
        },
      };
      
      // tailwind.config.js
      module.exports = {
        purge: [
          './dist/**/*.html',
          './src/js/*.js',
        ],
        content: ["./src/css/*.{html,js}"],
        theme: {
          fontFamily: {
            'seg': ['Segoe UI', 'Sans', 'Arial'],
          },
          extend: {},
        },
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          require('@tailwindcss/forms'),
        ],
      };
      
      // postcss.config.js
      module.exports = {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
```
