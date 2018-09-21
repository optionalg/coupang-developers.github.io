export const changeBestPriceGuaranteedByProductDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `change-best-price-guaranteed-by-product`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `change-best-price-guaranteed-by-product`,
    name: `상품 아이템별 최저가 보장 변경(쿠런티)`,       // use display name, i will change 'translation key'
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
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/{vendorId}/{vendorItemId}/best-price-guaranteed-3p/{bestPriceGuaranteed3P}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/{vendorId}/{vendorItemId}/best-price-guaranteed-3p/{bestPriceGuaranteed3P}`,
    _description: `상품 아이템별 최저가 보장 여부를 변경한다.<br>
                   등록 후 승인이 완료되어 옵션아이디(vendorItemId)가 발급되면 사용할 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `쿠런티 자격을 얻은 판매자가 판매자점수 우수 판매자이면서, 배송비가 무료배송 또는 9,800원 이상 무료배송으로 등록한 상품에 적용이 가능합니다.`,
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
        name: `vendorId`,
        require: true,
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }, {
        name: `bestPriceGuaranteed3P`,
        require: true,
        _description: `최저가 보장 여부 변경`,
        _relation: ``,
        _referenceInfo: `true/false`,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: false
  },
    errorSpec: [
    {
      status: 400,
      _description: `해당 판매자는 쿠런티 변경이 허가되지 않았습니다. 쿠런티를 사용하고 싶으신 경우 판매자 콜센터(sellerhelp@coupang.com)로 연락해주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `해당 카테고리는 쿠런티 설정할 수 없습니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `중고상품에는 쿠런티를 적용할 수 없습니다`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `무료배송 혹은 9800원 이상 무료배송의 경우에만 쿠런티를 등록할 수 있습니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `쿠런티 상품에는 2500원을 초과하는 배송비를 설정할 수 없습니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
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
    endpoint: `https://api-gateway.coupang.com/targets/wing/seller_api/apis/api/v1/marketplace/vendor-items/A00000001/3361720646/best-price-guaranteed-3p/true`,
    code: [
      {
        language: `http`,
      }
    ],
    response: {
        "code":"SUCCESS","message":"쿠런티 변경을 완료했습니다.","data":null
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
