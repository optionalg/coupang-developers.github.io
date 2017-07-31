export const changeSaleStatusToResumptionByProductDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `change-sale-status-to-resumption-by-product`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `change_sale_status_to_resumption_by_product`,
    name: `상품 아이템별 판매 재개`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `옵션별 판매여부 변경`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PUT`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/{vendorItemId}/sales/resume`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/{vendorItemId}/sales/resume`,
    _description: `상품 아이템별 판매여부를 변경한다. 이 기능은 업체상품 신청 후 승인이 완료되어 옵션아이디(vendorItemId)가 발급되면 사용할 수 있다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorItemId`,
        require: true,
        _description: `옵션아이디`,
        _relation: ``,
        _referenceInfo: `판매승인된 노출상품옵션`,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `결과코드`,
      _description: `SUCCESS/ERROR`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `결과 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
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
      "message": "판매가 재개되었습니다."
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
