export const allCharactersResponse = {
  code: 200,
  status: 'Ok',
  copyright: '© 2020 MARVEL',
  attributionText: 'Data provided by Marvel. © 2020 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>',
  etag: 'db0fb719d19ff0958298e52bc93fafc63e17d25f',
  data: {
    offset: 0,
    limit: 20,
    total: 1493,
    count: 20,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg'
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14'
            }
          ]
        }
      }
    ]
  }
}
