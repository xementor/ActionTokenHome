import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Nunito } from 'next/font/google'

const nunito = Nunito({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'] 
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
