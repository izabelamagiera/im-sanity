import {House} from '@phosphor-icons/react'
export const siteStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(House)
        .child(S.document().schemaType('home').documentId('home')),
    ])
