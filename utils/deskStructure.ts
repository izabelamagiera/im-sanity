export const siteStructure = (S: any) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
    ])
