export const lookupExposureCategoryListDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-exposure-category-list`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_exposure_category_list`,
    name: `카테고리 목록 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `노출카테고리 전체목록 조회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/display-categories`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/display-categories`,
    _description: `노출 카테고리 목록을 전체 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
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
          _referenceInfo: `조회된 노출 카테고리 개수만큼 N번 반복`,
          _warning: ``,
          children: false
        },
        {
          name: `name`,
          type: `String`,
          _description: `노출카테고리명`,
          _relation: ``,
          _referenceInfo: `조회된 노출 카테고리 개수만큼 N번 반복`,
          _warning: ``,
          children: false
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
          children: false
        },
        {
          name: `child`,
          type: `Array`,
          _description: `하위노출카테고리`,
          _relation: ``,
          _referenceInfo: `없으면 null, 카테고리 정보는 동일함.`,
          _warning: ``,
          children: [
            {
              name: `displayCategoryCode`,
              type: `String`,
              _description: `참조`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `name`,
              type: `String`,
              _description: `참조`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `status`,
              type: `String`,
              _description: `참조`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `child`,
              type: `String`,
              _description: `하위노출카테고리`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
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
        "code": "SUCCESS",
        "message": "",
        "data": {
          "displayCategoryCode": 0,
          "name": "ROOT",
          "status": "READY",
          "child": [
            {
              "displayCategoryCode": 1010,
              "name": "패션의류",
              "status": "ACTIVE",
              "child": [
                {
                  "displayCategoryCode": 1040,
                  "name": "여성의류",
                  "status": "ACTIVE",
                  "child": [
                    {
                      "displayCategoryCode": 1300,
                      "name": "티셔츠",
                      "status": "ACTIVE",
                      "child": [
                        {
                          "displayCategoryCode": 3000,
                          "name": "여성 긴소매 티셔츠",
                          "status": "ACTIVE",
                          "child": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
