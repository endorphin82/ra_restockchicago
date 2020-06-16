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
            category_id
            images {
                id
                url
            }
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
            images {
                id
                url
            }
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
  },
  ImageProd: {
    [GET_LIST]: gql`
        fragment imageProd on ImageProd {
            id
            url
            product_id
            product {
                id
                name
                description
                url
                icon
                price
            }
        }
    `
  },
  ImageCat: {
    [GET_LIST]: gql`
        fragment imageCat on ImageCat {
            id
            url
            category_id
            category {
                id
                name
                parent
                url
                description
                icon
            }
        }
    `
  }
}
