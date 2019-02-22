export const technicalFaq = [
  {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `교환관리API`,
    categoryViewValue: `교환관리API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `교환 요청 목록 조회에서 각 status별 정확한 설명을 해주세요.`,
        _description: `RECEIPT(접수) : 고객(또는 고객센터)를 통해서 교환 접수된 건 
<br/>PROGRESS(진행) : 셀러가 교환 대상 상품을 입고받음 (업체전달완료) 
<br/>SUCCESS(완료) : 교환 요청이 최종 완료된 상태 
<br/>REJECT(불가) : 접수된 교환건에 대해 Vendor가 교환불가처리 
<br/>CANCEL(철회) : 고객이 교환요청을 철회`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `orderitemid, targetitemid가 정확이 무엇을 의미하나요?`,
        _description: `교환 신청 상품과 교환 대상의 vendoritemid를 의미합니다. 
<br/>현재 동일 상품 & 동일 사이즈의 제품만 교환 가능하므로 두 값은 모두 동일한 vendoritemid를 입력해주시면 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `originalShipmentBoxId와 shipmentBoxId의 차이가 뭔가요?`,
        _description: `
originalShipmentBoxId - 최초 배송단계에서 사용한 ShipmentBoxId 
<br/>ShipmentBoxId - 회수상품 입고가 완료되고 교환상품을 업로드 할 때 생성되는 값`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `exchangeAmount(교환 배송비)가 0이 아닐 때가 있나요?`,
        _description: `쿠팡에서는 일반적으로 판매자 귀책의 경우만 교환요청을 합니다. 
<br/>따라서 해당 파라미터는 0으로만 노출됩니다.
<br/>
<br/>다만, 고객센터 CS를 통해 고객귀책으로 교환 요청이 될 수도 있으며 
<br/>교환배송비가 발생 시, 판매자에게 연락하여 별도 송금하거나 반품상품에 동봉하는 방식으로 진행되므로 
<br/>쿠팡 정산시, 교환배송비는 대상에서 제외됩니다. (반품배송비는 정산에 포함됩니다.)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `교환시, 입고확인 여부를 어떻게 체크하면될까요?`,
        _description: `collectCompleteDate 값의 Null 여부로 판단하면 되며, collectStatus로도 확인 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `교환요청 목록 조회 시, shipmentBoxId가 노출되지 않습니다.`,
        _description: `해당 값은 셀러가 회수 상품을 입고 승인해야 노출됩니다. 
<br/>조회하고자 하는 교환 건의 회수 상품의 입고 여부를 확인해주세요.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `교환요청상품 입고 확인처리를 하면 교환 status가 어떻게 변하나요?`,
        _description: `RECEIPT(접수) 단계에서 PROGRESS(진행) 단계로 변경됩니다. 
<br/>(셀러는 해당 단계부터 교환송장을 입력할 수 있게됩니다.)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
       {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `exchangeId(접수번호)는 어떻게 확인 가능한가요?`,
        _description: `교환요청 목록 조회 API를 통해 확인 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `교환 송장 업로드할 수 있는 조건이 따로 있나요? 그리고, 교환 요청 목록 조회 API JSON 샘플에 shipmentBoxId 값이 보이지 않습니다.`,
        _description: `
네, 교환 송장 업로드를 하기 위해서는 반품된 상품에 대해서 판매자가 입고 확인을 해야합니다.
<br/>(교환요청 목록 조회 API에서 조회 시, 회수 상태가 업체전달완료 (CompleteCollect)) 
<br/>만약 위 상태가 맞다면, 새롭게 발부된 shipmentBoxId를 이용하여 송장을 등록합니다. 
<br/>**입고 확인 처리후 최대 10분 이후부터 송장 등록이 가능합니다!
<br/>
<br/>교환 요청 목록 조회 샘플에 shipmentBoxId값이 없는 것은 위에서 설명한 내용과 같이 
<br/>셀러가 입고 확인하지 않은 교환건이 샘플로 사용되었기 때문입니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `교환 ID (exchangeId) 는 어디서 확인할 수 있나요?`,
        _description: `해당 값은 교환 요청 목록 조회 API를 통해 확인 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `11`,
        anchorId: ``,
        question: `
"shipmentBoxId (656416676)'s status [NONE_TRACKING] is not suitable for applyInvoice. Only INSTRUCT status shipment can be called with applyInvoice ……" 에러가 발생합니다.`,
        _description: `해당 에러는 shipmentBoxId를 오입력되는 경우 발생합니다. (새롭게 발급 된 shipmentBoxId를 입력해야합니다)
<br/>혹시, OriginalShipmentBoxId와 혼동되어 사용하지 않았는지 확인 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
    ]
  },
 {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `반품관리API`,
    categoryViewValue: `반품관리API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `receiptId(접수번호)는 어떻게 확인 가능한가요?`,
        _description: `반품요청 목록 조회 API를 통해 확인 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `반품/교환 등으로 발생한 추가배송비에 대한 정보를 따로 볼 수 있는 API가 있나요?`,
        _description: `추가배송비는 API로 제공되지 않습니다. 
<br/>반품의 경우, 상품에서 반품 비 차감 후 환불되는 프로세스로 진행되고 있습니다. 
<br/>교환의 경우, 동일상품으로의 교환만 가능하므로 판매자 귀책인 상황에서 발생합니다. 
<br/>따라서 별도의 교환배송비 확인 API는 존재하지 않으며, 고객 변심이 발생한 경우 반품시 동봉 또는 계좌입금으로 안내되고 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `반품/교환 신청 시 쿠팡에서 자동 회수 연동을 해주는 조건을 알고 싶습니다. (굿스플로)`,
        _description: `반품지 생성 시, 굿스플로의 반품 자동 회수를 지원하고 있는 6개 택배사 중 선택하여 등록하시고, 유효한 택배사 계약 코드를 입력해야 연동 조건이 성립됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `반품/교환 신청 시 쿠팡에서 자동 회수 연동을 예외처리 해주실 수는 없나요? (굿스플로 예외 처리)`,
        _description: `가능합니다. 반품 자동 회수 연동 예외처리할 vendorID(업체코드)와 상품 연동 예정일에 관한 정보 전달해주시면 설정 후 회신드리겠습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `고객/반품 요청건이 고객에 의해 수정 또는 철회될 수 있는 최대 기한이 있나요?`,
        _description: `따로 정해진 기간은 없습니다. 
<br/>다만, 택배기사가 고객으로부터 상품을 회수하고, 회수송장 스캔을한 시점부터는 
<br/>고객 반품/교환 철회&수정이 불가능합니다.
<br/>그렇지만 고객센터를 통하면 회수 송장 스캔 등의 정책과 무관하게 철회&수정이 이뤄질 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `반품 취소/수정에 대한 고객 업데이트 내용을 따로 받아볼 수 없나요?`,
        _description: `고객에 의해 수정/취소된 반품건을 따로 모아 볼 수 있는 기능은 없습니다.
<br/>번거롭더라도 '반품 요청 목록 조회 API'와 '반품 철회 이력 조회 API'를 통해 
<br/>빈번히 조회를 해야합니다. 
<br/>
<br/>단 반품의 경우 철회 시, 반품 철회접수ID를 확인할 수 없기에 (반품목록에서 사라짐) 
<br/>따로 저장해두고 있어야 합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `반품요청 목록조회로 일단위/분단위/단건조회 3종류가 있는데 어떤걸 사용해야 하나요?`,
        _description: `기본적으로 3종류의 API의 기능은 같습니다. 단순히 조회 조건이 다르기에 편의에 따라 개발하시면 됩니다. 
<br/>
<br/>일단위 : 최대 31일까지 조회 가능 
<br/>분단위 : 최대 24시간 이내 데이터 조회 가능 
<br/>단건조회 : 취소(단품)접수번호 단위로 데이터 조회가능`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
       {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `상품 준비중 상태에서 출고중지요청한 것과 출고 이후에 반품요청한 항목을 구분하여 조회하는 방법이 있을까요?`,
        _description: `
상품 준비중 상태는 아직 배송지시(운송장번호등록)을 하지 않았으므로 RU(출고중지요청) / UC(반품접수) 두 가지 status에서 모두 조회 가능합니다.
<br/>출고 이후 고객 반품 시, 이미 상품이 배송지시되어 출고완료가 불가능하니 UC(반품접수)로만 조회 가능합니다. 따라서 출고 전(상품준비중), 출고 후(배송지시이후)는 RU(출고중지요청) 조회 결과로 비교하면됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `반품요청 목록조회 시, returnDeliveryType 값으로 노출되는 전담택배, 연동택배, 수기관리가 각각 무엇을 의미하나요?`,
        _description: `
<br/>returnDeliveryType으로 들어갈 수 있는 항목과 내용은 다음과 같습니다. 
<br/>
<br/>* 각 배송 분류 
<br/>연동택배 : 파트너사(판매자)가 거래하는 배송 택배사 
<br/>전담택배 : 쿠팡과 거래하는 택배사 
<br/>수기택배 : 상담사가 고객 또는 택배사에 확인하여 수기로 반송장 번호로 입력하는 것`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `반품요청 목록 조회에 enclosePrice(동봉배송비) 라는 항목이 있습니다. 사용하는 값인가요?`,
        _description: `반품 비용 추가 발생 분으로 인해 박스안에 동봉하는 배송비를 의미하며, 
<br/>사용하지 않는 값입니다. 기본적으로 0으로 표시되며, 참고하지 말아주세요.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `11`,
        anchorId: ``,
        question: `반품의 경우도 교환처럼 목록조회에서 취소된 내역을 확인할 수 있나요?`,
        _description: `현재 반품의 경우 취소된 내역을 반품요청 목록조회에서 확인할 수 없습니다. 
<br/>현 구조상, 반품이 취소되면 요청 목록에서 해당 항목이 삭제됩니다. 
<br/>번거롭더라도 최초 반품 접수 시, 반품 접수 ID(receiptId)를 별도로 저장해두고, 
<br/>반품철회 이력 조회 API를 통해 취소 여부를 확인해보는 것이 좋습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `12`,
        anchorId: ``,
        question: `저희는 PATCH Method를 사용하지 않습니다. 어떻게 개발해야할까요?`,
        _description: `Developers.coupang 좌측 상단에서 'Season-1 (~v4)'를 선택하시면 
<br/>동일한 API를 POST로 호출하실 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `13`,
        anchorId: ``,
        question: `반품상품 입고 확인처리를 하면 반품 status가 어떻게 변하나요?`,
        _description: `시스템상 환불처리가 완료된 뒤, status가 반품완료(CC)로 변경됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `14`,
        anchorId: ``,
        question: `반품요청 승인처리 API는 어떤 상황에서 사용하나요?`,
        _description: `빠른환불(선환불)조건에 해당하지 않는 상품의 반품이나 반품 회수가 완료되었는데 
<br/>반품회수의 상태에 머물러 있는 경우에는 반품요청 승인 처리를 판매자가 해주시면 반품승인,반품 완료로 진행됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      }, 
      {
        subcategory: ``,
        id: `15`,
        anchorId: ``,
        question: `반품요청 승인처리 API의 cancelCount는 어떤값이 들어가야하나요?`,
        _description: `해당 반품 접수건에 포함된 상품의 모든 갯수를 기재해주시면 됩니다. 
<br/>(예 : A 상품 5개, B상품 2개 반품이라면 cancelCount는 7 입니다.)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `16`,
        anchorId: ``,
        question: `회수송장 API는 어떤 상황에서 어떻게 사용하나요?`,
        _description: `반품자동연동 서비스를 사용하지 않고 자체적으로 반품을 회수하는 판매자의 경우 
<br/>반품/교환 접수 시 본 API를 통해 수동으로 회수 송장을 등록할 수 있습니다.
<br/>계약한 택배사가 있어 반품자동연동 서비스를 이용하는 판매자의 경우 
<br/>사용하실 필요가 없습니다!
<br/>
<br/># 교환/반품 상태별 사용 조건 
<br/>반품 : 반품요청 목록조회 시 status가 반품접수(RETURNS_UNCHECKED) 시,
<br/>교환 : 교환요청 목록조회 시 회수상태(collectStatus)가 BeforeDirection(회수연동전)일 때 사용하시길 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },   
    ]
  },
  {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `CS API`,
    categoryViewValue: `CS API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `고객문의 답변 시, 지원하는 줄바꿈 문자열은 \n, \r 만 가능한가요?`,
        _description: `LF/CR characters 사용에 있어 공식적으로는 \n, \r만 지원하고 있습니다. 
<br/>그 외의 줄바꿈 문자 사용 시, Bad Request로 간주하여 오류가 발생할 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `답변완료 후, 삭제 또는 수정 할 수 있나요?`,
        _description: `완료 된 답변은 삭제할 수 없습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      }, 
    ]
  },

  {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `기타오류`,
    categoryViewValue: `기타오류`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `400 Bad Request 라는 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `클라이언트에서 잘못된 파라메터 등 요청이 잘못된 경우에 발생합니다. 
 <br/>메시지에 따라 요청을 수정하여 다시 요청하시면 됩니다. 만약 메시지 만으로 처리하지 못할 경우 관리자에게 연락해 주십시오.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `401 Unauthorized 라는 오류가 리턴됩니다. 어떻게 해야하나요?`,
        _description: `Hmac Signature 생성이 잘못된 경우 발생합니다. 
 <br/>Hmac 생성 시에 서버시간도 파라메터에 포함하고 있기 때문에 API 요청 시 마다  Hmac을 새로 생성해서 보내주셔야 됩니다. 
 <br/>따라서 서버 시간이 잘못되었을 경우에도 인증실패가 납니다. 
 <br/>
 <br/>개발환경이 .NET인 경우에는 기본 제공 되어지는 “WebRequest / WebClient”에서 인코딩 된 “~” 문자열을 Framework 내부에서 다시 풀어버리지는 않는지 확인 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `'404 Not Found'라는 오류가 리턴되는데 어떻게 해야하나요?`,
        _description: `URI(Uniform Resource Identifier)가 잘못된 경우입니다. 
<br/>다시 한번 확인하여 재시도 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `410 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `사라짐; 호출하려는 API가 만료된 경우입니다. 관리자에게 문의 부탁 드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `412 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `배포되지 않음; 호출하려는 API가 활성화되지 않은 경우입니다.관리자에게 문의 부탁 드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `423 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `잠김; 호출하려는 API 호출이 제한되어 있는 경우입니다.관리자에게 문의 부탁 드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `429 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `너무 많은 요청; API를 너무 많이 호출했을 때 발생하는 코드로, 다음 사항들에 의해 그 기준이 결정될 수 있습니다.
<br/>쓰로틀링을 설정한 상태에서, 쓰로틀링 임계치(약 90%)에 도달한 경우 (X-CAG-Warnings로 쓰로틀링 관련 값이 전달됩니다.)
<br/>X-Extended-Timeout 헤더를 명시했을 때 호출 횟수가 과한 경우`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `500 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `Internal Server Error 또는 "Internal Exception 과 같은 오류가 발생한 경우 
<br/>전송하신 항목에 오류가 있을 경우, 주로 발생합니다 
<br/>
<br/>오탈자가 없는지 먼저 확인 부탁드리며,
<br/>https://developers.coupang.com/에서 제공 중인 예문과 비교하여 확인하시는 것을 권장드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `504 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `시간 초과; 정해진 응답시간을 초과했을 경우입니다. 
<br/>기본 API Gateway 응답시간은 3초로 정해져 있습니다. 
<br/>헤더를 통해 X-Extended-Timeout 값을 조정하여 수행할 수 있으나 그 이후에도 발생시에는 관리자에게 문의 부탁 드립니다.
    `,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `521라는 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `API 제공자와의 연결 실패; 클라이언트와 API Gateway까지 연결은 되었지만 API 제공자의 서버에 문제가 있는 경우입니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `12`,
        anchorId: ``,
        question: `524라는 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `API 제공자와의 접속 시도 실패; 보통 클라이언트가 사용하고자 하는 API 제공자의 호스트 설정이 잘못된 경우에 발생합니다. 다음 사항들이 원인이 될 수 있습니다.
<br/>호스트 기본 설정값인 0.0.0.0을 바꾸지 않고 API 호출
<br/>기존에 사용하지 않던 Profile에서 호출(예를 들어 IT Zone에서 API 제공자가 설정하지 않았는데, 클라이언트가 IT Zone의 API를 호출하는 경우)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `13`,
        anchorId: ``,
        question: `타임아웃 에러가 발생합니다.`,
        _description: `아래의 코드를 발주서 조회/반품조회/교환 조회나 상품등록처럼
<br/>전송하거나 받는 ,json data의 양이 커질수 있는 API에 대해 추가하셔서 client side의 timeout 시간을 늘려주세요.
<br/>
<br/>HttpGet get = new HttpGet(uriBuilder.build().toString());
<br/>/********************************************************/
<br/>// set header, demonstarte how to use hmac signature here
<br/>get.addHeader("Authorization", authorization);
<br/>/********************************************************/
<br/>get.addHeader("X-Requested-By", VENDOR_ID);
<br/>get.addHeader("X-EXTENDED-TIMEOUT", "90000");
<br/>get.addHeader("content-type", "application/json");
<br/>
<br/>● 발주서 목록 조회(분단위 전체)의 경우, 데이터가 없더라도 조회 구간이 클 경우 타임아웃이 발생할 수 있으니
<br/>구간을 10분 정도로 줄여서 중첩하여 조회하시는 것이 좋습니다. 
<br/>
<br/>● 상품 생성 시, 옵션이 많은 상품일 경우
<br/>쿠팡 서버에서는 정상적으로 상품이 등록되었으나, 클라이언트에서 timeout이 발생할 수 있습니다.
<br/>
<br/>이러한 경우, 상품을 재등록처리하지마시고, 
<br/>아래 상품요약 정보 조회 API를 통해 externalVendorSkuCode(업체상품코드) 를  이용하여 상품의 등록여부를 조회하시는 것이 좋습니다. 
<br/>http://developers.coupang.com/docs/season-2/product-api#lookup_product_summary`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
{
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `배송환불API`,
    categoryViewValue: `배송환불API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `조건부 무료배송을 설정하고 싶습니다.`,
        _description: `● 조건부 무료배송 설정 시 : 기본배송비와 반품배송비 금액 설정 
<br/>*초도반품배송비는 0원으로 설정해야합니다. 
<br/>*반품 시, 고객에게 청구되는 배송비는 "기본배송비 + 반품배송비"입니다. 
<br/>
<br/><배송비 종류> 
<br/>3가지 모두 편도이며, 배송비 조건에 맞는 배송비를 설정해주셔야 합니다.  
<br/>
<br/>- 초도반품배송비 (deliveryChargeOnReturn) : 무료배송 시, 판매자가 지불한 금액에 대해 고객에게 청구하는 배송비 
<br/>- 반품배송비 (returnCharge) : 반품받을 때 지불하는 편도 비용
<br/>- 기본배송비 (deliveryCharge) : 조건부 무료배송 시, 고객이 물건을 전달 받기 위해 지불해야하는 비용 
<br/>
<br/>조건부 무료배송은 현재 3가지 금액을 제공하고 있습니다.
<br/>9,800원 이상 무료배송 
<br/>19,800원 이상 무료배송 
<br/>30,000원 이상 무료배송
<br/>
<br/>아래의 예제를 참고하셔서 조건부 무료배송을 설정해주시면 됩니다. 
<br/><9,800원 조건부 무료배송 예제>
<br/>deliveryChargeType: "FREE_DELIVERY_OVER_9800",
<br/>deliveryCharge: 2500,
<br/>freeShipOverAmount: 9800,
<br/>deliveryChargeOnReturn:0,
<br/>returnCharge:2500`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `
상품 연동중 아래와 같은 에러가 발생하고 있습니다.<br/> [code: VALIDATION , error : 일반배송상품의 경우, 반품배송비는 초도반품비의 100%~150%까지만 입력가능합니다. 반품배송비를 변경해주세요]`,
        _description: `
무료배송 상품의 반품 시, 고객에게 청구되는 배송비는 "초도반품배송비 + 반품배송비"입니다. 
<br/>반품배송비가 초도반품배송비보다 과도하게 청구 될 경우 해당 에러가 발생합니다. 
<br/>입력하신 금액이 정확한지 확인하여 주시기 바랍니다. 
<br/>
<br/><배송비 종류>
<br/>3가지 모두 편도이며, 배송비 조건에 맞는 배송비를 설정해주셔야 합니다.  
<br/>- 초도반품배송비 (deliveryChargeOnReturn) : 무료배송 시, 판매자가 지불한 금액에 대해 고객에게 청구하는 배송비 
<br/>- 반품배송비 (returnCharge) : 반품받을 때 지불하는 편도 비용
<br/>- 기본배송비 (deliveryCharge) : 조건부 무료배송 시, 고객이 물건을 전달 받기 위해 지불해야하는 비용`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `송장 업로드가 되지 않습니다 - "이미 저장된 송장번호가 있어, 송장번호 등록이 불가능합니다. (동일송장번호 업로드 조건 : 수취인정보 동일)"`,
        _description: `쿠팡은 6개월 내에 동일한 송장번호가 등록되었는지 유효성 체크를 하고 있습니다.
<br/>만약, 유효한 송장번호를 입력하였으나 해당 오류로 인해 등록이 불가한 경우에는 
<br/>택배사 코드를 DIRECT 로 넣고, 송장업로드를 진행해주시기바랍니다.  
<br/>
<br/>"deliveryCompanyCode": "DIRECT",
<br/>
<br/>*DIRECT로 입력한 경우, 송장 트랙킹이 불가능합니다. 
<br/>다만, 7일 후 정상적으로 매출인식이되므로 염려하지않으셔도 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `분리배송을 하고 싶습니다.`,
        _description: `
분리배송을 위한 예시문을 작성하였습니다. 
<br/>
<br/>주문 예시 상황 : 
<br/>고객이 2개의 다른 상품을 한번에 묶음배송으로 구매하였으나 분리 배송 처리가 필요한 경우 
<br/>
<br/>먼저 보낼 상품A(vendorItemId A),
<br/>나중에 보낼 상품B (vendorItemID B)라고 가정
<br/>
<br/>{
<br/>  "vendorId": "A00011111",
<br/>  "orderSheetInvoiceApplyDtos": [
<br/>    {
<br/>      "shipmentBoxId": 644466823,
<br/>      "orderId": 4000022521677,
<br/>      "vendorItemId": 3937239983, //상품은 vendorItemId단위로 구분하기 때문에 보내실 A상품의 vendorItemId를 입력해주셔야 합니다.
<br/>      "deliveryCompanyCode": "KDEXP",
<br/>      "invoiceNumber": "20180731040124",
<br/>      "splitShipping": true, //해당 주문 건은 분리배송하여 먼저 보낼 것이므로 true를 입력합니다.
<br/>      "preSplitShipped": false,
<br/>      "estimatedShippingDate": ""
<br/>    },
<br/>    {
<br/>      "shipmentBoxId": 644466823,
<br/>      "orderId": 4000022521677,
<br/>      "vendorItemId": 3937239988, //나중에 보낼 상품의 vendorItemId를 입력합니다.
<br/>      "deliveryCompanyCode": "KDEXP", //나중에 보낼 상품도 택배사 코드는 미리 입력하여 전송해주세요.
<br/>      "invoiceNumber": "", //나중에 보낼 상품이기 때문에 송장번호를 입력하지 못 할경우, 아래에 있는 estimatedShippingDate 를 반드시입력해야 합니다.(invoiceNumber와estimatedShippingDate중택1)
<br/>      "splitShipping": true, //해당 주문 건은 분리배송하여 나중에 보낼 것이므로 true를 입력합니다.
<br/>      "preSplitShipped": false,
<br/>      "estimatedShippingDate": "2018-09-30"//나중에 보낼 상품의 출고 예정일을 입력합니다.
<br/>    }
<br/>  ]
<br/>}
<br/>
<br/>위의 정보를 전송하면 분리 배송처리가 됩니다. 나중에 B 상품의 송장을 전송하기 원할 경우,
<br/>아래와 같이 전송해주시면 됩니다.
<br/>{
<br/>  "vendorId": "A00011111",
<br/>  "orderSheetInvoiceApplyDtos": [
<br/>    {
<br/>      "shipmentBoxId": 644466823, //기존 shipmentBoxId를 그대로 사용하면 됩니다.(대신 앞서 보낸 A 상품은 shipmentBoxId가 변경됩니다.)
<br/>      "orderId": 4000022521677,
<br/>      "vendorItemId": 3937239988,
<br/>      "deliveryCompanyCode": "KDEXP",
<br/>      "invoiceNumber": "20180827040555", //발송한 송장번호 입력 
<br/>      "splitShipping": true, //분리 배송처리된 상품이기 때문에 true 
<br/>      "preSplitShipped": true, //이미 분리 배송한 상품이 있는지를 적는 부분입니다. A 상품을 미리 보내고 B를 보내는 것이므로 true를 입력합니다.
<br/>      "estimatedShippingDate": ""//송장 업로드 처리이기 때문에 출고 예정일은 불필요합니다.
<br/>    }
<br/>  ]
<br/>}`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `타임아웃에러가 발생합니다.`,
        _description: `아래의 코드를 발주서 조회/반품조회/교환 조회나 상품등록처럼
<br/>전송하거나 받는 ,json data의 양이 커질수 있는 API에 대해 추가하셔서 client side의 timeout 시간을 늘려주세요.
<br/>
<br/>HttpGet get = new HttpGet(uriBuilder.build().toString());
<br/>/********************************************************/
<br/>// set header, demonstarte how to use hmac signature here
<br/>get.addHeader("Authorization", authorization);
<br/>/********************************************************/
<br/>get.addHeader("X-Requested-By", VENDOR_ID);
<br/>get.addHeader("X-EXTENDED-TIMEOUT", "90000");
<br/>get.addHeader("content-type", "application/json");
<br/>
<br/>● 발주서 목록 조회(분단위 전체)의 경우, 데이터가 없더라도 조회 구간이 클 경우 타임아웃이 발생할 수 있으니
<br/>구간을 10분 정도로 줄여서 중첩하여 조회하시는 것이 좋습니다. 
<br/>
<br/>● 상품 생성 시, 옵션이 많은 상품일 경우
<br/>쿠팡 서버에서는 정상적으로 상품이 등록되었으나, 클라이언트에서 timeout이 발생할 수 있습니다.
<br/>
<br/>이러한 경우, 상품을 재등록처리하지마시고, 
<br/>아래 상품요약 정보 조회 API를 통해 externalVendorSkuCode(업체상품코드) 를  이용하여 상품의 등록여부를 조회하시는 것이 좋습니다. 
<br/>http://developers.coupang.com/docs/season-2/product-api#lookup_product_summary`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `업체직송(DIRECT) 송장 등록 시, 배송완료처리가 되지 않습니다.`,
        _description: `택배사코드를 업체직송(DIRECT)으로 넣으신 경우에는 배송완료처리가 되지 않습니다.
<br/>이는 정상 프로세스이며, 송장 트랙킹이 불가능하기때문입니다.
<br/>배송완료처리가 되지 않더라도, 7일 후 정상적으로 매출인식처리됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `발주서 목록 조회 API 에서 일 단위 / 분 단위 페이징 / shipmentBoxId / orderId 의 차이가 무엇인가요?`,
        _description: `모두 같은 정보를 얻으실 수 있습니다.
<br/>조회하는 방법에 있어 아래의 차이점을 확인하셔서, 필요에 따라 선택 개발해주시면 됩니다. 
<br/>
<br/>* 발주서 목록 조회 각 API 별 안내
<br/>     1. 일 단위 페이징
<br/>       1) 최대 31일 까지 조회 가능
<br/>       2) 페이지 당, 최대 발주서 노출 갯수 제한 가능 (maxPerPage)
<br/>
<br/>     2. 분 단위 페이징
<br/>       1) 해당 일자 내, 24시간 이내로 조회 가능
<br/>       2) 페이지 당, 최대 발주서 노출 갯수 제한 불가 
<br/>
<br/>     3. shipmentBoxId / orderId
<br/>       1) 해당하는 값으로 발주서 단건 조회 가능`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
       {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `주문을 만들고 조회를 해보았는데, 주문건이 조회되지 않습니다.`,
        _description: `일반적으로 결제 완료 후, 주문 조회까지 10분정도 소요됩니다. (발주서 목록 조회)
