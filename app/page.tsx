import Card from "@/components/Card";
import { getLinesBasedOnCategory } from "@/utils";

type Props = {
  searchParams: { page?: string };
};

export default function Home({ searchParams }: Props) {
  const lines = getLinesBasedOnCategory("cheesy");

  return (
    <div className="mt-4">
      {lines?.map((line, index) => {
        return <Card line={line} key={index} index={index} />;
      })}
    </div>
  );
}
