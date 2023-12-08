# Tienda
tienda online Django restframework - nextjs
Ref1: Dave Gray - Redux Advanced Tutorial - React, Redux Toolkit, RTK Query Project

## pasos a seguir.
1. Creamos el backend en la carpeta raiz del proyecto
  -. una vez creado en entorno virtual creamos el archivo "requirements.txt" y en él colocamos todos los paquetes que vamos a instalar para el 
  ```bash
  $ pipenv install -r requirements.
  ```
  
  

2. creamos el front end también en la carpeta raiz del proyecto, con el nombre "client"
  $ npx create-next-app@latest

  nombre: client
  eslint: si
  src: no
  app: si
  -. en el archivo "package.json" agregamos "devDependencies" seguido de "dependencies"

  ```json
    "dependencies": {
      ...
    },
    "devDependencies": {
      "@babel/core": "^7.21.4",
      "@babel/eslint-parser": "^7.21.3",
      "@types/react-copy-to-clipboard": "^5.0.4",
      "@types/react-slick": "^0.23.10",
      "eslint-config-airbnb": "^19.0.4",
      "eslint-config-prettier": "^8.8.0",
      "eslint-plugin-import": "^2.27.5",
      "eslint-plugin-jsx-a11y": "^6.7.1",
      "eslint-plugin-prettier": "^4.2.1",
      "eslint-plugin-react": "^7.32.2",
      "eslint-plugin-react-hooks": "^4.6.0",
      "prettier": "^2.8.7",
      "slick-carousel": "^1.8.1"
    },
  ```

  ```bash
  $ npm install
  ```
  (para instalar "devDependencies")
  
  en la carpeta "client" creamos el prettierignore ".prettierignore" y le agregamos:

    .yarm
    .npm
    .next
    dist
    node_modules
    .env.local

  y para las reglas de prettier creamos el archivo ".prettierrc" y le agregamos
    {
      "trailingComma": "all",
      "printWidth": 100,
      "singleQuote": true,
      "bracketSpacing": true,
      "proseWrap": "never",
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "endOfLine": "auto"
    }

  para las reglas de eslint, agregamos en el archivo ".eslintrc.json" y quedaría de la siguiente forma:

    {
      "parser": "@babel/eslint-parser",
      "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "settings": {
        "react": {
          "version": "detect"
        }
      },
      "env": {
        "browser": true,
        "amd": true,
        "node": true
      },
      "extends": [
        "airbnb",
        "prettier",
        "next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
      ],
      "plugins": ["prettier"],
      "rules": {
        "prettier/prettier": ["error", { "endOfLine": "auto" }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/react-in-jsx-scope": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/prop-types": "off",
        "no-nested-ternary": "off",
        "react/jsx-props-no-spreading": "off",
        "react/button-has-type": "off",
        "jsx-a11y/media-has-caption": "off",
        "arrow-body-style": "off",
        "import/no-extraneous-dependencies": "off"
      }
    }

