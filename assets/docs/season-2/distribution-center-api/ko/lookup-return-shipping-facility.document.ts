export const lookupReturnShippingFacilityDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `lookup-return-shipping-facility`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_return_shipping_facility`,
    name: `반품지 목록 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1400, // use order priority. 1 is high(top),
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
        apiName: `반품지 조회 [v2]`,
        path: `/v2/providers/wing_api/apis/internal-api/v2/return/shipping-places`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `반품지 목록 조회`,
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
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters`,
    _description: `업체 코드를 통해 반품지를 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 코드(판매자코드)<br/>Wing 페이지에서도 확인 가능합니다.`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ],
    queryStringParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 코드(판매자코드)<br/>Wing 페이지에서도 확인 가능합니다.`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `v2버전 사용 시에만 사용되는 파라메터로 v4버전에서는 필요없음.`,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `페이지 수`,
        _relation: ``,
        _referenceInfo: `기본값 1`,
        _warning: ``,
        children: false,
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지당 건수`,
        _relation: ``,
        _referenceInfo: `기본값 10, 최대값 50`,
        _warning: ``,
        children: false,
      },
    ],
    bodyParameters: false,
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
      _description: `반품지 목록 데이터`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `vendorId`,
          type: `String`,
          _description: `업체 코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnCenterCode`,
          type: `String`,
          _description: `반품지 센터코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `shippingPlaceName`,
          type: `String`,
          _description: `반품지 이름`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `deliverCode`,
          type: `String`,
          _description: `택배사 코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `deliverName`,
          type: `String`,
          _description: `택배사명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `goodsflowStatus`,
          type: `String`,
          _description: `굿스플로 상태`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `errorMessage`,
          type: `String`,
          _description: `에러 메시지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `createAt`,
          type: `String`,
          _description: `생성일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 신용요금 (판매자 신용)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 선불요금 (판매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 착불요금(구매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 반품비`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 신용요금 (판매자 신용)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 선불요금(판매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 착불요금(구매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 반품비`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee20kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: `상품이 20kg일때의 신용요금 (판매자 신용)`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee20kg`,
          type: `Number`,
          _description: `상품이 20kg일때의 선불요금 (판매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee20kg`,
          type: `Number`,
          _description: `상품이 20kg일때의 착불요금(구매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee20kg`,
          type: `Number`,
          _description: `상품이 20kg일때의 반품비`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `usable`,
          type: `boolean`,
          _description: `사용여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `placeAddresses`,
          type: `Array`,
          _description: `반품지 주소`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `addressType`,
              type: `String`,
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
                    <td>지번</td>
                  </tr>
                  <tr>
                    <td>ROADNAME</td>
                    <td>도로명</td>
                  </tr>
                  <tr>
                    <td>OVERSEA</td>
                    <td>해외</td>
                  </tr>
              </table>`,
              _warning: ``,
              children: false
            },
            {
              name: `countryCode`,
              type: `String`,
              _description: `국가코드, 국내의 경우 "KR"`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `companyContactNumber`,
              type: `String`,
              _description: `반품지 전화번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `phoneNumber2`,
              type: `String`,
              _description: `보조 전화번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnZipCode`,
              type: `String`,
              _description: `반품지 우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddress`,
              type: `String`,
              _description: `반품지 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddressDetail`,
              type: `String`,
              _description: `반품지 상세주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
          ]
        },
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A0012697/returnShippingCenters?pageNum=1&pageSize=50`,
    code: [
      {
        language: `http`,
        codeblock: null
      }
    ],
    response: {
      "code": 200,
      "message": "SUCCESS",
      "data":    {
      "content":       [
                  {
            "vendorId": "A00013264",
            "returnCenterCode": "1000396860",
            "shippingPlaceName": "생성된반품지1",
            "deliverCode": "DONGBU",
            "deliverName": "드림택배",
            "goodsflowStatus": "승인불가",
            "errorMessage": "",
            "createdAt": 1531379440000,
            "vendorCreditFee05kg": 2500,
            "vendorCreditFee10kg": 2500,
            "vendorCreditFee20kg": 2500,
            "vendorCashFee05kg": 2500,
            "vendorCashFee10kg": 2500,
            "vendorCashFee20kg": 2500,
            "consumerCashFee05kg": 2500,
            "consumerCashFee10kg": 2500,
            "consumerCashFee20kg": 2500,
            "returnFee05kg": 2500,
            "returnFee10kg": 2500,
            "returnFee20kg": 2500,
            "usable": true,
            "placeAddresses":             [
                              {
                  "addressType": "JIBUN",
                  "countryCode": "KR",
                  "companyContactNumber": "139-2029-0520",
                  "phoneNumber2": "",
                  "returnZipCode": "112207",
                  "returnAddress": "경기도 파주시 탄현면 월롱산로",
                  "returnAddressDetail": "-"
               },
                              {
                  "addressType": "ROADNAME",
                  "countryCode": "KR",
                  "companyContactNumber": "139-2029-0520",
                  "phoneNumber2": "",
                  "returnZipCode": "112207",
                  "returnAddress": "경기도 파주시 탄현면 월롱산로",
                  "returnAddressDetail": "-"
               }
            ]
         },
                  {
            "vendorId": "A00013264",
            "returnCenterCode": "1000395940",
            "shippingPlaceName": "생성된반품지2",
            "deliverCode": "HANJIN",
            "deliverName": "한진택배",
            "goodsflowStatus": "승인불가",
            "errorMessage": "",
            "createdAt": 1531125352000,
            "vendorCreditFee05kg": 1000,
            "vendorCreditFee10kg": 1000,
            "vendorCreditFee20kg": 1000,
            "vendorCashFee05kg": 1000,
            "vendorCashFee10kg": 1000,
            "vendorCashFee20kg": 1000,
            "consumerCashFee05kg": 1000,
            "consumerCashFee10kg": 1000,
            "consumerCashFee20kg": 1000,
            "returnFee05kg": 1000,
            "returnFee10kg": 1000,
            "returnFee20kg": 1000,
            "usable": true,
            "placeAddresses":             [
                              {
                  "addressType": "ROADNAME",
                  "countryCode": "KR",
                  "companyContactNumber": "02-1234-5678",
                  "phoneNumber2": "010-1234-5978",
                  "returnZipCode": "02480",
                  "returnAddress": "서울특별시 동대문구 홍릉로15길 35 (제기동)",
                  "returnAddressDetail": "아파트좋은곳101호"
               },
                              {
                  "addressType": "JIBUN",
                  "countryCode": "KR",
                  "companyContactNumber": "02-1234-5678",
                  "phoneNumber2": "010-1234-5978",
                  "returnZipCode": "02480",
                  "returnAddress": "서울특별시 동대문구 제기동 315",
                  "returnAddressDetail": "아파트좋은곳101호"
               }
            ]
         },
                  {
            "vendorId": "A00013264",
            "returnCenterCode": "1000393179",
            "shippingPlaceName": "생성된반품지3",
            "deliverCode": "DONGBU",
            "deliverName": "드림택배",
            "goodsflowStatus": "승인불가",
            "errorMessage": "",
            "createdAt": 1530003213000,
            "vendorCreditFee05kg": 2500,
            "vendorCreditFee10kg": 2500,
            "vendorCreditFee20kg": 2500,
            "vendorCashFee05kg": 2500,
            "vendorCashFee10kg": 2500,
            "vendorCashFee20kg": 2500,
            "consumerCashFee05kg": 2500,
            "consumerCashFee10kg": 2500,
            "consumerCashFee20kg": 2500,
            "returnFee05kg": 2500,
            "returnFee10kg": 2500,
            "returnFee20kg": 2500,
            "usable": true,
            "placeAddresses":             [
                              {
                  "addressType": "JIBUN",
                  "countryCode": "KR",
                  "companyContactNumber": "139-2029-0520",
                  "phoneNumber2": "",
                  "returnZipCode": "112207",
                  "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                  "returnAddressDetail": "-"
               },
                              {
                  "addressType": "ROADNAME",
                  "countryCode": "KR",
                  "companyContactNumber": "139-2029-0520",
                  "phoneNumber2": "",
                  "returnZipCode": "112207",
                  "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                  "returnAddressDetail": "-"
               }
            ]
         },
                  {
            "vendorId": "A00013264",
            "returnCenterCode": "1000393173",
            "shippingPlaceName": "생성된반품지4",
            "deliverCode": "DONGBU",
            "deliverName": "드림택배",
            "goodsflowStatus": "승인",
            "errorMessage": "",
            "createdAt": 1530002017000,
            "vendorCreditFee05kg": 2500,
            "vendorCreditFee10kg": 2500,
            "vendorCreditFee20kg": 2500,
            "vendorCashFee05kg": 2500,
            "vendorCashFee10kg": 2500,
            "vendorCashFee20kg": 2500,
            "consumerCashFee05kg": 2500,
            "consumerCashFee10kg": 2500,
            "consumerCashFee20kg": 2500,
            "returnFee05kg": 2500,
            "returnFee10kg": 2500,
            "returnFee20kg": 2500,
            "usable": false,
            "placeAddresses":             [
                              {
                  "addressType": "JIBUN",
                  "countryCode": "KR",
                  "companyContactNumber": "139-2029-0520",
                  "phoneNumber2": "",
                  "returnZipCode": "112207",
                  "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                  "returnAddressDetail": "-"
               },
                              {
                  "addressType": "ROADNAME",
                  "countryCode": "KR",
                  "companyContactNumber": "139-2029-0520",
                  "phoneNumber2": "",
                  "returnZipCode": "112207",
                  "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                  "returnAddressDetail": "-"
               }
            ]
         },
                  {
            "vendorId": "A00013264",
            "returnCenterCode": "1000392392",
            "shippingPlaceName": "생성된반품지5",
            "deliverCode": "DONGBU",
            "deliverName": "드림택배",
            "goodsflowStatus": "승인",
            "errorMessage": "",
            "createdAt": 1529630090000,
            "vendorCreditFee05kg": 1,
            "vendorCreditFee10kg": 1,
            "vendorCreditFee20kg": 1,
            "vendorCashFee05kg": 1,
            "vendorCashFee10kg": 2,
            "vendorCashFee20kg": 2,
            "consumerCashFee05kg": 2,
            "consumerCashFee10kg": 2,
            "consumerCashFee20kg": 3,
            "returnFee05kg": 1,
            "returnFee10kg": 2,
            "returnFee20kg": 3,
            "usable": true,
            "placeAddresses": [            {
               "addressType": "JIBUN",
               "countryCode": "KR",
               "companyContactNumber": "1234-2345-6666",
               "phoneNumber2": "0120-2345-6666",
               "returnZipCode": "10516",
               "returnAddress": "경기도 파주시 탄현면 월롱산로 294-58 ()",
               "returnAddressDetail": "경기도 파주시 탄현면 금승리"
            }]
         }
      ],
         "pagination":       {
         "currentPage": 1,
         "totalPages": 1,
         "totalElements": 5,
         "countPerPage": 10
      }
   }
},
                  _description: ``,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``
                },
}
