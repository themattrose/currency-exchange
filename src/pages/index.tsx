import { PageUrl } from "@/@enums/pages";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push(PageUrl.CONVERTER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
