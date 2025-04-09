import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/sanity";
import { Card, CardContent } from "../ui/card";

const ArticleThumbnail = ({ article }: { article: Article }) => {
  return (
    <Link
      href={`/news/${article._id}`}
      key={article._id}
      className="first-of-type:col-span-2"
    >
      <Card className="hover:shadow-lg transition-shadow py-0">
        <CardContent className="p-4">
          <div className="relative w-full aspect-video mb-4">
            <Image
              src={article.mainImage}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
          <p className="text-sm text-stone-600 line-clamp-2">
            {article.subtitle}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="relative w-8 h-8">
              <Image
                src={`https://i.pravatar.cc/150?img=${article.author.name}`}
                alt={article.author.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium">{article.author.name}</p>
              <p className="text-stone-500">{article.author.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleThumbnail;
