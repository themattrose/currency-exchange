import Head from "next/head";
import { ConversionHistory } from "@/components/ConversionHistory";
import { Layout } from "@/components/Layout";

export default function HistoryPage() {
  return (
    <>
      <Head>
        <title>Currency Exchange</title>
      </Head>
      <Layout>
        <ConversionHistory />
      </Layout>
    </>
  );
}
