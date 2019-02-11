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
쿠팡 카테고리 추천 API는 판매자님이 가지고 계신 상품정보(상품명, 브랜드, 속성 등)를 입력하시면, 해당 정보와 가장 일치하는 쿠팡 카테고리(displayCategoryCode)를 찾아서 제안해주는 서비스입니다.<br/>
카테고리 추천 API는 과거 등록되었던 상품의 쿠팡 카테고리를 시스템에 학습시킨 기계학습모델로 서비스되고 있습니다. 
<br/>부정확한 정보 입력 시 정확한 카테고리가 추천되지 않을 수 있습니다.<br/><br/>`,
 _relation: `카테고리 추천 API의 결과를 판매자님의 상품 생성에 적용 여부는 판매자님의 선택입니다.<br/> 
쿠팡은 카테고리에 따른 책정 수수료가 상이하므로, 카테고리 선택 시 이점 유의해주시기 바랍니다.<br/> 
카테고리 추천 API가 정확한 결과 값을 전달하지 못할 경우, 이에 따른 불이익은 쿠팡에서 책임지지 않습니다.<br/><br/>`,

_referenceInfo: `
◼︎ 카테고리 추천 API 예시 : <br/>
입력 정보 : “[유한양행] 유한젠 가루세제 1kg 용기(살균표백제)x10개”<br/>
쿠팡 카테고리 추천 API는 먼저, 입력된 정보에 가장 가까운 대분류 카테고리인 “생활용품”을 찾습니다. <br/>
이후 그 하위 카테고리인 “세제”를 찾고 내부적으로 계속 알맞은 하위 카테고리를 찾아 최종적으로 “생활용품>세제>세탁세제>표백제>분말형” 카테고리를 제안합니다.
<br/><br/>
    <table class="table">
        <tr>
            <th>입력 정보</th>
            <th>제안 결과</th>
        </tr>
        <tr>
           <td>[유한양행] 유한젠 가루세제 1kg 용기(살균표백제)x10개</td>
           <td>생활용품>세제>세탁세제>표백제>분말형 (5depth leaf catecode: 63955)</td>
        </tr>
        <tr>
           <td>[유한양행] 유한젠 액체세제 1.8L 리필 (살균표백제)</td>
           <td>생활용품>세제>세탁세제>표백제>액상형 (5depth leaf catecode: 63954)</td>
        </tr>
        <tr>
           <td>[유한양행] 유한락스 파워젤 1L (살균/악취제거)x10개</td>
           <td>생활용품>세제>청소세제>락스/살균소독제 (4depth leaf catecode: 63922)</td>
        </tr>
    </table>
   
이 모델은 입력된 정보에 절대적으로 의존하기 때문에 정확한 제안 결과를 받기 위해서는 명확하고 충분하게 상세한 상품 정보 입력이 요구됩니다.<br/> 
예를 들면 위의 예제와 달리 입력 정보를 단순화하여 “[유한양행] 유한젠 (살균표백제)” 로 입력할 경우, 상품 타입을 알 수 있는 필수적인 정보가 없기 때문에 가루세제인지 액체세제인지 명확하게 알 수 없습니다. 따라서 잘못된 결과 값을 줄 수 있습니다. <br/>
또는 “[유한양행] 유한젠 가루/액체 (살균표백제)” 와 같이 분말형인지 액상형인지 모호한 두 가지 키워드를 한 상품에 동시에 입력할 경우에도, 잘못된 카테고리 결과를 제안할 수 있습니다. <br/>`,
 _warning : `
<br/>따라서 쿠팡 카테고리 추천 API를 사용할 때는 아래의 사항을 주의해주시기 바랍니다.<br/><br/>
1.  최대한 상품 특성이 잘 나타날 수 있도록 상품명에 상품 정보를 상세하게 입력해야 합니다.<br/>
나쁜 상품명 예시: “라운드티셔츠 gn 95 aden 그린 계열” <br/><br/>
패션 의류의 경우 최소한 여성용/남성용/남녀공용인지 상품명에 들어가 있는 것이 좋습니다. <br/>
또한 단순히 ‘라운드티셔츠'라는 키워드보다는 맨투맨 티셔츠인지, 후드 티셔츠인지, 긴소매인지 반소매인지 등의 정보를 상품명에 함께 입력한다면 보다 정확한 카테고리 분류를 도와줄 수 있습니다.<br/>
좋은 상품명 예시: “라운드티셔츠 남성 긴팔 맨투맨  gn 95 aden 그린 계열” <br/><br/>

2.  하나의 상품명에 서로 다른 타입의 상품이 들어가지 않도록 주의해야 합니다. 잘못된 키워드를 입력한 경우, 잘못된 카테고리를 추천 받을 수 있습니다.<br/>
나쁜 상품명 예시: “애견 캐리어 애견 장난감 애견 의류 리드줄”<br/><br/>
사람이 상품명을 보아도 어떤 상품인지 예측이 쉽지 않은 위와 같은 경우는 쿠팡 카테고리 추천 API에서도 정확하게 제안할 수가 없습니다. <br/>
딜 형식으로 상품명을 등록하지 않도록 주의해주시고, 검색 키워드와 상품명을 구분하여 정확한 상품명을 입력해주시기 바랍니다. <br/>
좋은 상품명 예시: “애견 강아지 자동 리드줄”`,
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
