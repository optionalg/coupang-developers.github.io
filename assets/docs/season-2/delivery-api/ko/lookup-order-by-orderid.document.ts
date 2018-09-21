export const lookupOrderDocumentByorderId = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `lookup-order-by-orderid`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup-order-by-orderid`,
    name: `발주서 단건 조회 (orderId)`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: `2017-02-09`, // yyyy-mm-dd  ex> 2016-12-23
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
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/{orderId}/ordersheets`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/{orderId}/ordersheets`,
    _description: `orderId를 이용하여 발주서 단건을 조회하는 API입니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
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
      },
      {
        name: `orderId`,
        require: true,
        _description: `orderId`,
        _relation: `본 파라미터는 발주서 목록 조회 분단위 및 일단위를 통해 조회한 발주서 정보에 포함되어 있습니다.`,
        _referenceInfo: ``,
        _warning: `orderId는 Number type입니다.`
      }
    ],
    queryStringParameters: false,
    bodyParameters: false
  },
  errorSpec: [
    {
      status: ``,
      _description: ``,
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
      _description: `서버 응답 메세지`,
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
          _referenceInfo: `<table class="table">
            <tr>
                <th>STATUS</th>
                <th>MEANING</th>
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
          </table>`,
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
          _referenceInfo: ``,
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
          _description: `수취인 정보`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `name`,
              type: `String`,
              _description: `수취인 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `safeNumber`,
              type: `String`,
              _description: `수취인 연락처(안심번호)`,
              _relation: ``,
              _referenceInfo: ``,
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
            },
            {
              name: `addr2`,
              type: `String`,
              _description: `수취인 배송지2`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `postCode`,
              type: `String`,
              _description: `수취인 우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `ordeItems`,
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
              _referenceInfo: `없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemPackageName`,
              type: `String`,
              _description: `vendorItemPackageName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `productId`,
              type: `Number`,
              _description: `productId`,
              _relation: ``,
              _referenceInfo: `없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemId`,
              type: `Number`,
              _description: `vendorItemId`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemName`,
              type: `String`,
              _description: `vendorItemName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `shippingCount`,
              type: `Number`,
              _description: `item count to deliver(It must excludes cancel count)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `salesPrice`,
              type: `Number`,
              _description: `개당 상품 가격(price of one item)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderPrice`,
              type: `Number`,
              _description: `결제 가격 : salesPrice*shippingCount`,
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
                _warning: `즉시할인쿠폰등이 적용되지 않을 경우 null`,
                children: false
            },
            {
              name: `externalVendorSkuCode`,
              type: `String`,
              _description: `external code`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
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
              _warning: ``,
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
            },
            {
              name: `sellerProductName`,
              type: `String`,
              _description: `업체상품명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
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
              _description: `주문시 출고예정일`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd`,
              _warning: ``,
              children: false
            },
            {
              name: `plannedShippingDate`,
              type: `String`,
              _description: `실제 출고예정일 (분리배송 시)`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd`,
              _warning: ``,
              children: false
            },
            {
              name: `invoiceNumberUploadDate`,
              type: `String`,
              _description: `운송장번호 업로드 일시`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd'T'HH:mm:ss`,
              _warning: ``,
              children: false
            },
            {
              name: `extraProperties`,
              type: `Object`,
              _description: `업체상품옵션 추가 정보`,
              _relation: ``,
              _referenceInfo: `key:value 형태`,
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
                name: `confirmDate`,
                type: `String`,
                _description: `구매확정일자`,
                _relation: ``,
                _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
                _warning: ``,
                children: false
            }, {
                name: `deliveryChargeTypeName`,
                type: `String`,
                _description: `배송비구분`,
                _relation: ``,
                _referenceInfo: `유료, 무료`,
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
            }
          ]
        },
        {
          name: `overseaShippingInfoDto`,
          type: `Object`,
          _description: `해외배송정보`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `personalCustomsClearanceCode`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderersSsn`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `ordererPhoneNumber`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
        //v4 version에 추가된 항목들(20171110)...../////////
        {
            name: `deliveryCompanyName`,
            type: `String`,
            _description: `택배사`,
            _relation: ``,
            _referenceInfo: `CJ 대한통운,한진택배`,
            _warning: ``,
            children: false
          },
          {
            name: `invoiceNumber`,
            type: `String`,
            _description: `운송장번호`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `inTrasitDateTime`,
            type: `String`,
            _description: `출고일(발송일)`,
            _relation: ``,
            _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
            _warning: ``,
            children: false
          },
          {
              name: `deliveredDate`,
              type: `String`,
              _description: `배송완료일`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
              _warning: ``,
              children: false
            },
            {
                name: `refer`,
                type: `String`,
                _description: `결제위치`,
                _relation: ``,
                _referenceInfo: `아이폰앱,안드로이드앱,PC웹`,
                _warning: ``,
                children: false
             }
        ///////////////////////////////////  
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00013264/500000596/ordersheets`,
    code: [
      {
        language: `http`,
        codeblock: null
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "shipmentBoxId": 102392001,
        "orderId": 500000596,
        "orderedAt": "2017-10-06T22:59:37",
        "orderer": {
          "name": "김문근",
          "email": "mg*****@co",
          "safeNumber": "0501-111-2222"
        },
        "paidAt": "2017-10-06T22:59:37",
        "status": "FINAL_DELIVERY",
        "shippingPrice": 2500,
        "remotePrice": 0,
        "remoteArea": false,        
        "parcelPrintMessage": null,
        "splitShipping": false,
        "ableSplitShipping": false,
        "receiver": {
          "name": "test",
          "safeNumber": "0501-111-2222",
          "addr1": "addr1",
          "addr2": "addr2",
          "postCode": "284-60"
        },
        "orderItems": [
          {
            "vendorItemPackageId": 0,
            "vendorItemPackageName": "러비더비 섬유향수 보솔레이",
            "productId": 2429,
            "vendorItemId": 3000000177,
            "vendorItemName": "러비더비 섬유향수 보솔레이, 500ml",
            "shippingCount": 1,
            "salesPrice": 14000,
            "orderPrice": 14000,
            "discountPrice": null,
            "externalVendorSkuCode": "800022867",
            "etcInfoHeader": null,
            "etcInfoValue": null,
            "etcInfoValues": ["추가메시지1","추가메시지2"],
            "sellerProductId": 26758514,
            "sellerProductName": "[러비더비] 대용량 섬유향수 보솔레이 500ml",
            "sellerProductItemName": "01_보솔레이 500ml",
            "firstSellerProductItemName": "01_보솔레이 500ml",
            "cancelCount": 0,
            "holdCountForCancel": 0,
            "estimatedShippingDate": "2017-10-12",
            "plannedShippingDate": "",
            "invoiceNumberUploadDate": "",
            "extraProperties": {
             
             },
            "pricingBadge": false,
            "usedProduct": false,
            "confirmDate": "2017-10-18 18:10:28",
            "deliveryChargeTypeName": "무료",
            "canceled": false
          }
        ],
        "overseaShippingInfoDto": {
          "personalCustomsClearanceCode": null,
          "ordererSsn": "",
          "ordererPhoneNumber": ""
        },
        "deliveryCompanyName": "CJ 대한통운",
        "invoiceNumber": "337398446274",
        "inTrasitDateTime": "2017-10-11 19:04:45",
        "deliveredDate": "2017-10-13 19:34:50",
        "refer": "PC웹"       
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
