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
        _description: `업체 코드`,
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
        _description: `업체 코드`,
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
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "content": [
          {
            "vendorId": "A00013264",
            "returnCenterCode": "1100044634",
            "shippingPlaceName": "5555",
            "deliverCode": "KGB",
            "deliverName": "로젠택배",
            "goodsflowStatus": "승인",
            "errorMessage": "",
            "createdAt": 1469423254000,
            "vendorCreditFee05kg": 111,
            "vendorCreditFee10kg": 111,
            "vendorCreditFee20kg": 111,
            "vendorCashFee05kg": 111,
            "vendorCashFee10kg": 111,
            "vendorCashFee20kg": 111,
            "consumerCashFee05kg": 111,
            "consumerCashFee10kg": 111,
            "consumerCashFee20kg": 111,
            "returnFee05kg": 111,
            "returnFee10kg": 111,
            "returnFee20kg": 111,
            "usable": true,
            "placeAddresses": [
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 신반포로 270 (반포동, 반포자이아파트)",
                "returnAddressDetail": "dd"
              },
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "dd"
              }
            ]
          },
          {
            "vendorId": "A00013264",
            "returnCenterCode": "1100044027",
            "shippingPlaceName": "중복등록테스트-chu",
            "deliverCode": "KGB",
            "deliverName": "로젠택배",
            "goodsflowStatus": "승인",
            "errorMessage": "",
            "createdAt": 1456473137000,
            "vendorCreditFee05kg": 10,
            "vendorCreditFee10kg": 10,
            "vendorCreditFee20kg": 10,
            "vendorCashFee05kg": 10,
            "vendorCashFee10kg": 10,
            "vendorCashFee20kg": 10,
            "consumerCashFee05kg": 10,
            "consumerCashFee10kg": 10,
            "consumerCashFee20kg": 10,
            "returnFee05kg": 10,
            "returnFee10kg": 10,
            "returnFee20kg": 10,
            "usable": true,
            "placeAddresses": [
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-1111-1111",
                "phoneNumber2": "010-1111-1111",
                "returnZipCode": "34571",
                "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                "returnAddressDetail": "1111222"
              },
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                  "companyContactNumber": "010-1111-1111",
                  "phoneNumber2": "010-1111-1111",
                  "returnZipCode": "34571",
                  "returnAddress": "대전광역시 동구 삼성동 314-18 삼성식품",
                  "returnAddressDetail": "1111222"
                }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043927",
                  "shippingPlaceName": "중복등록테스트-chu",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1456462277000,
                  "vendorCreditFee05kg": 10,
                  "vendorCreditFee10kg": 10,
                  "vendorCreditFee20kg": 10,
                  "vendorCashFee05kg": 10,
                  "vendorCashFee10kg": 101,
                  "vendorCashFee20kg": 10,
                  "consumerCashFee05kg": 10,
                  "consumerCashFee10kg": 10,
                  "consumerCashFee20kg": 10,
                  "returnFee05kg": 10,
                  "returnFee10kg": 10,
                  "returnFee20kg": 10,
                  "usable": true,
                  "placeAddresses": [
                  {
                    "addressType": "ROADNAME",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                    "returnAddressDetail": "1111222"
                  },
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 삼성동 314-18 삼성식품",
                    "returnAddressDetail": "1111222"
                  }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043827",
                  "shippingPlaceName": "중복등록테스트-chu",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1456388734000,
                  "vendorCreditFee05kg": 10,
                  "vendorCreditFee10kg": 10,
                  "vendorCreditFee20kg": 10,
                  "vendorCashFee05kg": 10,
                  "vendorCashFee10kg": 10,
                  "vendorCashFee20kg": 10,
                  "consumerCashFee05kg": 10,
                  "consumerCashFee10kg": 10,
                  "consumerCashFee20kg": 10,
                  "returnFee05kg": 10,
                  "returnFee10kg": 10,
                  "returnFee20kg": 10,
                  "usable": false,
                  "placeAddresses": [
                  {
                    "addressType": "ROADNAME",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                    "returnAddressDetail": "1111-2"
                  },
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 삼성동 314-18 삼성식품",
                    "returnAddressDetail": "1111-2"
                  }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043727",
                  "shippingPlaceName": "중복등록테스트-chu",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1456383015000,
                  "vendorCreditFee05kg": 10,
                  "vendorCreditFee10kg": 20,
                  "vendorCreditFee20kg": 20,
                  "vendorCashFee05kg": 10,
                  "vendorCashFee10kg": 20,
                  "vendorCashFee20kg": 20,
                  "consumerCashFee05kg": 10,
                  "consumerCashFee10kg": 20,
                  "consumerCashFee20kg": 20,
                  "returnFee05kg": 20,
                  "returnFee10kg": 20,
                  "returnFee20kg": 20,
                  "usable": true,
                  "placeAddresses": [
                  {
                    "addressType": "ROADNAME",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                    "returnAddressDetail": "1111"
                  },
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 삼성동 314-18 삼성식품",
                    "returnAddressDetail": "1111"
                  }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043627",
                  "shippingPlaceName": "중복등록테스트",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1456298299000,
                  "vendorCreditFee05kg": 1,
                  "vendorCreditFee10kg": 1,
                  "vendorCreditFee20kg": 1,
                  "vendorCashFee05kg": 1,
                  "vendorCashFee10kg": 1,
                  "vendorCashFee20kg": 1,
                  "consumerCashFee05kg": 1,
                  "consumerCashFee10kg": 1,
                  "consumerCashFee20kg": 1,
                  "returnFee05kg": 1,
                  "returnFee10kg": 1,
                  "returnFee20kg": 1,
                  "usable": true,
                  "placeAddresses": [
                  {
                    "addressType": "ROADNAME",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                    "returnAddressDetail": "1111"
                  },
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 삼성동 314-18 삼성식품",
                    "returnAddressDetail": "1111"
                  }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043527",
                  "shippingPlaceName": "중복등록테스트",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1456298163000,
                  "vendorCreditFee05kg": 1,
                  "vendorCreditFee10kg": 1,
                  "vendorCreditFee20kg": 1,
                  "vendorCashFee05kg": 1,
                  "vendorCashFee10kg": 1,
                  "vendorCashFee20kg": 1,
                  "consumerCashFee05kg": 1,
                  "consumerCashFee10kg": 1,
                  "consumerCashFee20kg": 1,
                  "returnFee05kg": 1,
                  "returnFee10kg": 1,
                  "returnFee20kg": 1,
                  "usable": false,
                  "placeAddresses": [
                  {
                    "addressType": "ROADNAME",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 태전로 113-2 (삼성동,삼성식품)",
                    "returnAddressDetail": "1111"
                  },
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-1111",
                    "phoneNumber2": "010-1111-1111",
                    "returnZipCode": "34571",
                    "returnAddress": "대전광역시 동구 삼성동 314-18 삼성식품",
                    "returnAddressDetail": "1111"
                  }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043427",
                  "shippingPlaceName": "반품배송지테스트",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1456200884000,
                  "vendorCreditFee05kg": 100,
                  "vendorCreditFee10kg": 100,
                  "vendorCreditFee20kg": 100,
                  "vendorCashFee05kg": 100,
                  "vendorCashFee10kg": 100,
                  "vendorCashFee20kg": 100,
                  "consumerCashFee05kg": 100,
                  "consumerCashFee10kg": 100,
                  "consumerCashFee20kg": 100,
                  "returnFee05kg": 100,
                  "returnFee10kg": 100,
                  "returnFee20kg": 100,
                  "usable": false,
                  "placeAddresses": [
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-2222",
                    "phoneNumber2": "010-3333-4444",
                    "returnZipCode": "111222",
                    "returnAddress": "서울시 강남구 삼성동",
                    "returnAddressDetail": "Tue Feb 23 13:14:44 KST 2016634113749"
                  },
                  {
                    "addressType": "ROADNAME",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1111-2222",
                    "phoneNumber2": "010-3333-4444",
                    "returnZipCode": "111222",
                    "returnAddress": "서울시 강남구 삼성동",
                    "returnAddressDetail": "Tue Feb 23 13:14:44 KST 2016634113749"
                  }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043026",
                  "shippingPlaceName": "반품지테스트",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1455776156000,
                  "vendorCreditFee05kg": 100,
                  "vendorCreditFee10kg": 100,
                  "vendorCreditFee20kg": 100,
                  "vendorCashFee05kg": 100,
                  "vendorCashFee10kg": 100,
                  "vendorCashFee20kg": 100,
                  "consumerCashFee05kg": 100,
                  "consumerCashFee10kg": 100,
                  "consumerCashFee20kg": 100,
                  "returnFee05kg": 100,
                  "returnFee10kg": 100,
                  "returnFee20kg": 100,
                  "usable": true,
                  "placeAddresses": [
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1234-5678",
                    "phoneNumber2": "010-1234-5678",
                    "returnZipCode": "135090",
                    "returnAddress": "서울특별시 강남구 삼성동 ",
                    "returnAddressDetail": "경암빌딩 1-1"
                  }
                ]
                },
                {
                  "vendorId": "A00013264",
                  "returnCenterCode": "1100043025",
                  "shippingPlaceName": "드디어it존에서도반품지를",
                  "deliverCode": "CJGLS",
                  "deliverName": "CJ 대한통운",
                  "goodsflowStatus": "승인",
                  "errorMessage": "",
                  "createdAt": 1455775059000,
                  "vendorCreditFee05kg": 10,
                  "vendorCreditFee10kg": 10,
                  "vendorCreditFee20kg": 10,
                  "vendorCashFee05kg": 10,
                  "vendorCashFee10kg": 10,
                  "vendorCashFee20kg": 10,
                  "consumerCashFee05kg": 10,
                  "consumerCashFee10kg": 10,
                  "consumerCashFee20kg": 10,
                  "returnFee05kg": 10,
                  "returnFee10kg": 10,
                  "returnFee20kg": 10,
                  "usable": true,
                  "placeAddresses": [
                  {
                    "addressType": "JIBUN",
                    "countryCode": "KR",
                    "companyContactNumber": "010-1234-5678",
                    "phoneNumber2": "010-1234-5678",
                    "returnZipCode": "135090",
                    "returnAddress": "서울특별시 강남구 삼성동 ",
                    "returnAddressDetail": "경암빌딩"
                  }
                ]
                }
                ],
                "pagination": {
                  "currentPage": 1,
                    "totalPages": 11,
                    "totalElements": 110,
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
