export const lookupExposureProductListPagingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-exposure-product-list-paging`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_exposure_product_list_paging`,
    name: `노출상품 목록 페이징 조회`,       // use display name, i will change 'translation key'
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
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/products?productName={productName}&nextToken={nextToken}&maxPerPage={maxPerPage}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/products?productName={productName}&nextToken={nextToken}&maxPerPage={maxPerPage}`,
    _description: `노출상품 목록을 노출상품명으로 페이징 조회를 한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: [
      {
        name: `productName`,
        type: `String`,
        require: true,
        _description: `노출상품명`,
        _relation: ``,
        _referenceInfo: `PDP에 노출되는 상품명`,
        _warning: ``
      },
      {
        name: `nextToken`,
        type: `Number`,
        require: false,
        _description: `페이지. 기본값 1입니다.	`,
        _relation: ``,
        _referenceInfo: `다음 페이지를 호출하기 위한 키값. 첫 페이지 호출시에는 넣지 않거나 '1' 입력`,
        _warning: ``
      },
      {
        name: `maxPerPage`,
        type: `Number`,
        require: false,
        _description: `페이지당건수. 기본값 10입니다.`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    bodyParameters: false
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
      _referenceInfo: `SUCCESS/ERROR`,
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
      name: `nextToken`,
      type: `String`,
      _description: `다음 페이지`,
      _relation: ``,
      _referenceInfo: `만약 다음 페이지가 없을 경우 없거나 빈문자열`,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `노출상품목록`,
      _relation: ``,
      _referenceInfo: `노출상품 목록 개수 만큼 반복`,
      _warning: ``,
      children: [
        {
          name: `productId`,
          type: `String`,
          _description: `ProductID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `productName`,
          type: `String`,
          _description: `노출상품명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `description`,
          type: `String`,
          _description: `노출상품설명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `categoryId`,
          type: `String`,
          _description: `카테고리아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `bundled`,
          type: `String`,
          _description: `Bundle여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `valid`,
          type: `String`,
          _description: `사용여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `categoryFullPath`,
          type: `String`,
          _description: `관리카테고리전체경로`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `itemCount`,
          type: `String`,
          _description: `옵션개수`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
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
      "code": "SUCCESS",
      "message": "",
      "nextToken":3,
      "data": [
        {
          "productId": 21493,
          "divisionType": "쇼핑",
          "productName": "나이키 월드",
          "description": "",
          "categoryId": 2684,
          "bundled": false,
          "valid": true,
          "categoryFullPath": "KAN>스포츠용품>구기스포츠용품>야구용품>야구화",
          "itemCount": 0
        },
        {
          "productId": 21492,
          "divisionType": "쇼핑",
          "productName": "나이키 월드",
          "description": "",
          "categoryId": 2684,
          "bundled": false,
          "valid": true,
          "categoryFullPath": "KAN>스포츠용품>구기스포츠용품>야구용품>야구화",
          "itemCount": 0
        },
        {
          "productId": 21491,
          "divisionType": "쇼핑",
          "productName": "나이키 REVOLUTION 2 GS (555082-013473)",
          "description": "",
          "categoryId": 2684,
          "bundled": false,
          "valid": true,
          "categoryFullPath": "KAN>스포츠용품>구기스포츠용품>야구용품>야구화",
          "itemCount": 0
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