<br/>빠르게 조회하기 원하실 경우,발주서 단건 조회를 통해 조회가 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `발주서 목록에서 반품 내용을 확인할 수 없습니다.`,
        _description: `반품 내용은 '반품 요청 조회 목록 API'를 이용해야 합니다. 
<br/>만약,  A 오더 건이 배송완료 이후에 반품이 이뤄졌다면, 
<br/>발주서 목록과 반품 요청목록 조회 두 곳에 A 오더 건에 대한 정보가 남아 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `발주서 수집 시, 배송지를 표시하는데 있어 지번/도로명의 구분이 따로 없는건가요?`,
        _description: `네, 지번/도로명 구분은 따로 없습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `11`,
        anchorId: ``,
        question: `발주서 수집 시, shipmentBoxId와 orderId가 노출됩니다. 정확히 무슨차이인지 모르겠습니다.`,
        _description: `
주문을 생성하면, 한 개의 orderId(주문번호)가 생성됩니다. 
<br/>해당 주문건 안에 있는 상품의 묶음 배송 단위마다 shipmentBoxId(묶음배송 번호)가 생성됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `12`,
        anchorId: ``,
        question: `발주서 수집 시, splitShipping과 ableSplitShipping가 노출됩니다. 정확히 무슨차이인지 모르겠습니다.`,
        _description: `
