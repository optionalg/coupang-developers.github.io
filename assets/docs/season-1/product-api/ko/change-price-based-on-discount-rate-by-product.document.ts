export const changePriceBasedOnDiscountRateByProductDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `change-price-based-on-discount-rate-by-product`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `change_price_based_on_discount_rate_by_product`,
    name: `상품 아이템별 할인율 기준가격 변경`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `옵션별 할인율기준가 변경`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Gw`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PUT`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/{vendorItemId}/original-prices/{originalPrice}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/{vendorItemId}/original-prices/{originalPrice}`,
    _description: `상품 아이템별 할인율기준가를 변경한다. 이 기능은 업체상품 신청후 승인완료되어 옵션아이디(vendorItemId)가 발급되면 사용할 수 있다.`,
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
      }, {
        name: `originalPrice`,
        require: true,
        _description: `할인율기준가`,
        _relation: ``,
        _referenceInfo: `0원 부터 10원 단위로 입력 가능합니다.`,
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
      type: `String`,
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: `SUCCESS/ERROR`,
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
    endpoint: `https://api-gateway.coupang.com/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/3010120800/original-prices/100000`,
    code: [
      {
        language: `http`,
        codeblock: {}
      }
    ],
    response: {
      "code": "SUCCESS",
      "message": "Original price changing completed"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
