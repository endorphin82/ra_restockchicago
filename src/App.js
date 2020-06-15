import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'
import buildGraphQLProvider from '@ra-data-prisma/dataprovider'

import './App.css'
import { ProductList } from './components/ProductList'
import { CategoryList } from './components/CategoryList'

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
          list={ProductList}/>

        <Resource
          name="Category"
          list={CategoryList}
        />

      </Admin>
    )
  }
}

export default App
