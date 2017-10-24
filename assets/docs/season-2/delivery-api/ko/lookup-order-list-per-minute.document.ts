export const lookupOrderListPerMinuteDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `lookup-order-list-per-minute`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_order_list_per_minute`,
    name: `발주서 목록 조회(분단위 전체)`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-09`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/ordersheets`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/ordersheets`,
    _description: `발주서 목록 조회 분단위 전체 조회`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `발주서 목록 조회(분단위 전체)`,
        path: `/v2/providers/wing_api/apis/internal-api/v2/ordersheets/timeFrame`,
        _description: ``, //`발주서 목록 조회 분단위 전체 조회`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: ``,
        path: ``,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: [
      {
        name: `createdAtFrom`,
        type: `String`,
        require: true,
        _description: `검색 시작일시`,
        _relation: ``,
        _referenceInfo: `
        if searchType equals timeFrame parameter format is
        yyyy-MM-dd'T'HH:mm(ISO-8601)
        ex)2015-12-14T14:16 ~ 2015-12-14T15:16
        위 조건을 초단위까지 고려하면 아래와 같습니다.
        result >= 2015-12-14T14:16:00
        result < 2015-12-14T15:16:00
        from과 to는 최대 하루(24시간)까지 검색 가능합니다.
        otherwise parameter format is
        데이터 형태는 yyyy-mm-dd 로 하여야 합니다. ex) 2017-02-01`,
        _warning: ``,
        children: false
      },
      {
        name: `createdAtTo`,
        type: `String`,
        require: true,
        _description: `검색 종료일시`,
        _relation: ``,
        _referenceInfo: `
        if searchType equals timeFrame parameter format is
        yyyy-MM-dd'T'HH:mm(ISO-8601)
        ex)2015-12-14T14:16 ~ 2015-12-14T15:16
        위 조건을 초단위까지 고려하면 아래와 같습니다.
        result >= 2015-12-14T14:16:00
        result < 2015-12-14T15:16:00
        from과 to는 최대 하루(24시간)까지 검색 가능합니다
        otherwise parameter format is
        데이터 형태는 yyyy-mm-dd 로 하여야 합니다. ex) 2017-02-01
        `,
        _warning: ``,
        children: false
      },
      {
        name: `status`,
        type: `String`,
        require: true,
        _description: `발주서 상태`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>ACCEPT</td>
          <td>결제완료</td>
        </tr>
        <tr>
          <td>INSTRUCT</td>
          <td>상품준비중</td>
        </tr>
        <tr>
          <td>DEPARTURE</td>
          <td>배송지시</td>
        </tr>
        <tr>
          <td>DELIVERING</td>
          <td>배송중</td>
        </tr>
        <tr>
          <td>FINAL_DELIVERY</td>
          <td>배송완료</td>
        </tr>
        <tr>
          <td>NONE_TRACKING</td>
          <td>업체 직접 배송(배송 연동 미적용), 추적불가</td>
        </tr>
        </table>
        `,
        _warning: ``,
        children: false
      },
      {
        name: `searchType`,
        type: `String`,
        require: false,
        _description: `search type for order sheets results`,
        _relation: ``,
        _referenceInfo: `if searchType equals timeFrame you can search results by minutes,
        otherwise you can search paged results by days
        `,
        _warning: `this parameter is added in version 4`,
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
      _description: `서버 응답 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `결과리스트`,
      _relation: ``,
      _referenceInfo: `결과가 없을 때는 빈 리스트가 리턴`,
      _warning: ``,
      children: [
        {
          name: `shipmentBoxId`,
          type: `Number`,
          _description: `배송번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `주문번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `orderedAt`,
          type: `String`,
          _description: `주문일시`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-dd'T'HH:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `orderer`,
          type: `Object`,
          _description: `주문자`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `name`,
              type: `String`,
              _description: `주문자 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `email`,
              type: `String`,
              _description: `주문자 email`,
              _relation: ``,
              _referenceInfo: `마스킹 처리됨`,
              _warning: ``,
              children: false
            },
            {
              name: `safeNumber`,
              type: `String`,
              _description: `주문자 연락처(안심번호)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `paidAt`,
          type: `String`,
          _description: `결제일시`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-dd'T'HH:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `status`,
          type: `String`,
          _description: `발주서상태`,
          _relation: ``,
          _referenceInfo: `
   <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>ACCEPT</td>
          <td>결제완료</td>
        </tr>
        <tr>
          <td>INSTRUCT</td>
          <td>상품준비중</td>
        </tr>
        <tr>
          <td>DEPARTURE</td>
          <td>배송지시</td>
        </tr>
        <tr>
          <td>DELIVERING</td>
          <td>배송중</td>
        </tr>
        <tr>
          <td>FINAL_DELIVERY</td>
          <td>배송완료</td>
        </tr>
        <tr>
          <td>NONE_TRACKING</td>
          <td>업체 직접 배송(배송 연동 미적용), 추적불가</td>
        </tr>
        </table>

          `,
          _warning: ``,
          children: false
        },
        {
          name: `shippingPrice`,
          type: `Number`,
          _description: `배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `parcelPrintMessage`,
          type: `String`,
          _description: `배송메세지`,
          _relation: ``,
          _referenceInfo: `optional`,
          _warning: ``,
          children: false
        },
        {
          name: `splitShipping`,
          type: `Boolean`,
          _description: `분리배송여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `ableSplitShipping`,
          type: `Boolean`,
          _description: `분리배송가능여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `receiver`,
          type: `Object`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `name`,
              type: `String`,
              _description: `수취인 이름	`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `safeNumber`,
              type: `String`,
              _description: `수취인 연락처(안심번호)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `addr1`,
              type: `String`,
              _description: `수취인 배송지1`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `addr2`,
              type: `String`,
              _description: `수취인 배송지2`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `postCode`,
              type: `String`,
              _description: `수취인 우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
          ]
        },
        {
          name: `orderItems`,
          type: `Array`,
          _description: `Items to deliver`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `vendorItemPackageId`,
              type: `Number`,
              _description: `vendorItemPackageId`,
              _relation: ``,
              _referenceInfo: `optional / 없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            }, {
              name: `vendorItemPackageName`,
              type: `String`,
              _description: `vendorItemPackageName`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `productId`,
              type: `Number`,
              _description: `productId`,
              _relation: ``,
              _referenceInfo: `optional / 없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            }, {
              name: `vendorItemId`,
              type: `Number`,
              _description: `vendorItemId`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `vendorItemName`,
              type: `String`,
              _description: `vendorItemName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `shippingCount`,
              type: `Number`,
              _description: `item count to deliver(It must excludes cancel count)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `salesPrice`,
              type: `Number`,
              _description: `개당 상품 가격(price of one item)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `orderPrice`,
              type: `Number`,
              _description: `결제 가격 salesPrice*shippingCount : 하지만 항상 같지는 않음`,
              //왜 항상 안같지?
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `externalVendorSkuCode`,
              type: `String`,
              _description: `external code`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `etcInfoHeader`,
              type: `String`,
              _description: `상품별 개별 입력 항목`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `etcInfoValue`,
              type: `String`,
              _description: `상품별 개별 입력 항목에 대한 사용자의 입력값`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `sellerProductId`,
              type: `Number`,
              _description: `업체상품 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `sellerProductName`,
              type: `String`,
              _description: `업체상품명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `sellerProductItemName`,
              type: `String`,
              _description: `등록옵션명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `firstSellerProductItemName`,
              type: `String`,
              _description: `최초등록옵션명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `estimatedShippingDate`,
              type: `String`,
              _description: `주문시 출고예정일`,
              _relation: ``,
              _referenceInfo: `optional / yyyy-mm-dd`,
              _warning: ``,
              children: false
            }, {
              name: `plannedShippingDate`,
              type: `String`,
              _description: `실제 출고예정일 (분리배송 시)`,
              _relation: ``,
              _referenceInfo: `optional / yyyy-mm-dd`,
              _warning: ``,
              children: false
            }, {
              name: `invoiceNumberUploadDate`,
              type: `String`,
              _description: `운송장번호 업로드 일시`,
              _relation: ``,
              _referenceInfo: `optional / yyyy-MM-dd'T'HH:mm:ss`,
              _warning: ``,
              children: false
            }, {
              name: `extraProperties`,
              type: `Array`,
              _description: `업체상품옵션 추가 정보`,
              _relation: ``,
              _referenceInfo: `optional / key:value 형태`,
              _warning: ``,
              children: false
            }, {
              name: `pricingBadge`,
              type: `Boolean`,
              _description: `최저가 상품 여부`,
              _relation: ``,
              _referenceInfo: `true/false`,
              _warning: ``,
              children: false
            }, {
              name: `usedProduct`,
              type: `Boolean`,
              _description: `중고 상품 여부`,
              _relation: ``,
              _referenceInfo: `true/false`,
              _warning: ``,
              children: false
            }, {
              name: `canceled`,
              type: `Boolean`,
              _description: `주문 취소 여부`,
              _relation: ``,
              _referenceInfo: `true/false`,
              _warning: ``,
              children: false
            },
          ]
        },
        {
          name: `overseaShippingInfoDto`,
          type: `Object`,
          _description: `해외배송정보`,
          _relation: ``,
          _referenceInfo: `optional`,
          _warning: ``,
          children: [
            {
              name: `personalCustomsClearanceCode`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `orderersSsn`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `ordererPhoneNumber`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
          ]
        },

      ]
    },
    {
      name: `nextToken`,
      type: `String`,
      _description: `다음 페이지 요청 전송시 필요한 token 값`,
      _relation: ``,
      _referenceInfo: `마지막 페이지인 경우 빈 값으로 리턴`,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00000000/ordersheets?createdAtFrom=2017-09-29T00:00&createdAtTo=2017-09-29T23:59&searchType=timeFrame&status=DEPARTURE`,
    code: [
      {
        language: `http`,
        codeblock: {}
      }
    ],
    response: {
  "code": 200,
  "message": "OK",
  "data": [
    {
      "shipmentBoxId": 445500520,
      "orderId": 16000009357207,
      "orderedAt": "2017-09-29T12:26:27",
      "orderer": {
        "name": "조*자",
        "email": "wh*****@ha",
        "safeNumber": "0502-**-2104"
      },
      "paidAt": "2017-09-29T12:26:27",
      "status": "DEPARTURE",
      "shippingPrice": 2500,
      "remotePrice": null,
      "remoteArea": false,
      "parcelPrintMessage": "직접 받고 부재 시 문 앞",
      "splitShipping": false,
      "ableSplitShipping": false,
      "receiver": {
        "name": "조*자",
        "safeNumber": "0502-**-2104",
        "addr1": "경기도 안산시 단원구",
        "addr2": "911동**호",
        "postCode": "153-39"
      },
      "orderItems": [
        {
          "vendorItemPackageId": 0,
          "vendorItemPackageName": "펠릭스키즈 오비 잰드 스키니 데님",
          "productId": 18414855,
          "vendorItemId": 3122348137,
          "vendorItemName": "펠릭스키즈 오비 잰드 스키니 데님, 60 BLUE, 140호",
          "shippingCount": 1,
          "salesPrice": 5000,
          "orderPrice": 5000,
          "discountPrice": null,
          "externalVendorSkuCode": "170201141084",
          "etcInfoHeader": null,
          "etcInfoValue": null,
          "sellerProductId": 35055028,
          "sellerProductName": "펠릭스키즈 고무줄허리 스키니 청바지 (FXTJ7SG1)",
          "sellerProductItemName": "60 BLUE 140호",
          "firstSellerProductItemName": "60 BLUE/140호",
          "cancelCount": 0,
          "holdCountForCancel": 0,
          "estimatedShippingDate": "2017-10-16",
          "plannedShippingDate": "",
          "invoiceNumberUploadDate": "",
          "extraProperties": {
            
          },
          "pricingBadge": false,
          "usedProduct": false,
          "canceled": false
        }
      ],
      "overseaShippingInfoDto": {
        "personalCustomsClearanceCode": "",
        "ordererSsn": "",
        "ordererPhoneNumber": ""
      }
    },
    {
      "shipmentBoxId": 445508132,
      "orderId": 11000009302390,
      "orderedAt": "2017-09-29T13:01:47",
      "orderer": {
        "name": "김*현",
        "email": "po*****@na",
        "safeNumber": "0502-**-2849"
      },
      "paidAt": "2017-09-29T13:01:47",
      "status": "DEPARTURE",
      "shippingPrice": 2500,
      "remotePrice": null,
      "remoteArea": false,
      "parcelPrintMessage": "직접 받고 부재 시 문 앞",
      "splitShipping": false,
      "ableSplitShipping": false,
      "receiver": {
        "name": "김*현",
        "safeNumber": "0502-**-2849",
        "addr1": "서울특별시 양천구 목4동",
        "addr2": "78*",
        "postCode": "158-818"
      },
      "orderItems": [
        {
          "vendorItemPackageId": 0,
          "vendorItemPackageName": "스탭키즈 슬럽 7부 배기 팬츠 SITM17F71",
          "productId": 24925943,
          "vendorItemId": 3175264015,
          "vendorItemName": "스탭키즈 슬럽 7부 배기 팬츠 SITM17F71, 78 NAVY, 120호",
          "shippingCount": 1,
          "salesPrice": 5000,
          "orderPrice": 5000,
          "discountPrice": null,
          "externalVendorSkuCode": "170616287977",
          "etcInfoHeader": null,
          "etcInfoValue": null,
          "sellerProductId": 53977772,
          "sellerProductName": "스탭키즈 슬럽 7부 배기 팬츠 SITM17F71",
          "sellerProductItemName": "78 NAVY 120호",
          "firstSellerProductItemName": "78 NAVY/120호",
          "cancelCount": 0,
          "holdCountForCancel": 0,
          "estimatedShippingDate": "2017-10-16",
          "plannedShippingDate": "",
          "invoiceNumberUploadDate": "",
          "extraProperties": {
            
          },
          "pricingBadge": false,
          "usedProduct": false,
          "canceled": false
        }
      ],
      "overseaShippingInfoDto": {
        "personalCustomsClearanceCode": "",
        "ordererSsn": "",
        "ordererPhoneNumber": ""
      }
    }
  ]
},
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
