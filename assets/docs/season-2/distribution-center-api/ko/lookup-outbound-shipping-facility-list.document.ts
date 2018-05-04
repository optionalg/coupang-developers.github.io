export const lookupOutboundShippingFacilityListDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `distribution-center-api`,   // input category ex) exchange-service-api
    id: `lookup-outbound-shipping-facility-list`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_outbound_shipping_facility_list`,
    name: `출고지 목록 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1100, // use order priority. 1 is high(top),
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
        apiName: `상품출고지 조회`,
        path: `/v2/providers/wing_api/apis/internal-api/v2/product/outbound/shipping-places`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `출고지 목록 조회`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-23`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
    _description: `업체 코드를 통해 출고지 목록을 조회한다.`,
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
        name: `searchType`,
        require: true,
        _description: `검색 타입`,
        _relation: ``,
        _referenceInfo: `<table>
                          <tr>
                           <th>CODE</th>
                           <th>Mean</th>
                          </tr>
                          <tr>
                           <td>OSPC</td>
                           <td>출고지 코드로 조회(Search by outboundShippingPlaceCodes)</td>
                          </tr>
                          <tr>
                           <td>FULL</td>
                           <td>업체코드로 조회(Search fulllist by vendorId)</td>
                          </tr>
                         </table>`,
        _warning: ``,
        children: false,
      },
      {
        name: `vendorId`,
        require: true,
        _description: `업체 코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `outboundShippingPlaceCodes`,
        require: false,
        _description: `출고지 코드`,
        _relation: ``,
        _referenceInfo: `예) 5192,5156,5155`,
        _warning: `검색 타입이 OSPC 일 경우 필수(If searchType is OSPC, outboundShippingPlaceCodes is required)`,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `페이지수`,
        _relation: ``,
        _referenceInfo: `기본값 1`,
        _warning: ``,
        children: false
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지당 건수`,
        _relation: ``,
        _referenceInfo: `기본값 10, 최대값 50`,
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
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `content`,
          type: `Array`,
          _description: `출고지 목록 데이터`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `outboundShippingPlaceCode`,
              type: `Number`,
              _description: `출고지 코드`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `shippingPlaceName`,
              type: `String`,
              _description: `출고지 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `placeAddresses`,
              type: `Array`,
              _description: `출고지 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: [
                {
                  name: `addressType`,
                  type: `String`,
                  _description: `주소 타입(지번, 지번과 도로명, 해외)`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `countryCode`,
                  type: `String`,
                  _description: `국가 코드`,
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
                  _description: `도서산간 배송정보 ID`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `deliveryCode`,
                  type: `String`,
                  _description: `택백사 코드`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `jejuFee`,
                  type: `Number`,
                  _description: `제주지역 배송비`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `notJeju`,
                  type: `Number`,
                  _description: `제주외지역 배송비`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `usable`,
                  type: `Boolean`,
                  _description: `도서산간 배송정보 유효여부`,
                  _relation: ``,
                  _referenceInfo: `true or false`,
                  _warning: ``,
                  children: false
                }
              ]
            },
            {
              name: `createDate`,
              type: `Object`,
              _description: `생성일`,
              _relation: ``,
              _referenceInfo: `yyyy/MM/dd`,
              _warning: ``,
              children: false
            },
            {
              name: `usable`,
              type: `Boolean`,
              _description: `사용가능 여부`,
              _relation: ``,
              _referenceInfo: `true or false`,
              _warning: ``,
              children: false
            }
          ],
        },
        {
          name: `pagination`,
          type: `Object`,
          _description: `페이징`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `currentPage`,
              type: `Number`,
              _description: `현재 페이지`,
              _relation: ``,
              _referenceInfo: `예) 1`,
              _warning: ``,
              children: false,
            },
            {
              name: `totalPages`,
              type: `Number`,
              _description: `전체 페이지 Count`,
              _relation: ``,
              _referenceInfo: `예) 1000`,
              _warning: ``,
              children: false,
            },
            {
              name: `totalElements`,
              type: `Number`,
              _description: `전체 데이터 Count`,
              _relation: ``,
              _referenceInfo: `예) 1000`,
              _warning: ``,
              children: false,
            },
            {
              name: `countPerPage`,
              type: `Number`,
              _description: `페이지별 데이터 Count`,
              _relation: ``,
              _referenceInfo: `예) 10, 20, 30`,
              _warning: ``,
              children: false,
            },
          ],
        }
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00012697/outboundShippingCenters?searchType=OSPC&outboundShippingPlaceCodes=5192,5156,5155&pageNum=1&pageSize=50`,
    code: [
      {
        language: `http`,
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
