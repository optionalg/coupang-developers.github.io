export const exposureCategoryValidationDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `exposure-category-validation`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `exposure_category_validation`,
    name: `카테고리 유효성 검사`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `노출카테고리 유효성 검사`,
      anchorId: ``,
    },
  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/display-categories/{displayCategoryCode}/status`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/display-categories/{displayCategoryCode}/status`,
    _description: `해당 노출카테고리가 유효한지 체크한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `displayCategoryCode`,
        type: `String`,
        require: true,
        _description: `노출카테고리`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false
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
      type: `String`,
      _description: `SUCCESS/ERROR`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `String`,
      _description: `사용가능여부`,
      _relation: ``,
      _referenceInfo: `true or false`,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: {
          "code": "SUCCESS",
          "message": "",
          "data": true
        }
      }
    ],
    response: {
      "code": "200",
      "message": "",
      "data": {
        "code": "SUCCESS",
        "message": "",
        "data": "true"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
