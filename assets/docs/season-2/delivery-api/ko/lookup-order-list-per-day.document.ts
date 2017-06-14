export const lookupOrderListPerDayDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `lookup-order-list-per-day`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_order_list_per_day`,
    name: `발주서 목록 조회(일단위 페이징)`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: `draft`, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/ordersheets`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/ordersheets`,
    _description: `
    발주서 목록을 하루단위 페이징 형태로 조회합니다.
    ex)(2017-02-01 ~ 2017-02-03)
    페이지당 row사이즈 조정은 maxPerPage 파라미터를 통해 가능하며
    다음페이지는 nextToken을 이용하여 얻을 수 있습니다.
    `,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `발주서 목록 조회(일단위 페이징)`,
        path: `/v2/providers/wing_api/apis/internal-api/v2/ordersheets`,
        //     _description: `발주서 목록을 하루단위 페이징 형태로 조회합니다.
        // ex)(2017-02-01 ~ 2017-02-03)
        // 페이지당 row사이즈 조정은 maxPerPage 파라미터를 통해 가능하며
        // 다음페이지는 nextToken을 이용하여 얻을 수 있습니다.`,
        _description: ``,
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
        if searchType equals time-frame parameter format is
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
        if searchType equals time-frame parameter format is
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
        name: `nextToken`,
        type: `String`,
        require: false,
        _description: `다음 페이지 조회를 위한 token값`,
        _relation: ``,
        _referenceInfo: `첫번째 페이지 조회시에는 필요하지 않습니다.`,
        _warning: `if searchType equals time-frame this parameter is not supported`,
        children: false
      },
      {
        name: `maxPerPage`,
        type: `Number`,
        require: false,
        _description: `페이지당 최대 조회 요청 값`,
        _relation: ``,
        _referenceInfo: `default = 50`,
        _warning: `if searchType equals time-frame this parameter is not supported`,
        children: false
      },
      {
        name: `searchType`,
        type: `String`,
        require: false,
        _description: `search type for order sheets results`,
        _relation: ``,
        _referenceInfo: `if searchType equals time-frame you can search results by minutes,
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
              type: `Object`,
              _description: `업체상품옵션 추가 정보`,
              _relation: ``,
              _referenceInfo: `optional / key:value 형태`,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A000000001/ordersheets?createdAtFrom=2015-10-07&createdAtTo=2015-10-27&maxPerPage=2&status=DEPARTURE`,
    code: [
      {
        language: `http`,
        codeblock: {}
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": [
        {
          "receiptId": 363667,
          "orderId": 817,
          "paymentId": 2450,
          "receiptType": "반품",
          "receiptStatus": "RELEASE_STOP_UNCHECKED",
          "createdAt": "2015-12-09T12:17:37",
          "modifiedAt": "2015-12-09T12:17:37",
          "requesterName": "test",
          "requesterPhoneNumber": "0503-123-1111",
          "cancelReasonCategory1": "고객변심",
          "cancelReasonCategory2": "유효기간 후 취소요청",
          "cancelReason": "ㅋㅋㅋ",
          "cancelCountSum": 2,
          "returnDeliveryId": 36524,
          "returnDeliveryType": "연동택배",
          "releaseStopStatus": "미처리",
          "enclosePrice": 0,
          "faultByType": "협력사 과실",
          "preRefund": false,
          "completeConfirmDate": "",
          "completeConfirmType": "미확인",
          "returnItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "Daniel Diaper",
              "vendorItemId": 3000000000,
              "vendorItemName": "Daniel Diaper 1단계",
              "purchaseCount": 1,
              "cancelCount": 1,
              "shipmentBoxId": 102390936,
              "sellerProductName": ""
            },
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "Daniel Diaper",
              "vendorItemId": 3000000001,
              "vendorItemName": "Daniel Diaper 2단계",
              "purchaseCount": 2,
              "cancelCount": 1,
              "shipmentBoxId": 102390936,
              "sellerProductName": ""
            }
          ]
        },
        {
          "receiptId": 363590,
          "orderId": 500000261,
          "paymentId": 700000182,
          "receiptType": "반품",
          "receiptStatus": "RETURNS_UNCHECKED",
          "createdAt": "2015-12-02T10:59:51",
          "modifiedAt": "2015-12-02T10:59:51",
          "requesterName": "김문근",
          "requesterPhoneNumber": "0503-123-1111",
          "cancelReasonCategory1": "고객변심",
          "cancelReasonCategory2": "단순변심(사유없음)",
          "cancelReason": "1",
          "cancelCountSum": 1,
          "returnDeliveryId": 36514,
          "returnDeliveryType": "수기관리",
          "releaseStopStatus": "비대상",
          "enclosePrice": 0,
          "faultByType": "고객 과실",
          "preRefund": false,
          "completeConfirmDate": "",
          "completeConfirmType": "미확인",
          "returnItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-배추김치",
              "vendorItemId": 3000000175,
              "vendorItemName": "하와이-테스트-쇼핑-배추김치4",
              "purchaseCount": 1,
              "cancelCount": 1,
              "shipmentBoxId": 102391886,
              "sellerProductName": ""
            }
          ]
        }
      ],
      "nextToken": "2"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
