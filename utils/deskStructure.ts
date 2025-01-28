import {Flag, FolderSimplePlus, HandPointing, House, PuzzlePiece, Star} from '@phosphor-icons/react'
export const siteStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(House)
        .child(S.document().schemaType('home').documentId('home')),
        S.divider(),
        S.documentTypeListItem('project')
                .title('Projects')
                .icon(FolderSimplePlus),
        S.divider(),
      S.listItem()
        .title('Components')
        .icon(PuzzlePiece)
        .child(
          S.list()
          .title('Components')
          .items([
            S.documentTypeListItem('Button')
              .title('Buttons')
              .icon(HandPointing),
            S.divider(),
            S.documentTypeListItem('Masthead')
              .title('Hero masthead')
              .icon(Flag),
            S.divider(),
            S.documentTypeListItem('Review')
              .title('Reviews')
              .icon(Star)
          ])
        )
        
    ])
