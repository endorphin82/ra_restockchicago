import React, { Component } from 'react'
import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin'
import buildGraphQLProvider from '@ra-data-prisma/dataprovider'

import './App.css'
import { ProductCreate, ProductEdit, ProductList } from './components/Product'
import { CategoryEdit, CategoryList } from './components/Category'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { dataProvider: null }
  }

  // clientOptions: { uri: 'https://eu1.prisma.sh/flavian/ra-data-prisma/dev' },
  componentDidMount() {
    buildGraphQLProvider({
      clientOptions: { uri: 'http://localhost:3005' }
    }).then(dataProvider => this.setState({ dataProvider }))
  }

  render() {
    const { dataProvider } = this.state
    if (!dataProvider) {
      return <div>Loading</div>
    }

    return (
      <Admin title="Prisma e-commerce" dataProvider={dataProvider}>
        <Resource
          name="Product"
          list={ProductList} create={ProductCreate}
          edit={ProductEdit}
        />

        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
        />

      </Admin>
    )
  }
}

export default App
