import { cn } from "@workspace/design-system/lib/utils";
import Link from "next/link";

type TTableOfContentsItem = {
  title: string;
  url: string;
  items: TTableOfContentsItem[];
};

type TTableOfContentsItemItemProps = {
  item: TTableOfContentsItem;
  depth: number;
};

type TTableOfContents = TTableOfContentsItem[];

export default function TableOfContents({ toc }: { toc: TTableOfContents }) {
  return (
    <div className="text-muted-foreground space-y-3">
      <h2 className="text-lg">Table of Contents</h2>

      <nav className="text-sm">
        <ul>
          {toc.map((item) => (
            <TableOfContentsItem key={item.url} item={item} depth={0} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

const TableOfContentsItem: React.FC<TTableOfContentsItemItemProps> = ({
  item,
  depth,
}) => {
  const indentClasses = ["ml-0", "ml-4", "ml-8", "ml-12", "ml-16"];
  const indent =
    depth < indentClasses.length
      ? indentClasses[depth]
      : indentClasses[indentClasses.length - 1];

  return (
    <li className={cn("list-none", indent)}>
      <Link href={item.url} className="hover:underline">
        {item.title}
      </Link>
      {item.items && item.items.length > 0 && (
        <ul>
          {item.items.map((child) => (
            <TableOfContentsItem
              key={child.url}
              item={child}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
