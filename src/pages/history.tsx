import Head from "next/head";
import { Header } from "@/components/Header";
import { Converter } from "@/components/Converter";
import { PageUrl } from "@/@enums/pages";

export default function Home() {
  return (
    <>
      <Head>
        <title>Currency Exchange</title>
      </Head>
      <Header activeHref={PageUrl.HISTORY} />
      <div>History</div>
    </>
  );
}
