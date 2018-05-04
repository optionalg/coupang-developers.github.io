export const lookupExposureCategoryDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-exposure-category`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_exposure_category`,
    name: `카테고리 조회`,       // use display name, i will change 'translation key'
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
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/display-categories/{displayCategoryCode}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/display-categories/{displayCategoryCode}`,
    _description: `노출 카테고리 정보를 노출 카테고리 코드를 이용하여 조회한다.`,
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
        _description: `노출카테고리코드	`,
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
      _relation: `SUCCESS/ERROR`,
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
      type: `Array`,
      _description: `노출카테고리목록`,
      _relation: ``,
      _referenceInfo: `조회된 노출 카테고리 개수만큼 N번 반복`,
      _warning: ``,
      children: [
        {
          name: `displayCategoryCode`,
          type: `String`,
          _description: `노출카테고리코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `name`,
          type: `String`,
          _description: `노출카테고리명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `status`,
          type: `String`,
          _description: `노출카테고리상태`,
          _relation: ``,
          _referenceInfo: `<table class="table">
        <tr>
          <th>Status</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>ACTIVE</td>
          <td>서비스중</td>
        </tr>
        <tr>
          <td>READY</td>
          <td>서비스 준비중</td>
        </tr>
        <tr>
          <td>DISABLED</td>
          <td>사용 안함</td>
        </tr>
        </table>`,
          _warning: ``,
          children: false,
        },
        {
          name: `child`,
          type: `String`,
          _description: `하위노출카테고리`,
          _relation: ``,
          _referenceInfo: `조회된 카테고리 코드의 1 Depth 하위 카테고리 List 표시.(2 Depth 이상의 child 는 표시하지 않음.) child 카테고리가 없을 경우 null 또는 빈 배열 반환`,
          _warning: `1 Depth 카테고리 조회는 displayCategoryCode 파라메터 값을 0으로 설정하면 가능합니다.`,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/targets/wing/seller_api/apis/api/v1/marketplace/meta/display-categories/0`,
    code: [
      {
        language: `http`,
        codeblock: null
      }
    ],
    response: {
      "code": "SUCCESS",
      "message": "",
      "data": {
        "displayItemCategoryCode": 0,
        "name": "ROOT",
        "status": "ACTIVE",
        "child": [
          {
            "displayItemCategoryCode": 77834,
            "name": "가구/홈데코",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 62588,
            "name": "가전/디지털",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 66679,
            "name": "도서",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 79648,
            "name": "문구/오피스",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 65799,
            "name": "반려/애완용품",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 56112,
            "name": "뷰티",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 63897,
            "name": "생활용품",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 103371,
            "name": "스포츠/레져",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 59258,
            "name": "식품",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 102984,
            "name": "완구/취미",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 79138,
            "name": "음반/DVD",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 78647,
            "name": "자동차용품",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 80285,
            "name": "주방용품",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 76844,
            "name": "출산/유아동",
            "status": "ACTIVE",
            "child": [
              
            ]
          },
          {
            "displayItemCategoryCode": 69182,
            "name": "패션의류잡화",
            "status": "ACTIVE",
            "child": [
              
            ]
          }
        ]
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
