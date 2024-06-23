import * as runtime from "react/jsx-runtime";

type MdxProps = {
  content: string;
};

const components = {};

const useMDXComponents = (content: string) => {
  const fn = new Function(content);
  return fn({ ...runtime }).default;
};

export default function MDXContent({ content }: MdxProps) {
  const Component = useMDXComponents(content);
  return <Component components={{ ...components }} />;
}
