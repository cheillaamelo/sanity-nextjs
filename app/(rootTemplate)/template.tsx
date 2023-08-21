import { Layout } from "@/components/layout";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
