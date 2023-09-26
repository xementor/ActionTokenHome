import Head from "next/head";
import { Navibar } from "~/components/Navi";

export default function Home() {

  return (
    <>
      <Head>
        <title>Action Tokens</title>
        <meta name="description" content="Action Tokens Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navibar/>
      
    </>
  );
}
