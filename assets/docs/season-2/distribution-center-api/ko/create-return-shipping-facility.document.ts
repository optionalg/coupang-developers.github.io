export const createReturnShippingFacilityDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `distribution-center-api`,   // input category ex) exchange-service-api
    id: `create-return-shipping-facility`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_return_shipping_facility`,
    name: `반품지 생성`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1300, // use order priority. 1 is high(top),
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
        apiName: `반품지 생성`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/return/shipping-place-creations`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `반품지 생성`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: `GreatWall`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters`,
    _description: `반품지를 생성합니다. 셀러는 이API를 사용하여 하나 이상의 주소를 만들 수 있으며 반품배송에 사용됩니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `벤더 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `벤더 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `유저 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `shippingPlaceName`,
        type: `String`,
        require: false,
        _description: `반품지 이름`,
        _relation: ``,
        _referenceInfo: `"null"인 경우, 반품지이름은 변하지 않습니다`,
        _warning: ``,
        children: false
      },
      {
        name: `goodsflowInfoOpenApiDto`,
        type: `Object`,
        require: false,
        _description: `상품정보`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `deliverCode`,
            type: `String`,
            require: true,
            _description: `택배사 코드`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `deliverName`,
            type: `String`,
            require: false,
            _description: `택배사 이름`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `contractNumber`,
            type: `String`,
            require: true,
            _description: `계약 번호`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `contractCustomerNumber`,
            type: `String`,
            require: false,
            _description: `계약된 고객님수량`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee05kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee05kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee05kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee05kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee10kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee10kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee10kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee10kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee20kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee20kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee20kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee20kg`,
            type: `Number`,
            require: true,
            _description: `0보다 커야합니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
        ]
      },
      {
        name: `placeAddresses`,
        type: `Array`,
        require: false,
        _description: `주소`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `addressType`,
            type: `String`,
            require: true,
            _description: ``,
            _relation: ``,
            _referenceInfo: `
            <table>
              <tr>
                  <th>
                      value
                  </th>
                  <th>
                      remark
                  </th>
              </tr>
              <tr>
                  <td>JIBUN</td>
                  <td>Only one Address</td>
              </tr>
              <tr>
                  <td>JIBUN/ROADNAME</td>
                  <td>Two or more addresses, at lease one type is JIBUN</td>
              </tr>
           </table>
            `,
            _warning: ``,
            children: false
          },
          {
            name: `companyContactNumber`,
            type: `String`,
            require: true,
            _description: `전화번호, e.g. : xx-yyy-zzzz, x : 수자 , minimum length is 2, maximum length is 4 ,y :minimum length is 3, maximum length is 4, z :valid lenth is 4`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `phoneNumber2`,
            type: `String`,
            require: false,
            _description: `전화번호 (포맷 : phoneNumber1과 같습니다)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnZipCode`,
            type: `String`,
            require: true,
            _description: `우편번호: 수자, minimum length is 5, maximum length is 6`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddress`,
            type: `String`,
            require: true,
            _description: `주소이름, 주소지 이름은 150자 이하로 입력해 주세요`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddressDetail`,
            type: `String`,
            require: false,
            _description: `주소, 200자 이하로 입력해 주세요`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
        ]
      },
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `http 반품요청 상태 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `http 반품요청 상태 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `http 반품요청 결과(결과 코드 & 메세지가 포함됨)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `returnCenterCode`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/returnShippingCenters`,
    code: [
      {
        language: `http`,
        codeblock: {
          "userId":"coupang20",
          "vendorId":"A00010028",
          "shippingPlaceName":"tes789020",
          "goodsflowInfoOpenApiDto":{
            "deliverCode":"DONGBU",
            "contractNumber":"85500067",
            "contractCustomerNumber":"1231299920",
            "vendorCreditFee05kg":"1",
            "vendorCreditFee10kg":"1",
            "vendorCreditFee20kg":"1",
            "vendorCashFee05kg":"1",
            "vendorCashFee10kg":"2",
            "vendorCashFee20kg":"2",
            "consumerCashFee05kg":"2",
            "consumerCashFee10kg":"2",
            "consumerCashFee20kg":"3",
            "returnFee05kg":"1",
            "returnFee10kg":"2",
            "returnFee20kg":"3"

          },
          "placeAddresses":[{
            "addressType":"JIBUN",
            "companyContactNumber":"139-2029-0520",
            "phoneNumber2":"",
            "returnZipCode":"112207",
            "returnAddress":"abdsplendidg2520",
            "returnAddressDetail":""
          },{
            "addressType":"ROADNAME",
            "companyContactNumber":"139-2029-0520",
            "phoneNumber2":"",
            "returnZipCode":"112207",
            "returnAddress":"abdsplendidg2520",
            "returnAddressDetail":""
          }]

        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "1100044670"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
