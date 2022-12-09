const EleventyFetch = require('@11ty/eleventy-fetch')
const { gql } = require('graphql-tag')
const { print } = require('graphql')

const { STYLO_GRAPHQL_ENDPOINT: url = 'https://stylo.huma-num.fr/graphql' } = process.env
const { STYLO_GRAPHQL_TOKEN: token } = process.env

const headers = {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
}

const query = gql`query {
  articles {
    _id
    title
    zoteroLink
    createdAt
    updatedAt

    contributors {
      user {
        _id
        displayName
      }
    }

    tags {
      _id
      name
      color
    }

    workingVersion {
      bib
      md
      yaml
    }

    versions {
      _id
      name
      version
      revision
      createdAt
      updatedAt
    }
  }
}`

module.exports = async function() {
  // via https://github.com/apollographql/graphql-tag/issues/206#issuecomment-489168909
  const body = JSON.stringify({
    query: print(query)
  })

  const { data } = await EleventyFetch(`${url}?__query=${body}`, {
    duration: '1d',
    type: 'json',
    fetchOptions: {
      method: 'POST',
      headers,
      body
    }
  })

  return data.articles
};