splitShipping : 분리배송 처리가 된 건인지를 나타냅니다. 
<br/>ableSplitShipping : 분리배송 처리가 가능한 건인지를 나타냅니다. 
<br/>
<br/>자세한 분리배송 관련된 내용는 FAQ "분리배송을 하고 싶습니다." 항목을 확인해주세요`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `13`,
        anchorId: ``,
        question: `salesPrice(개당상품가격), orderPrice(결제가격), discountPrice(할인가격)이 각각 무엇을 의미지하는지 잘 모르겠습니다.`,
        _description: `salesPrice : 해당 상품의 1개당 판매 가격입니다. 
 <br/>orderPrice : salesPrice x shippingCount 로 개별 단가와 주문 수량의 곱입니다.
 <br/>discountPrice : 즉시할인쿠폰, 또는 장바구니/카테고리 쿠폰 등이 반영되어 할인 받은 금액입니다.
<br/>
<br/>쿠팡은 기본적으로 일반 판매자의 장바구니/카테고리 쿠폰을 적용하지 않습니다.
<br/>만약, 지원할 경우 쿠팡 부담이므로 셀러의 정산 금액에 영향을 미치지 않습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `14`,
        anchorId: ``,
        question: `주문 후 부분 캔슬 시, 발주서에 해당 내용이 반영되나요?`,
        _description: `
발주서 조회시 나오는 shippingCount는 반품 수량이 반영되지 않은 최초 구매 수량이 노출됩니다. 
<br/>반품된 수량은 cancelCount에 표시됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      }, 
      {
        subcategory: ``,
        id: `15`,
        anchorId: ``,
        question: `주문 제작 상품의 경우 상품 생성시 extraInfoMessage(주문제작 안내 메시지) 를 입력합니다. 해당 값을 발주서에서는 확인할 수 없나요?`,
        _description: `발주서의 etcInfoHeader 파라미터에 표시되며,
