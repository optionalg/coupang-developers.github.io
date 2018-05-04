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
    _description: `상품 반품지를 생성합니다. 판매자는 이 API를 사용하여 하나 이상의 반품지를 만들 수 있으며, 생성된 반품지는 상품 등록 시 반품지를 지정할 때 사용됩니다.
`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 코드`,
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
        _description: `업체 코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `사용자 아이디(쿠팡 WING 아이디)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `shippingPlaceName`,
        type: `String`,
        require: true,
        _description: `반품지 이름`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `goodsflowInfoOpenApiDto`,
        type: `Object`,
        require: true,
        _description: `택배사 정보`,
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
            _referenceInfo: `
              <table class="table">
               <tr>
                  <th>CODE</th>
                  <th>NAME</th>
                </tr>
                <tr>
                  <td>HYUNDAI</td>
                  <td>롯데택배</td>
                </tr>
                <tr>
                  <td>KGB</td>
                  <td>로젠택배</td>
                </tr>
                <tr>
                  <td>EPOST</td>
                  <td>우체국</td>
                </tr>
                <tr>
                  <td>HANJIN</td>
                  <td>한진택배</td>
                </tr>
                <tr>
                  <td>CJGLS</td>
                  <td>CJ대한통운</td>
                </tr>
          
                <tr>
                  <td>DONGBU</td>
                  <td>드림택배</td>
                </tr>
              </table>
            `,
            _warning: `위 택배사들만 반품지 택배사로 등록가능합니다.`,
            children: false
          },
          {
            name: `deliverName`,
            type: `String`,
            require: false,
            _description: `택배사명`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `contractNumber`,
            type: `String`,
            require: true,
            _description: `택배사 계약코드`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `contractCustomerNumber`,
            type: `String`,
            require: false,
            _description: `업체코드`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 신용요금 (판매자 신용)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 선불요금 (판매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 착불요금(구매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 반품비`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 신용요금 (판매자 신용)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 선불요금(판매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 착불요금(구매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 반품비`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 신용요금 (판매자 신용)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 선불요금 (판매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 착불요금(구매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 반품비`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
        ]
      },
      {
        name: `placeAddresses`,
        type: `Array`,
        require: false,
        _description: `반품지 주소`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `addressType`,
            type: `String`,
            require: true,
            _description: `주소 타입 <br/> JIBUN, JIBUN&ROADNAME`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
                <tr>
                  <th>CODE</th>
                  <th>Mean</th>
                </tr>
                <tr>
                  <td>JIBUN</td>
                  <td>지번, 1개의 주소만 등록시는 JIBUN으로 등록</td>
                </tr>
                <tr>
                  <td>JIBUN&ROADNAME</td>
                  <td>지번주소/도로명주소, 복수개의 주소 등록시 두 타입 모두 사용 가능</td>
                </tr>
            </table>`,
            _warning: ``,
            children: false
          },
          {
            name: `companyContactNumber`,
            type: `String`,
            require: true,
                _description: `전화번호, e.g. : xx-yyy-zzzz, <br/>
                          x : 숫자 , 최소길이2, 최대길이 4 <br/>
                          y : 최소길이 3, 최대길이 4 <br/>
                          z : 유효한 길이 4.`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `phoneNumber2`,
            type: `String`,
            require: false,
            _description: `보조 전화번호 (형식 : 전화번호1과 같습니다)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnZipCode`,
            type: `String`,
            require: true,
            _description: `우편번호 : 숫자, 최소길이 5, 최대길이 6`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddress`,
            type: `String`,
            require: true,
            _description: `주소, 최대길이는 150`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddressDetail`,
            type: `String`,
            require: false,
            _description: `상세주소, 최대길이는 200`,
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
      _description: `서버 응답 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `반품지 생성 결과`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `결과 코드`,
          _relation: ``,
          _referenceInfo: `SUCCESS or FAIL`,
          _warning: ``,
          children: false,
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `결과 메시지(반품지 코드)`,
          _relation: ``,
          _referenceInfo: `returnCenterCode`,
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
            "vendorCreditFee05kg":"2500",
            "vendorCreditFee10kg":"2500",
            "vendorCreditFee20kg":"2500",
            "vendorCashFee05kg":"2500",
            "vendorCashFee10kg":"2500",
            "vendorCashFee20kg":"2500",
            "consumerCashFee05kg":"2500",
            "consumerCashFee10kg":"2500",
            "consumerCashFee20kg":"2500",
            "returnFee05kg":"2500",
            "returnFee10kg":"2500",
            "returnFee20kg":"2500"

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
