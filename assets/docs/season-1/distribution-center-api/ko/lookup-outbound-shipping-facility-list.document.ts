export const lookupOutboundShippingFacilityListDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-outbound-shipping-facility-list`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_outbound_shipping_facility_list`,
    name: `출고지 목록 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1100, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `상품출고지 조회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-23`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/product/outbound/shipping-places`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/product/outbound/shipping-places`,
    _description: `벤더아이디를 통해 출고지를 조회한다. pageNum과 pageSize를 입력하지 않으면 첫 페이지로 리턴된다. 기본 pageNum은 10이다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `벤더아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `페이지수`,
        _relation: ``,
        _referenceInfo: `기본값 1
pageNum가 널일경우 기본값을 입력해 주십시오.`,
        _warning: ``,
        children: false
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지당 최대 건수는 50입니다`,
        _relation: ``,
        _referenceInfo: `기본값 10, max = 50
pageSize가 널일경우 기본값을 입력해 주십시오.`,
        _warning: ``,
        children: false
      }
    ],
    bodyParameters: false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `server response status code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
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
          name: `content`,
          type: `Array`,
          _description: `detail info`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `outboundShippingPlaceCode`,
              type: `Number`,
              _description: `출고지코드`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `shippingPlaceName`,
              type: `String`,
              _description: `출고지 주소`,
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
                  _description: `지번/로드 넴/해외`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `countryCode`,
                  type: `String`,
                  _description: `국가 코드, 주소 타입이 지번이라면, 국가 코드는 "KR"입니다 ,

혹은 왼쪽에 있는 "국가 코드"메뉴로 국가 코드를 체크하십시오.

