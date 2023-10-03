import Head from "next/head";
import { Navibar } from "~/components/Navi";
import Hero from "~/components/hero";

export default function Home() {

  return (
    <>
      <Head>
        <title>Action Tokens</title>
        <meta name="description" content="Action Tokens Homepage" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navibar/>
      <Hero/>
      
    </>
  );
}
