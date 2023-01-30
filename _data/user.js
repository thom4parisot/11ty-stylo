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
  user {
    _id
    displayName

    tags {
      _id
      name
      color
      description
    }
  }
}`

module.exports = async function() {
  // via https://github.com/apollographql/graphql-tag/issues/206#issuecomment-489168909
  const body = JSON.stringify({
    query: print(query)
  })

  const { data, errors } = await EleventyFetch(`${url}?__query=${body}`, {
    duration: '1d',
    type: 'json',
    fetchOptions: {
      method: 'POST',
      headers,
      body
    }
  })

  if (errors) {
    console.error(errors)
    process.exit(1)
  }

  return data.user
};
