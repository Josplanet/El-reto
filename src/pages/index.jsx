import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Layout from "../components/Layout";

export default function home() {
  return <Layout></Layout>;
}
