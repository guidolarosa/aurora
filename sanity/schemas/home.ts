import { HomeIcon } from "@sanity/icons";
import { Rule } from "sanity";

export const home = {
  name: "home",
  type: "document",
  title: "Home",
  icon: HomeIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Home",
      disabled: true,
    },
    {
      name: "featuredArticle",
      title: "Featured Article",
      type: "reference",
      to: [{ type: "article" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
    {
      title: "Footer",
      name: "footer",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "externalLink",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        { type: "slug", title: "YouTube Embed" },
        {
          type: "image",
        },
      ],
    },
  ],
};
