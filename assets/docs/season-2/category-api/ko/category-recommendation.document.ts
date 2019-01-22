export const categoryRecommendationDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `category-recommendation`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `category-recommendation`,
    name: `카테고리 추천`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: ``,
        path: ``,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: ``,
        path: ``,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2019-01-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v1/categorization/predict`,
    HMACPath: `/v2/providers/openapi/apis/api/v1/categorization/predict`,
    _description: `
        상품명을 입력하시면 적합한 쿠팡의 카테고리(displayCategoryCode)를 추천하는 API입니다.<br/>
        상품명 외에 상세 설명, 브랜드, 상품속성정보 등을 함께 입력하실 경우 더욱 정확한 추천 결과를 받으실 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>부정확한 정보 입력 시 정확한 카테고리가 추천되지 않을 수 있습니다. 추천된 카테고리를 확인 후 상품생성 시 활용해주시기 바랍니다.`,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `productName`,
        type: `String`,
        require: true,
        _description: `상품명`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
         name: `productDescription`,
         require: false,
         type: `String`,
         _description: `상품에 대한 상세설명`,
         _relation: ``,
         _referenceInfo: ``,
         _warning: ``,
         children: false
      },
       {
            name: `brand`,
            type: `String`,
            require: false,
            _description: `브랜드`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
       },   
      {
        name: `attributes`,
        type: `List`,
        require:false,
        _description: `상품속성정보 (예 : 사이즈, 색상, 소재 등)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `sellerSkuCode`,
        type: `String`,
        require:false,
        _description: `판매자상품코드(업체상품코드)`,
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
          _description: `Fail to communicate with the downstream domain services (catalog prediction service) : 카테고리 예측 도중 오류 발생.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        { 
          status: 400,
          _description: `Fail to communicate with the listing domain to retrieve category name : 상품 카테고리명 검색 도중 오류 발생.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `Receive error message from the downstream domain services (catalog prediction service) : 카테고리 예측 도중 오류 발생.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
  ],
   responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `HTTP Status Code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `HTTP Status message`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `autoCategorizationPredictionResultType`,
          type: `String`,
          _description: `결과 타입(SUCCESS, FAILURE, INSUFFICIENT_INFORMATION)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `comment`,
          type: `String`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `predictedCategoryId`,
          type: `String`,
          _description: `추천 카테고리ID (displayCategoryCode)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `predictedCategoryName`,
          type: `String`,
          _description: `추천 카테고리 명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
      ]
    }
  ],
  sample: {
    endpoint:'https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v1/categorization/predict',
    code: [
      {
        language: `http`,
        codeblock: {
            "productName":"코데즈컴바인 양트임싱글코트",
            "productDescription":"모니터 해상도, 밝기, 컴퓨터 사양 등에 따라 실물과 약간의 색상차이가 있을 수 있습니다. 캐주얼하지만 큐티한디자인이 돋보이는 싱글코트에요 약간박시한핏이라 여유있고 편하게  스타일링하기 좋은 캐주얼 싱글코트입니다. 컬러:베이지,네이비 사이즈:FREE 실측(측정자,측정기준,제작과정에따라 다소차이가있을수있습니다) 단면기준 CM 단위  가슴단면:61 어깨:54 팔기장:55(어깨절개선기준) 총장:88",
            "brand": "코데즈컴바인",
            "attributes": {
                "제품 소재": "모달:53.8 폴리:43.2 레이온:2.4 면:0.6",
                "색상": "베이지,네이비",
                "제조국": "한국"
            },
            "sellerSkuCode":"123123"
        }
      }
    ],
    response: {
        "code": 200,
        "message": "OK",
        "data": {
            "autoCategorizationPredictionResultType": "SUCCESS",
            "predictedCategoryId": "63950",
            "predictedCategoryName": "일반 섬유유연제",
            "comment": null
        }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
