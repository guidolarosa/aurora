import { HomeIcon, LockIcon } from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(S.document().schemaType("home").documentId("home")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["home"].includes(listItem.getId())
      ),
    ]);