유효한 길이는 2입니다.`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `companyContactNumber`,
                  type: `String`,
                  _description: `전화번호`,
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
                  _description: `우편번호`,
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
                }
              ]
            },
            {
              name: `remoteInfos`,
              type: `Array`,
              _description: `도서산간 배송정보`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: [
                {
                  name: `remoteInfoId`,
                  type: `Number`,
                  _description: `remoteInfoId`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `deliveryCode`,
                  type: `String`,
                  _description: `택백회사코드`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `jejuFee`,
                  type: `Number`,
                  _description: `제주지역`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `notJeju`,
                  type: `Number`,
                  _description: `제주외지역`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `usable`,
                  type: `Boolean`,
                  _description: `도서산간 배송정보 유효여부, true/false`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                }
              ]
            },
            {
              name: `createDate`,
              type: `Object`,
              _description: `날자생성 형태 : yyyy/MM/dd`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `usable`,
              type: `Boolean`,
              _description: `사용가능 여부, true/false`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ],
        },
        {
          name: `pagination`,
          type: `Object`,
          _description: `detail info`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `message`,
              type: `String`,
              _description: `detail info`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `currentPage`,
              type: `Number`,
              _description: `currentPage`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `totalPages`,
              type: `Number`,
              _description: `totalPages`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `totalElements`,
              type: `Number`,
              _description: `totalElements`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `countPerPage`,
              type: `Number`,
              _description: `countPerPage`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
          ],
        }
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/product/outbound/shipping-places?vendorId=A00012697&pageNum=1&pageSize=50`,
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
            "outboundShippingPlaceCode": 84,
            "shippingPlaceName": "5555",
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
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 105,
                "deliveryCode": "AJOU",
                "jeju": 70000,
                "notJeju": 30000,
                "usable": true
              },
              {
                "remoteInfoId": 104,
                "deliveryCode": "CHUNIL",
                "jeju": 30000,
                "notJeju": 30000,
                "usable": true
              },
              {
                "remoteInfoId": 85,
                "deliveryCode": "CJGLS",
                "jeju": 19000,
                "notJeju": 9000,
                "usable": false
              },
              {
                "remoteInfoId": 103,
                "deliveryCode": "HANJIN",
                "jeju": 19000,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 84,
                "deliveryCode": "HYUNDAI",
                "jeju": 10000,
                "notJeju": 0,
                "usable": true
              }
            ],
            "createDate": "2016/09/27",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 81,
            "shippingPlaceName": "5555",
            "placeAddresses": [
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 신반포로 270 (반포동, 반포자이아파트)",
                "returnAddressDetail": "호호호호"
              },
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "호호호호"
              }
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 76,
                "deliveryCode": "AJOU",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 75,
                "deliveryCode": "CJGLS",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 80,
                "deliveryCode": "DHL",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 79,
                "deliveryCode": "DIRECT",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 72,
                "deliveryCode": "EPOST",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 83,
                "deliveryCode": "HDEXP",
                "jeju": 0,
                "notJeju": 10000,
                "usable": true
              },
              {
                "remoteInfoId": 70,
                "deliveryCode": "HYUNDAI",
                "jeju": 0,
                "notJeju": 0,
                "usable": false
              },
              {
                "remoteInfoId": 77,
                "deliveryCode": "IPARCEL",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 73,
                "deliveryCode": "KDEXP",
                "jeju": 1000,
                "notJeju": 2000,
                "usable": false
              },
              {
                "remoteInfoId": 71,
                "deliveryCode": "KGB",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 74,
                "deliveryCode": "KGBLS",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 78,
                "deliveryCode": "REGISTPOST",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              }
            ],
            "createDate": "2016/09/22",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 80,
            "shippingPlaceName": "5555",
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
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 68,
                "deliveryCode": "CHUNIL",
                "jeju": 2000,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 65,
                "deliveryCode": "CSLOGIS",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 64,
                "deliveryCode": "DAESIN",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 67,
                "deliveryCode": "EPOST",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 63,
                "deliveryCode": "HYUNDAI",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 66,
                "deliveryCode": "IPARCEL",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 69,
                "deliveryCode": "KGB",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              }
            ],
            "createDate": "2016/09/22",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 79,
            "shippingPlaceName": "5555",
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
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 58,
                "deliveryCode": "DIRECT",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              }
            ],
            "createDate": "2016/09/22",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 78,
            "shippingPlaceName": "5555",
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
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 57,
                "deliveryCode": "ILYANG",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              }
            ],
            "createDate": "2016/09/22",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 77,
            "shippingPlaceName": "중복등록테스트",
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
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 54,
                "deliveryCode": "HYUNDAI",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              }
            ],
            "createDate": "2016/09/22",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 339,
            "shippingPlaceName": "자동테스트 배송지 20160725-164125",
            "placeAddresses": [
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "01012345678",
                "phoneNumber2": "01098765432",
                "returnZipCode": "06168",
                "returnAddress": "서울특별시 강남구 삼성동 157-27 (삼성동,경암빌딩)",
                "returnAddressDetail": "5층 코로나팀 20160725-164125"
              },
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "01012345678",
                "phoneNumber2": "01098765432",
                "returnZipCode": "06168",
                "returnAddress": "서울특별시 강남구 테헤란로 501 경암빌딩 (삼성동,경암빌딩)",
                "returnAddressDetail": "5층 코로나팀 20160725-164125"
              }
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 24,
                "deliveryCode": "HYUNDAI",
                "jeju": 2000,
                "notJeju": 2000,
                "usable": true
              }
            ],
            "createDate": "2016/07/25",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 338,
            "shippingPlaceName": "123",
            "placeAddresses": [
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-0000-0000",
                "phoneNumber2": "010-0000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 신반포로 270 (반포동, 반포자이아파트)",
                "returnAddressDetail": "33311"
              },
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-0000-0000",
                "phoneNumber2": "010-0000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "33311"
              }
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 23,
                "deliveryCode": "KGB",
                "jeju": 2000,
                "notJeju": 3000,
                "usable": true
              }
            ],
            "createDate": "2016/07/25",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 60,
            "shippingPlaceName": "5555",
            "placeAddresses": [
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "dd"
              },
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 신반포로 270 (반포동, 반포자이아파트)",
                "returnAddressDetail": "dd"
              }
            ],
            "remoteInfos": [
              {
                "remoteInfoId": 55,
                "deliveryCode": "CHUNIL",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 56,
                "deliveryCode": "DIRECT",
                "jeju": 0,
                "notJeju": 0,
                "usable": true
              },
              {
                "remoteInfoId": 18,
                "deliveryCode": "KDEXP",
                "jeju": 3000,
                "notJeju": 4000,
                "usable": true
              }
            ],
            "createDate": "2016/07/25",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 59,
            "shippingPlaceName": "반품지테스트",
            "placeAddresses": [
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-1234-5678",
                "phoneNumber2": "010-1234-5678",
                "returnZipCode": "123456",
                "returnAddress": "서울시 강남구 삼성동",
                "returnAddressDetail": "경암빌딩"
              }
            ],
            "remoteInfos": [],
            "createDate": "2016/07/25",
            "usable": true
          }
        ],
        "pagination": {
          "currentPage": 1,
          "totalPages": 3,
          "totalElements": 25,
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
