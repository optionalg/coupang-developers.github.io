export const cancelExchangeProductCoupangConfirmRequestDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `exchange-api`,   // input category ex) exchange-service-api
    id: `cancel-exchange-product-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `cancel_exchange_product_coupang_confirm_request`,
    name: `교환상품 쿠팡확인요청 취소`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `쿠팡 교환확인 요청취소`,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `교환상품 쿠팡확인요청 취소`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/coupang-confirm-requests`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `교환상품 쿠팡확인요청 취소`,
        path: `/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/coupangConfirmations`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-20`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Nemo`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `DELETE`,
    path: `/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/coupangConfirmations`,
    HMACPath: `/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/coupangConfirmations`,
    _description: `셀러가 교환제품에대해 쿠팡확인요청을 취소 하는것입니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `쿠팡교환확인요청을 취소하려는 교환번호`,
        _relation: `ExchangeId is from:GET /v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests`,
        _referenceInfo: ``,
        _warning: ``
      },
      {
        name: `vendorId`,
        require: true,
        _description: `vendor id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: false
  },
  errorSpec: [
    {
      status: 400,
      _description: `params is not allowed null...`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `No exchange information has been found in Coupang Confirmation Request.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `VendorId doesn't match the exchangeId, please check.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `There is no exchange coupang confirm request history.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Exchange coupang confirm request has been withdrawn.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `http 반품요청 상태 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `http 반품요청 상태 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: `http 반품요청 결과(결과 코드와 메시지가 포함됨)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `결과 메시지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/coupangConfirmations`,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
      "code": "200",
      "message": "Cancel exchange coupang confirm request success!",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "SUCCESS!"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
