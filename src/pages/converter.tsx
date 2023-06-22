import Head from "next/head";
import { Converter } from "@/components/Converter";
import { Layout } from "@/components/Layout";

export default function ConverterPage() {
  return (
    <>
      <Head>
        <title>Currency Exchange</title>
      </Head>
      <Layout>
        <Converter />
      </Layout>
    </>
  );
}
