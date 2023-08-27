This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## REDUX TOOLKIT QUERY
1. Instalamos las dependencias _@reduxjs/toolkit_  _react-redux_
```sh
$ npm i @reduxjs/toolkit react-redux
```
2. En el proyecto Nextjs creamos una carpeta en la raíz del proyecto llamada **_redux_** y dentro de ésta creamos dos carpetas más una llamada **_features_** y otra llamada **_services_**.
3. En la carpeta **_redux_** también creamos dos archivos uno llamado _provider.jsx_  y otro llamado _store.js_
```js
// provider.jsx

"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export default function CustomProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
```
```js
// store.js

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
```
4. En el archivo _/app/layout.js_ envolvemos el provider
```js
// /app/layout.js

import CustomProvider from "@/redux/provider";
import "@/styles/globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <CustomProvider>
          <div>
            {children}
          </div>
        </CustomProvider>
      </body>
    </html>
  );
}
```
* El _CustomProvider_ solicita una propiedad llamada _api_ que es una instancia del lugar donde se encuentran nuestras consultas (las peticiones http). Para ello creamos un archivo en la carpeta **_services_** llamado _apiSlice.js_
```js
// /services/apislice.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuth, logout } from "../features/authSlice";
import { Mutex } from "async-mutex";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api/auth`,
  credentials: "include",
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            url: "/jwt/refresh/",
            method: "POST",
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(setAuth());

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
```
