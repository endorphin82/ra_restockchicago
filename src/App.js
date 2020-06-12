import React, { Component } from 'react';
import { Admin, Resource, GET_LIST } from 'react-admin';
import get from 'lodash/get';
// import buildGraphQLProvider from '@ra-data-prisma/dataprovider'

import buildPrismaProvider, { buildQuery } from 'ra-data-opencrud';
import overridenQueries from './queries';

import './App.css';
import { ProductList } from './components/ProductList'
import { CategoryList } from './components/CategoryList'

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (fetchType, resourceName, params) => {
  const fragment = get(overridenQueries, `${resourceName}.${fetchType}`);

  return buildQuery(introspectionResults)(fetchType, resourceName, params, fragment);
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dataProvider: null };
  }
  // clientOptions: { uri: 'https://eu1.prisma.sh/flavian/ra-data-prisma/dev' },
  componentDidMount() {
    buildPrismaProvider({
    // buildGraphQLProvider({
      clientOptions: { uri: 'http://localhost:3005' },
      buildQuery: enhanceBuildQuery(buildQuery)
    }).then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin title="Prisma e-commerce" dataProvider={dataProvider}>
        <Resource name="Product" list={ProductList} />

        <Resource
          name="Category"
          list={CategoryList}
        />

      </Admin>
    );
  }
}

export default App;
