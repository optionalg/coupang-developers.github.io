export const changePriceByProductDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `change-price-by-product`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `change_price_by_product`,
    name: `상품 아이템별 가격 변경`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PUT`,
    path: `/v2/providers/seller_api/apis/api/v1/marketplace/vendor-items/{vendorItemId}/prices/{price}`,
    HMACPath: `/v2/providers/seller_api/apis/api/v1/marketplace/vendor-items/{vendorItemId}/prices/{price}`,
    _description: `상품 아이템별 가격을 변경한다. 상품 승인이 완료되어 옵션아이디(vendorItemId)가 발급되면 사용할 수 있다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `forceSalePriceUpdate=true 으로 요청 시 변경 비율 제한없이 가격변경이 가능합니다.`,
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
      },
      {
        name: `price`,
        require: true,
        _description: `가격`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: [
      {
        name: `forceSalePriceUpdate`,
        require: false,
        _description: `가격 변경 비율 제한 여부`,
        _relation: ``,
        _referenceInfo: `
false(default 값) or true (가격 변경 비율 제한 없음)<br/> `,
        _warning: `입력 실수 방지를 위해 기존 가격 대비 변경할 수 있는 가격 비율 제한함. 
                        <br/>forceSalePriceUpdate=true 를 추가해서 가격변경 요청 시 처리 가능함.`
      }
    ],
    bodyParameters: false
  },
    errorSpec: [
        {
          status: 400,
          _description: `가격변경에 실패했습니다. [옵션ID[3572784698] : 판매가 변경이 불가능합니다. 변경전 판매가의 최대 50% 인하/최대 100%인상까지 변경가능합니다.]`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
    ],
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/seller_api/apis/api/v1/marketplace/vendor-items/3572784698/prices/49000?forceSalePriceUpdate=true`,
    code: [
      {
        language: `http`
      }
      
    ],
    response: {
      "code": "SUCCESS",
      "message": "가격 변경을 완료했습니다.",
      "data":null
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
