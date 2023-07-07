import TerminusClient from '@terminusdb/terminusdb-client';

const client = new TerminusClient.WOQLClient('https://cloud.terminusdb.com/Lopenling/', {
  user: 'openpecha@gmail.com',
  organization: 'Lopenling',
  token: process.env.TERMINUSDB_ACCESS_TOKEN,
});
function generate_diff(json1, json2){
  return client.getJSONDiff(json1, json2);
}

export {client,generate_diff};