<br/>고객이 입력한 개별 입력 항목은 etcInfoValues 파라미터로 노출됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `16`,
        anchorId: ``,
        question: `PATCH Method를 사용할 수 없습니다. 다른 Method는 사용 불가한가요?`,
        _description: `
Developers.coupang 좌측 상단에서 'Season-1 (~v4)'를 선택하시면 동일한 API를 POST로 호출하실 수 있습니다. 
<br/>단, Season-1 의 API는 구버전이므로 불가능한 API를 제외하고는 Seanson-2 API를 사용해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      }, 
      {
        subcategory: ``,
        id: `17`,
        anchorId: ``,
        question: `"배송상태를 변경할 수 없습니다. 주문내역을 확인해주세요." 라는 에러가 노출됩니다.`,
        _description: `전체 결재 취소 또는 부분 결재 취소를 통해 환불이 진행 중인 주문이 있을 때 노출되는 에러입니다. 
<br/>해당 발주서 내역을 재확인 해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `18`,
        anchorId: ``,
        question: `분리배송 설정한 상품을 다시 합포장 설정할 수 있나요?`,
        _description: `이미 분리배송처리된 주문건을 다시 합포장처리할 수 없습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `19`,
        anchorId: ``,
        question: `"배송진행상태가 유효하지 않습니다." 에러가 발생합니다.`,
        _description: `배송상태가 상품준비 중 상태가 아닐 때 송장을 업로드 하면 해당 에러가 발생합니다. 
