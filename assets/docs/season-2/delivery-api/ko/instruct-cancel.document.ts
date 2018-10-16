export const instructCancelDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `cancel-api`,   // input category ex) exchange-service-api
    id: `instruct_cancel`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `instruct_cancel`,
    name: `상품준비중 취소 처리`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-02-20`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v5/vendors/{vendorId}/orders/{orderId}/cancel`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v5/vendors/{vendorId}/orders/{orderId}/cancel`,
    _description: `결제완료 또는 상품준비중 상태에 있는 상품을 취소하기 위한 API입니다.<br/>
                        결제완료 상태에 있는 상품에 대해서는 즉시취소로 작동하며, 상품준비중 상태의 상품에 대해서는 출고정지 시킵니다.<br/>
                        결제완료 상태 주문은 전체취소만 가능하며, 상품준비중 상태의 주문에 대해서는 부분 취소가 가능합니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>결제완료 또는 상품준비중 상태에서만 적용가능합니다.(나머지 상태에 적용 시 에러 발생)<br/>
                    상품준비중 취소 처리API 사용은 판매자점수(주문이행)를 하락시키게 됩니다.`,
  },
  parameters: {
    pathSegmentParameters: [
       {
        name: `vendorId`,
        require: true,
        _description: `업체 ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
      {
        name: `orderId`,
        type: `Number`,
        require: true,
        _description: `주문 번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `orderId`,
        type: `Number`,
        require: true,
        _description: `주문 번호`,
        _relation: ``,
        _referenceInfo: `path variable로도 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemIds`,
        type: `Array`,
        require: true,
        _description: `취소할 상품의 vendorItemd 배열`,
        _relation: ``,
        _referenceInfo: `receiptCounts 와 쌍으로 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `receiptCounts`,
        type: `Array`,
        require: true,
        _description: `취소할 상품 개수 배열, 값은 항상 0보다 큼`,
        _relation: ``,
        _referenceInfo: `vendorItemIds 와 쌍으로 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `bigCancelCode`,
        type: `String`,
        require: true,
        _description: `결제완료 상품취소 사유 중 대분류 사유 코드`,
        _relation: ``,
        _referenceInfo: `CANERR`,
        _warning: ``,
        children: false
      },
      {
        name: `middleCancelCode`,
        type: `String`,
        require: true,
        _description: `결제완료 상품취소 사유 중 중분류 사유 코드`,
        _relation: ``,
        _referenceInfo: `
          <ul>
            <li>CCTTER // 재고 연동 오류 : 재고 문제로 취소가 발생하는 경우</li>
            <li>CCPNER // 제휴사이트 오류 : 주소 문제로 고객 배송지 생성 불가시 취소 되는 오류</li>
            <li>CCPRER // 가격등재오류 : 양사간 상품 가격오류 발생시 취소 되는 오류</li>
          </ul>`,
        _warning: `상품준비중 상태의 상품 취소(출고정지완료) 시에는 입력값과 상관없이 사유 카테고리가 각각 "배송불만", "품절"로 고정됩니다.<br/>
                       취소 상세 사유는 "파트너 API 강제 취소"로 기록됩니다.`,
        children: false
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체 ID, path variable로도 입력`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `업체의 쿠팡 Wing로그인 ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
        {
          status: "400",
          _description: `주문 ID를 입력해 주세요. :주문ID를 누락 할 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `주문 ID를 입력해 주세요. :주문ID값이 0일 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `취소할 벤더아이템 아이디 목록을 입력해주세요. :상품 번호 목록이 비어있을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `취소할 아이탬 개수 목록을 입력해주세요. :상품 취소 개수 목록이 비어있을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `요청한 상품 개수와 취소 개수를 확인해주세요. :상품 번호 목록의 길이와 상품 취소 개수 목록의 길이가 불일치할 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          sstatus: "400",
          _description: `취소할 아이탬 개수 목록을 입력해주세요. :상품 취소 개수 중 0보다 작거나 같은 값이 존재할 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `취소사유 대분류 코드를 입력해주세요. : 취소 사유 중 큰 카테고리 코드가 비어있을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          sstatus: "400",
          _description: `취소사유 대분류 코드를 확인해 주세요. :취소 사유 중 큰 카테고리 코드가 "CANERR"이 아닐 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `취소사유 중분류 코드를 입력해주세요. :취소 사유 중 중간 카테고리 코드가 비어있을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `취소사유 중분류 코드를 확인해 주세요. :취소 사유 중 중간 카테고리 코드가 CCTTER,CCPNER,CCPRER 중 하나가 아닐 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `업체 ID를 입력해주세요. :pathVariable로 입력한 업체ID와 request body 안의 vendorId가 일치하지 않을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `업체 ID에 맞는 올바른 유저 ID를 입력해주세요. :입력한 Wing ID의 입력한 업체ID가 일치하지 않을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
         status: "400",
          _description: `주문 정보가 없습니다. :요청하 주문 ID와 상품 번호에 대한 지불 정보가 하나도 존재하지 않을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `주문정보가 없습니다.[{상품ID}] :특정 상품에 대한 주문 정보가 존재하지 않을 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `취소 가능한 개수보다 요청한 개수가 더 많습니다. :특정 상품의 취소가능개수(주문 개수-취소진행중 개수-취소완료 개수) 보다 더 많은 개수를 요청 하였을 때`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
       {
          status: "400",
          _description: `해당 벤더아이템이 결제완료/상품지시 중 상태가 아닙니다. :특정 상품이 결제완료 혹은 상품준비중 상태가 아닐 때`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `요청한 업체의 상품이 아닙니다. :특정 상품이 취소를 요청한 업체의 상품이 아닐 때`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `취소요청 중 오류가 발생하였습니다. :요청한 상품중 결제완료 상태인 상품에 대해 취소처리 실패하였을 때`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `부분 취소는 불가능합니다. :취소 처리 중 부분 취소 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `출고정지 완료 처리에 실패했습니다. :요청한 상품중 상품준비중 상태인 상품에 대해 출고 정지 완료 처리에 실패한 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `출고 정지 요청 롤백에 실패했습니다[접수 아이디] :요청한 상품중 상품준비중 상태인 상품에 대해 출고 정지 요청 완료에 실패하고, 출고정지요청 롤백도 실패한 경우`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: "400",
          _description: `내부 오류가 발생하였습니다. 쿠팡으로 문의하세요. 에러번호 : %s :비즈니스 로직 오류를 제외한 서버 내부오류`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
  ],
  responseSpec: [
    {
      name: `code`,
      type: `String`,
      _description: `응답 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: `SUCCESS(전체취소 성공), PARTIAL(부분취소 성공), FAIL(전체취소 실패)`,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `실패 사유 및 에러 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `CancelResponse`,
      _description: `성공 및 실패한 취소건에 대한 상세 정보`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `ReceiptMap`,
          type: `Object`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
                {
                  name: `receiptId`,
                  type: `Number`,
                  _description: `접수 ID`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `receiptType`,
                  type: `String`,
                  _description: `CANCEL일 경우 즉시취소 접수 아이디,<br/>
                                      STOP_SHIPMENT 일 경우 출고정지완료 접수 번호`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `vendorItemIds`,
                  type: `Array`,
                  _description: `해당 접수 ID로 취소한 상품 번호 목록`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                },
                {
                  name: `totalCount`,
                  type: `Number`,
                  _description: `해당 접수 ID로 취소한 총 상품 개수`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false
                }
           ]
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
          name: `failedItemIds`,
          type: `Array`,
          _description: `취소에 실패한 vendorItemId`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v5/vendors/A00123456/orders/2000006593044/cancel`,
    code: [
      {
        language: `http`,
        codeblock:  {
            "orderId":2000006593044,
            "vendorItemIds":[3145181064,3145181065,3145181067],
            "receiptCounts":[1,2,1],
            "bigCancelCode":"CANERR",
            "middleCancelCode":"CCTTER",
            "userId": "et5",
            "vendorId": "A00123456"
            }
      }
    ],
    response: {
        "code": "PARTIAL",
        "message": "[요청번호] cdea5b4b-34e9-4bec-bbd9-061e358e46a0 \\r\\n[3145181064]<= 취소 가능한 개수보다 요청한 개수가 더 많습니다.", 
            "data": {
            "receiptMap": {
                "receiptId": 44698107,
                "receiptType": "STOP_SHIPMENT",
                "vendorItemIds": [3145181065, 3145181067],
                "totalCount": 3
            },
            "orderId": 2000006593044,
            "failedVendorItemIds": [3145181064 ]
        }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
