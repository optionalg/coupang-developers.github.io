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
    발주서 목록을 하루단위 페이징 형태로 조회합니다.ex)(2017-02-01 ~ 2017-02-03)<br>
    페이지당 row사이즈 조정은 maxPerPage 파라미터를 통해 가능하며 다음 페이지는 [nextToken]을 이용하여 얻을 수 있습니다.<br/> Path Parameter 일부 제외, 발주서 목록 조회(분 단위 전체)와 전반적으로 구성이 같습니다.
    `,
    _relation: ``,
    _referenceInfo: `v2 version과 v4 version의 조회결과가 동일하지 않습니다. v4 version에만 추가된 항목들이 있으니 아래 Response Spec을 참조하시기 바랍니다.`,
    _warning: `<br/>반품완료건은 발주서목록에서 조회 불가, '반품 요청 목록 조회' 또는 '발주서 단건 조회' 이용 <br/>
                    결제완료 상태에서 고객이 배송지를 변경할 수 있기 때문에<br/>
                   상품준비중 처리 이후에 꼭! 발주서 단건 조회를 통해 배송지 정보("receiver")가 
                   변경되었는지 확인 및 업데이트를 해 주셔야 합니다.`
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
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: `쿠팡에서 업체에게 발급한 고유 코드 <br>
        Wing 로그인 후, 확인 가능`,
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
        yyyy-mm-dd 형태로 조회하기 원하는 시작 날짜 기입<br>
        ex) 2018-07-01`,
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
        yyyy-mm-dd 형태로 조회하기 원하는 종료 날짜 기입 <br>
        ex) 2018-07-31`,
        _warning: `최대 31일까지 조회 가능합니다.`,
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
        _referenceInfo: `첫번째 페이지 조회시에는 필요하지 않습니다.<br>
        페이지당 최대 50개까지 요청되므로, 이후 페이지를 조회하기 위해서는 [nextToken] 사용 필요 
        `,
        //_warning: `if searchType equals timeFrame this parameter is not supported`,
        children: false
      },
      {
        name: `maxPerPage`,
        type: `Number`,
        require: false,
        _description: `페이지당 최대 조회 요청 값`,
        _relation: ``,
        _referenceInfo: `default = 50`,
        //_warning: `if searchType equals timeFrame this parameter is not supported`,
        children: false
      },
      {
        name: `searchType`,
        type: `String`,
        require: false,
        _description: `search type for order sheets results`,
        _relation: ``,
        _referenceInfo: `searchType=timeFrame이면 발주서 목록 조회(분단위 전체)로 수행되며,
        그외에는 발주서 목록 조회(일단위 페이징)으로 수행됩니다.
        `,
        _warning: `searchType parameter는 v4 version에만 사용됩니다.`,
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
          _description: `배송번호(묶음배송번호)`,
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
            },
            {
              name: `ordererNumber`,
              type: `String`,
              _description: `주문자 연락처(실전화번호)`,
              _relation: ``,
              _referenceInfo: `null`,
              _warning: ``,
              children: false
            },
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
            name: `remotePrice`,
            type: `Number`,
            _description: `도서산간배송비`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
           }, 
           {
            name: `remoteArea`,
            type: `Boolean`,
            _description: `도서산간여부`,
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
            }, 
            {
               name: `receiverNumber`,
              type: `String`,
              _description: `수취인 연락처(실전화번호)`,
              _relation: ``,
              _referenceInfo: `null`,
              _warning: ``,
              children: false
            },
            {
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
              _referenceInfo: `미사용 / 없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            }, {
              name: `vendorItemPackageName`,
              type: `String`,
              _description: `vendorItemPackageName`,
              _relation: ``,
              _referenceInfo: `미사용`,
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
              _description: `결제 가격 : salesPrice*shippingCount`,
              //왜 항상 안같지?
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, 
            {
                name: `discountPrice`,
                type: `Number`,
                _description: `할인 가격`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: `즉시할인쿠폰 등이 적용되지 않을 경우 null`,
                children: false
            },            
            {
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
            }, 
            {
              name: `etcInfoValue`,
              type: `String`,
              _description: `상품별 개별 입력 항목에 대한 사용자의 입력값`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: `필드는 존재하나 값이 없는 상태입니다. 필요시에는 아래의 etcInfoValues를 사용하시기 바랍니다.`,
              children: false
            },
            {
              name: `etcInfoValues`,
              type: `Array`,
              _description: `상품별 개별 입력 항목에 대한 사용자의 입력값 리스트`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: `v4 version으로만 조회가능`,
              children: false
            },  
            {
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
            }, 
            {
              name: `cancelCount`,
              type: `Number`,
              _description: `취소수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `holdCountForCancel`,
              type: `Number`,
              _description: `환불대기수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },            
            {
              name: `estimatedShippingDate`,
              type: `String`,
              _description: `주문시 출고예정일<br/>(불리배송 출고예정일)`,
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
            }, {
                name: `pricingBadge`,
                type: `Boolean`,
                _description: `최저가 상품 여부`,
                _relation: ``,
                _referenceInfo: `true/false`,
                _warning: `v4 version으로만 조회가능`,
                children: false
              }, {
                name: `usedProduct`,
                type: `Boolean`,
                _description: `중고 상품 여부`,
                _relation: ``,
                _referenceInfo: `true/false`,
                _warning: `v4 version으로만 조회가능`,
                children: false
              }, {
                  name: `confirmDate`,
                  type: `String`,
                  _description: `구매확정일자`,
                  _relation: ``,
                  _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
                  _warning: `v4 version으로만 조회가능`,
                  children: false
              }, {
                  name: `deliveryChargeTypeName`,
                  type: `String`,
                  _description: `배송비구분`,
                  _relation: ``,
                  _referenceInfo: `유료, 무료`,
                  _warning: `v4 version으로만 조회가능`,
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
        //v4 version에 추가된 항목들(20171110)...../////////
        {
            name: `deliveryCompanyName`,
            type: `String`,
            _description: `택배사`,
            _relation: ``,
            _referenceInfo: `CJ 대한통운,한진택배`,
            _warning: `v4 version으로만 조회가능`,
            children: false
          },
          {
            name: `invoiceNumber`,
            type: `String`,
            _description: `운송장번호`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: `v4 version으로만 조회가능`,
            children: false
          },
          {
            name: `inTrasitDateTime`,
            type: `String`,
            _description: `출고일(발송일)`,
            _relation: ``,
            _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
            _warning: `v4 version으로만 조회가능`,
            children: false
          },
          {
              name: `deliveredDate`,
              type: `String`,
              _description: `배송완료일`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
              _warning: `v4 version으로만 조회가능`,
              children: false
            },
            {
                name: `refer`,
                type: `String`,
                _description: `결제위치`,
                _relation: ``,
                _referenceInfo: `아이폰앱,안드로이드앱,PC웹,모바일웹`,
                _warning: `v4 version으로만 조회가능`,
                children: false
             }
        ///////////////////////////////////
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00000000/ordersheets?createdAtFrom=2017-10-10&createdAtTo=2017-10-11&maxPerPage=2&status=INSTRUCT`,
    code: [
      {
        language: `http`,
        codeblock: null
      }
    ],
    response: {
  "code": 200,
  "message": "OK",
  "data": [
    {
      "shipmentBoxId": 448531493,
      "orderId": 22000009546234,
      "orderedAt": "2017-10-10T10:20:16",
      "orderer": {
        "name": "신*희",
        "email": "eu*****@na",
        "safeNumber": "0503-**-5464",
        "ordererNumber": null
      },
      "paidAt": "2017-10-10T10:20:16",
      "status": "FINAL_DELIVERY",
      "shippingPrice": 2500,
      "remotePrice": null,
      "remoteArea": false,
      "parcelPrintMessage": "문 앞",
      "splitShipping": false,
      "ableSplitShipping": false,
      "receiver": {
        "name": "신*희",
        "safeNumber": "0503-**-5464",
        "receiverNumber": null,
        "addr1": "경기 오산시 가수동 **아파트",
        "addr2": "109동 *호",
        "postCode": "447-700"
      },
      "orderItems": [
        {
          "vendorItemPackageId": 0,
          "vendorItemPackageName": "인디고뱅크키즈 기모 테잎배색 트레이닝 팬츠 IKTM17WG1",
          "productId": 31846051,
          "vendorItemId": 3242596358,
          "vendorItemName": "인디고뱅크키즈 기모 테잎배색 트레이닝 팬츠 IKTM17WG1, 07 DARK GREY, 160호",
          "shippingCount": 1,
          "salesPrice": 19900,
          "orderPrice": 19900,
          "discountPrice": null,
          "externalVendorSkuCode": "170816368810",
          "etcInfoHeader": null,
          "etcInfoValue": null,
          "etcInfoValues": ["추가메시지1","추가메시지2"],
          "sellerProductId": 80240831,
          "sellerProductName": "인디고뱅크키즈 A5 기모 배색츄키니 IKTM17WG1",
          "sellerProductItemName": "07 DARK GREY 160호",
          "firstSellerProductItemName": "07 DARK GREY/160호",
          "cancelCount": 0,
          "holdCountForCancel": 0,
          "estimatedShippingDate": "2017-10-16",
          "plannedShippingDate": "",
          "invoiceNumberUploadDate": "",
          "extraProperties": {
            
          },
          "pricingBadge": false,
          "usedProduct": false,
          "confirmDate": "2017-10-25 00:10:33",
          "deliveryChargeTypeName": "유료",
          "canceled": false
        }
      ],
      "overseaShippingInfoDto": {
        "personalCustomsClearanceCode": "",
        "ordererSsn": "",
        "ordererPhoneNumber": ""
      },
      "deliveryCompanyName": "CJ 대한통운",
      "invoiceNumber": "340010913442",
      "inTrasitDateTime": "2017-10-16 22:08:04",
      "deliveredDate": "2017-10-17 17:17:52",
      "refer": "안드로이드앱"     
    },
    {
      "shipmentBoxId": 448537989,
      "orderId": 22000009546630,
      "orderedAt": "2017-10-10T10:35:04",
      "orderer": {
        "name": "김*숙",
        "email": "hs*****@na",
        "safeNumber": "0503-**-5013",
        "ordererNumber": null
      },
      "paidAt": "2017-10-10T10:35:04",
      "status": "FINAL_DELIVERY",
      "shippingPrice": 0,
      "remotePrice": null,
      "remoteArea": false,
      "parcelPrintMessage": "직접 받고 부재 시 문 앞",
      "splitShipping": false,
      "ableSplitShipping": false,
      "receiver": {
        "name": "김*숙",
        "safeNumber": "0502-344-6681",
        "receiverNumber": null,
        "addr1": "경기 광명시 하안1동 두산트레지움아파트",
        "addr2": "107동701호",
        "postCode": "423-747"
      },
      "orderItems": [
        {
          "vendorItemPackageId": 0,
          "vendorItemPackageName": "리틀브렌 후드달이 구스 경량 점퍼 LBJD17WG5",
          "productId": 34047877,
          "vendorItemId": 3261300431,
          "vendorItemName": "리틀브렌 후드달이 구스 경량 점퍼 LBJD17WG5, 04 MIDDLE MELANGE GR, 170호",
          "shippingCount": 1,
          "salesPrice": 49900,
          "orderPrice": 49900,
          "discountPrice": null,
          "externalVendorSkuCode": "170824416510",
          "etcInfoHeader": null,
          "etcInfoValue": null,
          "etcInfoValues": ["추가메시지1","추가메시지2"],
          "sellerProductId": 87037167,
          "sellerProductName": "리틀브렌 후드달이 구스 경량 점퍼 LBJD17WG5",
          "sellerProductItemName": "04 MIDDLE MELANGE GR 170호",
          "firstSellerProductItemName": "04 MIDDLE MELANGE GR/170호",
          "cancelCount": 0,
          "holdCountForCancel": 0,
          "estimatedShippingDate": "2017-10-16",
          "plannedShippingDate": "",
          "invoiceNumberUploadDate": "",
          "extraProperties": {
            
          },
          "pricingBadge": false,
          "usedProduct": false,
          "confirmDate": "2017-10-25 02:10:27",
          "deliveryChargeTypeName": "무료",
          "canceled": false
        }
      ],
      "overseaShippingInfoDto": {
        "personalCustomsClearanceCode": "",
        "ordererSsn": "",
        "ordererPhoneNumber": ""
      },
      "deliveryCompanyName": "CJ 대한통운",
      "invoiceNumber": "340010912565",
      "inTrasitDateTime": "2017-10-16 22:08:04",
      "deliveredDate": "2017-10-17 20:42:23",
      "refer": "안드로이드앱"
    }
  ],
  "nextToken": "448537989"
},
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
