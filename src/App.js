import React, { Component } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import buildGraphQLProvider from '@ra-data-prisma/dataprovider'
import CategoryIcon from '@material-ui/icons/Category'
import './App.css'
import { ProductCreate, ProductEdit, ProductList, ProductShow } from './components/Product'
import { CategoryEdit, CategoryList } from './components/Category'
import { ImageprodCreate, ImageprodEdit, ImageprodList } from './components/ImageProd'

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
        <Resource name="Product"
                  list={ProductList}
                  create={ProductCreate}
                  edit={ProductEdit}
                  show={ProductShow}
        />
        <Resource name="Category"
                  list={CategoryList}
                  edit={CategoryEdit}
                  icon={CategoryIcon}
        />
        <Resource name="ImageProd"
                  list={ImageprodList}
                  edit={ImageprodEdit}
                  create={ImageprodCreate}
        />
      </Admin>
    )
  }
}

export default App
