export const siteStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.document().schemaType('homepage').documentId('438efa62-442d-41c6-a48c-5b46aa31be3b'),
        ),
    ])
