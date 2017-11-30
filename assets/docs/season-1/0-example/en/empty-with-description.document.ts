export const emptyWithDescriptionDocument = {
  // every name, _description, _relation, _refenceInfo, _warning, input *korean*
  
  // will support HTML tag in _description, _relation, _referenceInfo, _warning
  // but please doesn't use for like highlight
  // that's consistency is reduced.
  
  // _description   -> input description for explain
  // _relation      -> input the relation api ex) this parameter can get via 'xxx' API
  // _referenceInfo -> ex>
  // _warning       -> something input warning
  
  // every name, _description, _relation, _refenceInfo, _warning, input *korean*
  
  note: ``, // note for internal developer
  
  //don't modify documentInfo
  documentInfo: {
    category: ``,   // input category ex) exchange-service-api
    id: ``,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    name: ``,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``
  },
  
  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,  // input developer name
    domain: `https://api-gateway.coupang.com`,     // `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/`
    httpMethod: ``, // GET, POST, PUT, DELETE
    path: ``,       // '/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries'
    HMACPath: ``,
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    // if not use change like this
    // pathSegmentParameters: false,
    pathSegmentParameters: [
      {
        name: ``,      // input korean
        require: true, // true || false
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    // if not use change like this
    // queryStringParameters: false,
    queryStringParameters: false,
    // if not use change like this
    // bodyParameters: false,
    bodyParameters: [
      {
        name: ``,
        // input type only
        // Number, String, Boolean, Array, Value, Object, Whitespace
        type: ``,
        require: false,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: `code`,
      // input type only
      // Number, String, Boolean, Array, Value, Object, Whitespace
      type: `Number`,
      _description: `server response status code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    //children depth 1 example
    {
      name: `data`,
      type: `Array`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    code: [
      {
        language: `http`,
        codeblock: {}
      }
    ],
    response: {
      "code": "200",
      "message": "",
      "data": {}
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
