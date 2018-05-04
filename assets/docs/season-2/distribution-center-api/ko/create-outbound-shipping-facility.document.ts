export const createOutboundShippingFacilityDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `distribution-center-api`,   // input category ex) exchange-service-api
    id: `create-outbound-shipping-facility`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_outbound_shipping_facility`,
    name: `출고지 생성`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1000, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    }
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `상품출고지 생성`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/product/outbound/shipping-place-creations`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `출고지 생성`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-2-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
    _description: `상품 출고지를 생성합니다. 판매자는 이 API를 사용하여 하나 이상의 출고지를 만들 수 있으며, 생성된 출고지는 상품 등록 시 출고지를 지정할 때 사용됩니다.`,
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
        _description: `출고지 이름, 최대 50 자`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `global`,
        type: `boolean`,
        require: false,
        _description: `기본값: false, 국내(domestic) or 해외(overseas)`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>CODE</th>
          <th>Mean</th>
        </tr>
        <tr>
          <td>false</td>
          <td>국내(domestic) </td>
        </tr>
        <tr>
          <td>true</td>
          <td>해외(overseas)</td>
        </tr>
        </table>`,
        _warning: ``,
        children: false
      },
      {
        name: `placeAddresses`,
        type: `Array`,
        require: true,
        _description: `출고지 주소`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `addressType`,
            type: `String`,
            require: true,
            _description: `주소 타입 <br/> JIBUN, JIBUN&ROADNAME, OVERSEA`,
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
                  <td>JIBUN&ROADNAME</td>
                  <td>지번과 도로명</td>
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
            require: true,
            _description: `국가 코드, 국내의 경우 "KR"입력. 해외의 경우 "국가 코드"메뉴에서 나라별 체크 후 입력. 유효한 길이는 2`,
            _relation: ``,
            _referenceInfo: ``,
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
          }
        ]
      },
      {
        name: `remoteInfos`,
        type: `Array`,
        require: false,
        _description: `도서산간 추가배송비`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `deliveryCode`,
            type: `String`,
            require: true,
            _description: `택배사 코드<br/>취소선은 합병 또는 폐업한 택배사를 의미합니다.`,
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
                    <td><del>KOREX</del></td>
                    <td><del>대한통운[합병]</del></td>
                </tr>
                <tr>
                  <td><del>KGBLS</del></td>
                  <td><del>KGB택배</del></td>
                </tr>
                <tr>
                  <td>KDEXP</td>
                  <td>경동택배</td>
                </tr>
                <tr>
                  <td>DONGBU</td>
                  <td>드림택배(구 KG로지스)</td>
                </tr>
                    <tr>
                        <td><del>INNOGIS</del></td>
                        <td><del>GTX로지스[폐업]</del></td>
                    </tr>
                <tr>
                  <td>ILYANG</td>
                  <td>일양택배</td>
                </tr>
                <tr>
                  <td>CHUNIL</td>
                  <td>천일택배</td>
                </tr>
                 <tr>
                  <td>AJOU</td>
                  <td>아주택배</td>
                </tr>
                <tr>
                  <td>CSLOGIS</td>
                  <td>SC로지스</td>
                </tr>
                <tr>
                  <td>DAESIN</td>
                  <td>대신택배</td>
                </tr>
                 <tr>
                  <td>CVS</td>
                  <td>CVS택배</td>
                </tr>
                <tr>
                  <td>HDEXP</td>
                  <td>합동택배</td>
                </tr>
                <tr>
                  <td>DADREAM</td>
                  <td>다드림</td>
                </tr>
                 <tr>
                  <td>DHL</td>
                  <td>DHL</td>
                </tr>
                <tr>
                  <td>UPS</td>
                  <td>UPS</td>
                </tr>
                <tr>
                  <td>FEDEX</td>
                  <td>FEDEX</td>
                </tr>
                 <tr>
                  <td>REGISTPOST</td>
                  <td>우편등기</td>
                </tr>
                <tr>
                  <td>DIRECT</td>
                  <td>업체직송</td>
                </tr>
                <tr>
                  <td>COUPANG</td>
                  <td>쿠팡자체배송</td>
                </tr>
                <tr>
                  <td><del>IQS</del></td>
                  <td><del>굿스포스트</del></td>
                </tr>
                <tr>
                  <td>EMS</td>
                  <td>우체국 EMS</td>
                </tr>
                <tr>
                  <td>TNT</td>
                  <td>TNT</td>
                </tr>
                <tr>
                  <td>USPS</td>
                  <td>USPS</td>
                </tr>
                <tr>
                  <td>IPARCEL</td>
                  <td>i-parcel</td>
                </tr>
                <tr>
                  <td>GSMNTON</td>
                  <td>GSM NtoN</td>
                </tr>
                <tr>
                  <td>SWGEXP</td>
                  <td>성원글로벌</td>
                </tr>
                <tr>
                  <td>PANTOS</td>
                  <td>범한판토스</td>
                </tr>
                <tr>
                  <td>ACIEXPRESS</td>
                  <td>ACI Express</td>
                </tr>
                <tr>
                  <td>DAEWOON</td>
                  <td>대운글로벌</td>
                </tr>
                <tr>
                  <td>AIRBOY</td>
                  <td>에어보이익스프레스</td>
                </tr>
                <tr>
                  <td>KGLNET</td>
                  <td>KGL네트웍스</td>
                </tr>
                <tr>
                  <td>KUNYOUNG</td>
                  <td>건영택배</td>
                </tr>
                <tr>
                  <td>SLX</td>
                  <td>SLX택배</td>
                </tr>
                <tr>
                  <td>HONAM</td>
                  <td>호남택배</td>
                </tr>
                <tr>
                  <td>LINEEXPRESS</td>
                  <td>LineExpress</td>
                </tr>
                <tr>
                  <td>SFEXPRESS</td>
                  <td>순풍택배</td>
                </tr>
                <tr>
                  <td>TWOFASTEXP</td>
                  <td>2FastsExpress</td>
                </tr>
                <tr>
                  <td>ECMS</td>
                  <td>ECMS익스프레스</td>
                </tr>
              </table>
            `,
            _warning: ``,
            children: false
          },
          {
            name: `jeju`,
            type: `Number`,
            require: true,
            _description: `제주 지역 배송비(원)`,
            _relation: ``,
            _referenceInfo: `배달요금은 1,000원보다 높고 제한가격 보다 낮아야함. HYUNDAI, CJGLS, HANJIN의 최고 배송비는 20,000원. 기타 택배사의 최고 배송비는 70,000원`,
            _warning: ``,
            children: false
          },
          {
            name: `notJeju`,
            type: `Number`,
            require: true,
            _description: `제주 외 지역 배송비(원)`,
            _relation: ``,
            _referenceInfo: `제주 지역과 같습니다`,
            _warning: ``,
            children: false
          }
        ]
      }
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `params are not allowed null...`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `params's vendorId not equals gateway's vendorId!`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The max length of the shipping place name is 50, please input the correct length name`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The address detail info can't be null(placeAddress)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Must input the default phone number(phoneNumber1)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Must input the default address(address1)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The length of country code is 2, please input correct length country code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The format of phone number is invalid, min length is 11 and max length is 14 include the character '-'`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The format of postal code is invalid, it can only be number, min length is 5 and max length is 6`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
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
      _description: `출고지 생성 결과`,
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
          _description: `결과 메시지(출고지 코드)`,
          _relation: ``,
          _referenceInfo: `outbound shipping place code`,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: 'https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00011620/outboundShippingCenters',
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00011620",
          "userId": "testId",
          "shippingPlaceName": "outbound shipping place",
          "global": "false",
          "placeAddresses": [
            {
              "addressType": "JIBUN",
              "countryCode": "KR",
              "companyContactNumber": "02-1234-5678",
              "phoneNumber2": "010-1234-5678",
              "returnZipCode": "10516",
              "returnAddress": "경기도 파주시 탄현면 월롱산로" ,
              "returnAddressDetail": "294-58"
            }
          ],
          "remoteInfos": [
            {
              "deliveryCode": "KGB",
              "jeju": "5000",
              "notJeju": "2500"
            },
            {
              "deliveryCode": "CJGLS",
              "jeju": "5000",
              "notJeju": "2500"
            }
          ]
        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "115"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