<br/>송장을 업로드 하려는 상품의 상태가 상품준비 중(INSTRUCT) 인지 확인해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `20`,
        anchorId: ``,
        question: `출고중지 완료 처리 API는 어떤 상황에서 사용하나요?`,
        _description: `아직 상품을 발송하지 않아, 고객 요청대로 상품을 출고하지 않을 예정일 때 선택합니다. 
<br/>(이미 상품을 발송했다면 '이미출고 처리 API'를 호출합니다.)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `21`,
        anchorId: ``,
        question: `출고 완료 처리를 하려고 합니다. cancelCount 파라미터에 어떤 숫자를 넣어야 하나요?`,
        _description: `
cancelCount 파라미터는 출고 중지될 수량입니다. 
<br/>접수 번호 단위로 카운트를 입력해주시면 됩니다. 
<br/>
<br/>Q. 고객이 1개의 order에서 A상품 2개, B상품 3개를 출고중지 요청하여 출고 완료 처리를 하려고 합니다. 
<br/>cancelCount 파라미터에 들어갈 값은 5인가요 2인가요?
<br/>접수 번호 (receiptId) 단위 이기때문에 5를 입력해주시면 됩니다. 
<br/>
<br/>(해당 값은 반품요청 목록조회 API의 cancelCountSum(총 취소수량)과 동일합니다.)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `22`,
        anchorId: ``,
        question: `출고중지 완료 처리를 receiptId 단위가 아닌, 아이템 단위로는 할 수 없나요?`,
        _description: `네, 출고중지를 비롯한 이미출고 처리 API 등은 receiptId 단위로만 처리 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `23`,
        anchorId: ``,
        question: `"[INTERNAL_SERVER_ERROR] 취소반품접수수량과 cancelCount가 일치하지 않습니다." 라는 에러가 발생합니다.`,
        _description: `해당 취소 접수 건에 설정된 취소 수량과, 출고중지 완료 처리하신 수량이 상이합니다. 
<br/>요청된 수량과 동일한 값을 호출해주세요.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `24`,
        anchorId: ``,
        question: `이미출고 처리 API는 어떤 상황에서 사용하나요?`,
        _description: `반품요청목록 조회 시 취소진행 상태가 출고중지요청(RELEASE_STOP_UNCHECKED) 일 경우에 사용가능합니다.  
<br/>이미 상품을 발송한 상태일 때 사용합니다. 이미출고 처리 시, 반품접수가 진행 됩니다. 
<br/>
<br/>단, 이미 출고처리를 진행하시더라도 '상품준비중' 상태 부터 반품비는 판매자 부담입니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `25`,
        anchorId: ``,
        question: `“취소가 불가능합니다. 배송 상태를 확인하세요.” 라는 메시지가 노출됩니다.`,
        _description: `결제완료 건 환불처리 API는 결제완료 상태의 주문만 처리가 가능합니다. 
<br/>다른 상태에서는 에러가 발생합니다. 
<br/>
<br/>상품준비중 취소 처리는 별도의 API가 존재하므로 확인부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
    ]
  },

];
