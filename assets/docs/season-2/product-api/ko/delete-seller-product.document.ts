export const deleteSellerProductDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `delete-seller-product`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `delete_seller_product`,
    name: `상품 삭제`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `업체상품 삭제`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `DELETE`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/{sellerProductId}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/{sellerProductId}`,
    _description: `업체상품을 삭제한다.(상품이 승인중 상태가 아니고, 포함된 옵션이 모두 판매중지 상태인 경우 삭제가능)`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `sellerProductId`,
        require: true,
        _description: `업체상품아이디`,
        _relation: ``,
        _referenceInfo: `URL에 포함됨`,
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
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: `SUCCES/ERROR`,
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
      _description: `업체상품아이디`,
      _relation: ``,
      _referenceInfo: `생성된 업체상품아이디`,
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
        }
      }
    ],
    response: {
      "code": "SUCCESS",
      "message": "삭제되었습니다",
      "data": 7803
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
