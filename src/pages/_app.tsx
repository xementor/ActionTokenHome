import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'] 
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
