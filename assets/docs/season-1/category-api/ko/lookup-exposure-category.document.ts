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
      name: `노출카테고리 조회`,
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
      "code": "200",
      "message": "",
      "data": {
        "displayCategoryCode": 10,
        "name": "도서",
        "status": "ACTIVE",
        "child": [
          {
            "displayItemCategoryCode": 34405,
            "name": "국내도서",
            "status": "ACTIVE",
            "child": null
          },
          {
            "displayItemCategoryCode": 36982,
            "name": "외국도서",
            "status": "ACTIVE",
            "child": null
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
