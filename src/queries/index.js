import { GET_LIST } from 'react-admin'
import gql from 'graphql-tag'

export default {
  Product: {
    [GET_LIST]: gql`
        fragment product on Product {
            id
            name
            description
            url
            icon
            price
            category{
                id
                name
                parent
                url
                description
                icon
            }
        }
    `
  },
  Category: {
    [GET_LIST]: gql`
        fragment category on Category {
            id
            name
            parent
            url
            description
            icon
            products {
                id
                name
                url
                description
                icon
                price
            }
        }
    `
  }
}
