export const siteStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([S.listItem().title('Home').child(S.document().schemaType('home').documentId('home'))])
