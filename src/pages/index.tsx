import Head from "next/head";
import Link from "next/link";
import { Navibar } from "~/components/Navi";
import { api } from "~/utils/api";

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
