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
    _description: `업체 코드를 통해 출고지 목록을 조회합니다. 해당 API를 통해 출고지 코드(outboundShippingPlaceCode)를 확인할 수 있습니다.`,
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
                           <td>출고지 코드로 조회</td>
                          </tr>
                          <tr>
                           <td>FULL</td>
                           <td>업체코드로 조회</td>
                          </tr>
                         </table>`,
        _warning: ``,
        children: false,
      },
      {
        name: `vendorId`,
        require: true,
        _description: `업체 코드(판매자코드)<br/>Wing 페이지에서도 확인 가능합니다.`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `outboundShippingPlaceCodes`,
        require: false,
        _description: `출고지 코드, 출고지 생성 시 확인 가능합니다.`,
        _relation: ``,
        _referenceInfo: `예) 5192,5156,5155`,
        _warning: `** 검색 타입이 OSPC 일 경우 필수`,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `페이지수(기본 1)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지당 건수(기본 1 ~ 최대 50)`,
        _relation: ``,
        _referenceInfo: ``,
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
                  _description: `주소 타입 <br/> JIBUN, ROADNAME, OVERSEA`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `countryCode`,
                  type: `String`,
                  _description: `국가 코드, 국내의 경우 'KR'. 유효길이는 2`,
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
                  _referenceInfo: `            <table class="table">
                  <tr>
                    <th>구분</th>
                    <th>Min~Max</th>
                  </tr>
                  <tr>
                    <td>x</td>
                    <td>2~4자</td>
                  </tr>
                  <tr>
                    <td>y</td>
                    <td>3~4자</td>
                  </tr>
                  <tr>
                    <td>z</td>
                    <td>4자</td>
                  </tr>
                 </table>`,
                  _warning: ``,
                  children: false
                },
                {
                  name: `phoneNumber2`,
                  type: `String`,
                  _description: `보조 전화번호<br/>(형식 : 전화번호와 동일합니다.)`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `returnZipCode`,
                  type: `String`,
                  _description: `우편번호 : 숫자, 최소길이 5, 최대길이 6`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `returnAddress`,
                  type: `String`,
                  _description: `주소, 최대길이는 150`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `returnAddressDetail`,
                  type: `String`,
                  _description: `상세주소, 최대길이는 200`,
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
                  _description: `택배사 코드`,
                  _relation: ``,
                  _referenceInfo: `출고지 생성 API - 택배사 코드 참고`,
                  _warning: ``,
                  children: false
                },
                {
                  name: `jejuFee`,
                  type: `Number`,
                  _description: `제주 지역 배송비(원)`,
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
    endpoint:`https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00012697/outboundShippingCenters?searchType=FULL&pageNum=1&pageSize=50`,
    code: [
      {
        language: `http`,
      }
    ],
    response: {
      "code": 200,
      "message": "SUCCESS",
      "data": {
        "content": [
          {
            "outboundShippingPlaceCode": 84,
            "shippingPlaceName": "상품출고지1",
            "placeAddresses": [
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 신반포로 270 (반포동, 반포자이아파트)",
                "returnAddressDetail": "100-1호"
              },
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "100-1호"
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
              }
            ],
            "createDate": "2016/09/27",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 81,
            "shippingPlaceName": "상품출고지2",
            "placeAddresses": [
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "100-1호"
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
              }
            ],
            "createDate": "2016/09/22",
            "usable": true
          },
          {
            "outboundShippingPlaceCode": 80,
            "shippingPlaceName": "상품출고지3",
            "placeAddresses": [
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 신반포로 270 (반포동, 반포자이아파트)",
                "returnAddressDetail": "100-1호"
              },
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "100-1호"
              }
            ],
            "remoteInfos": [
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
            "shippingPlaceName": "상품출고지4",
            "placeAddresses": [
              {
                "addressType": "ROADNAME",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 신반포로 270 (반포동, 반포자이아파트)",
                "returnAddressDetail": "100-1호"
              },
              {
                "addressType": "JIBUN",
                "countryCode": "KR",
                "companyContactNumber": "010-000-0000",
                "phoneNumber2": "010-000-0000",
                "returnZipCode": "06544",
                "returnAddress": "서울특별시 서초구 반포동 20-43 반포자이아파트",
                "returnAddressDetail": "100-1호"
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
            "shippingPlaceName": "상품출고지5",
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
                "returnAddressDetail": "100-1호"
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
          }
        ],
        "pagination": {
          "currentPage": 1,
          "totalPages": 1,
          "totalElements": 5,
          "countPerPage": 5
        }
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
