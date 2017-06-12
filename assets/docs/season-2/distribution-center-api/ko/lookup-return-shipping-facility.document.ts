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
      name: `반품지 조회 [v2]`,
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
    _description: `벤더 아이디를 통해 반품지를 조회한다. pageNum과 pageSize를 입력하지 않으면 첫 페이지로 리턴된다. 기본 pageNum은 10이다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `v1 버전은 deprecated 되었습니다.[GET /v2/providers/wing_api/apis/internal-api/v1/return/shipping-places]`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `벤더아이디`,
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
        _description: `벤더아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `This parameter is required for v2 version, you needn't use it for v4 version`,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `페이지 수`,
        _relation: ``,
        _referenceInfo: `기본값 1, pageNum가 널일경우 기본값을 입력해 주십시오.`,
        _warning: ``,
        children: false,
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지당 최대 건수는 50입니다`,
        _relation: ``,
        _referenceInfo: `기본값 10, max = 50, pageSize가 널일경우 기본값을 입력해 주십시오.`,
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
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `반품지정보`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `vendorId`,
          type: `String`,
          _description: `벤더 아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnCenterCode`,
          type: `String`,
          _description: `반품지센터코드`,
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
          _referenceInfo: `optional / "null"인 경우, 반품지이름은 변하지 않습니다`,
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
          _description: `택배사 이름`,
          _relation: ``,
          _referenceInfo: `optional`,
          _warning: ``,
          children: false
        },
        {
          name: `goodsflowStatus`,
          type: `String`,
          _description: `굿스플로 상태`,
          _relation: ``,
          _referenceInfo: `optional`,
          _warning: ``,
          children: false
        },
        {
          name: `errorMessage`,
          type: `String`,
          _description: `에러 메시지`,
          _relation: ``,
          _referenceInfo: `optional`,
          _warning: ``,
          children: false
        },
        {
          name: `createAt`,
          type: `String`,
          _description: `생성 날자`,
          _relation: ``,
          _referenceInfo: `optional`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee05kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee05kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee05kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee05kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee10kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee10kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee10kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee10kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee20kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee20kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee20kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee20kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
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
          _description: `주소`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `addressType`,
              type: `String`,
              _description: `주소 타입`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `countryCode`,
              type: `String`,
              _description: `KR`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `companyContactNumber`,
              type: `String`,
              _description: `반품지연락처`,
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
              _description: `반품지우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddress`,
              type: `String`,
              _description: `반품지주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddressDetail`,
              type: `String`,
              _description: `상세한 반품지주소`,
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
        codeblock: {
        }
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
