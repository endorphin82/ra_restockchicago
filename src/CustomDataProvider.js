import buildOpenCrudProvider, { buildQuery } from 'ra-data-opencrud';
// import { buildQuery } from 'ra-data-opencrud';
import buildGraphQLProvider  from '@ra-data-prisma/dataprovider'
// import buildGraphQLProvider , { buildQuery } from '@ra-data-prisma/dataprovider'
import { gql } from 'graphql-tag'

const enhanceBuildQuery = introspection => (fetchType, resource, params) => {
  const builtQuery = buildQuery(introspection)(fetchType, resource, params);

  if (resource === 'ImageProd' && fetchType === 'CRUD_CREATE') {
    return {
      // Use the default query variables and parseResponse
      ...builtQuery,
      // Override the query
      // mutation: gql`
      //     mutation UploadFile($file: Upload!) {
      //         uploadFile(file: $file)
      //     }`,
    };
  }

  return builtQuery;
}

export default buildOpenCrudProvider({ buildQuery: enhanceBuildQuery })
