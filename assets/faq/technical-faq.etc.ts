export const technicalFaq = [
  {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `common`,
    categoryViewValue: `일반`,
    dataList: [
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `400 Bad Request 라는 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `클라이언트에서 잘못된 파라메터 등 요청이 잘못된 경우에 발생합니다. 메시지에 따라 요청을 수정하여 다시 요청하시면 됩니다.
 만약 메시지 만으로 처리하지 못할 경우 관리자에게 연락해 주십시오.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `401 Unauthorized 라는 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `대부분의 경우 HMAC으로 생성한 요청헤더의 Authorization 문자열의 시간이 초과되어 액세스가 제한된 경우 입니다. 해당 문자열을 다시 생성하여 시도하면 정상 동작합니다.
 특히 개발환경이 .NET인 경우, 기본 제공 되어지는 “WebRequest / WebClient”에서 인코딩 된 “~” 문자열을 Framework 내부에서 다시 풀어버리지는 않는지 확인 부탁드리겠습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `404 Not Found 라는 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `URI(Uniform Resource Identifier)가 잘못된 경우입니다. 다시 한번 확인하여 재시도 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `410 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `사라짐; 호출하려는 API가 만료된 경우입니다. 관리자에게 문의 부탁 드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `412 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `배포되지 않음; 호출하려는 API가 활성화되지 않은 경우입니다.관리자에게 문의 부탁 드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `423 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `잠김; 호출하려는 API 호출이 제한되어 있는 경우입니다.관리자에게 문의 부탁 드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `429 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `너무 많은 요청; API를 너무 많이 호출했을 때 발생하는 코드로, 다음 사항들에 의해 그 기준이 결정될 수 있습니다.
쓰로틀링을 설정한 상태에서, 쓰로틀링 임계치(약 90%)에 도달한 경우 (X-CAG-Warnings로 쓰로틀링 관련 값이 전달됩니다.)
X-Extended-Timeout 헤더를 명시했을 때 호출 횟수가 과한 경우`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `500 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `HTTP 500 내부 서버 오류란 서버에서 예상하지 못한 에러가 발생했음을 의미합니다.
보통 API 제공자에 문제가 생겼을 경우 발생하며, API Gateway에 문제가 생겼을 경우에도 발생할 수 있습니다.
 간혹 입력 데이터 속성 Type 오류 (숫자형 입력 -> 문자열이 입력됨) 등으로 발생될 수 있으며 장시간동안 동일한 메세지가 발생시에는 관리자에게 문의 부탁 드립니다..`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `504 오류가 리턴됩니다 어떻게 해야하나요?`,
        _description: `시간 초과; 정해진 응답시간을 초과했을 경우입니다. 기본 API Gateway 응답시간은 3초로 정해져 있습니다. 헤더를 통해 X-Extended-Timeout 값을 조정하여 수행할 수 있으나 그 이후에도 발생시에는 관리자에게 문의 부탁 드립니다.-내부 관리자가응답시간을 따로 설정할 때는 API Forge를 통해 설정(Timeout Configuration for each APIs)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `11`,
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
호스트 기본 설정값인 0.0.0.0을 바꾸지 않고 API 호출
기존에 사용하지 않던 Profile에서 호출(예를 들어 IT Zone에서 API 제공자가 설정하지 않았는데, 클라이언트가 IT Zone의 API를 호출하는 경우)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `13`,
        anchorId: ``,
        question: `저희가 제공하는 Unique Key를 쿠팡 시스템에 반영하여 상품 등록, 배송, 교환 등의 운영 및 정산에 활용하되록, 판매되는 ITEM (Vendor ITEM) 레벨로 관리될 수 있나요?`,
        _description: `"현재로서는 상품API의 업체상품 옵션추가정보(extraProperties)필드를 이용하시면 됩니다.
 실제 프론트에 노출되는 값은 아니며, 업체의 편의를 위해 만들어진 필드입니다.
 자사의 별도 관리 코드 및 추가 저장이 필요한 값을 넣어주시면 됩니다."`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `14`,
        anchorId: ``,
        question: `특정데이터에서 특수기호(+, &) 존재 시 데이터 삽입이 안되는 것 같습니다.`,
        _description: `각 사의 환경이 달라 데이터 인코딩시 발생 할 수 있으므로,
관련 사항 발생시 관리자 메일로 문의부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },

  {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `productApi`,
    categoryViewValue: `상품 API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `API를 이용해 상품을 정상 등록/승인 후 상품을 조회 시 저희가 등록한 상품과는 다른 상품으로 노출이 됩니다.`,
        _description: `쿠팡의 아이템 마켓 구성을 위해서 동일한 상품을 판매하는 업체의 동일한 상품들은 상품 등록 후
자동 매칭 및 수동 매칭의 과정을 거칩니다.

자동 매칭의 과정에서 상품명이나 상품명의 입력이 충분치 않으면 동일한 제품이 아닌 경우에도 다른 상품과 자동 매칭 발생 후 병합이 될때가 있습니다.
상품이 잘못 병합된 경우를 발견하셨을때는
잘못된 병합으로 발생할수도 있는
귀책확인과 손실건들의 처리를 위해서 온라인문의 혹은 판매자 콜센터로 주셔야
상담사분과 상담 이력이 남고 손실 처리사항이 가능하오니
온라인문의 혹은 판매자 콜센터를 통해 처리를 진행 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `쿠팡에서 API로 전달받은 상품의 Product ID가 다른 판매자의 상품으로 확인될때`,
        _description: `쿠팡의 아이템 마켓에서는 위너라는 것이 존재합니다.
그래서 동일한 product에서는 위너가 대표적으로 노출이 되고, 다른 업체의 상품들은 바이박스라고 하는 것에 노출됩니다.
하지만 해당 상품의 경우는, 품절 상태이기 때문에 바이박스에 노출되지 않는 것입니다.
만약 해당 상품이 동일한 상품이 없고, 위너라면 일시품절상태로 노출 될 것입니다.
하지만 위 상품과 동일한 상품이 존재하는 상태이고, 동일 상품이 위너가 되어 원하시는 상품은 [다른 판매자 상품 보기] 화면에 노출 되는 것이 정상적인 상황이지만,
해당 상품은 품절 상태이기 때문에  [다른 판매자 상품 보기] 화면에도 노출되지 않는 것입니다.
`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `API 연동 개발 및 연동을 완료하였는데, 실제 승인완료된 상품들이 쿠팡 페이지에 정상적으로 노출되는 지 테스트가 필요합니다.`,
        _description: `노출이 원하시는 업체코드 및 상품코드를 관리자에 전달해주시면 테스트를 위한 노출을 진행합니다. 고객들의 오주문 가능성이 있으므로, 재고 수량을 0(품절처리하여)으로 처리하거나 상품 등록 후 판매 중지 처리해야 합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      // {
      //   subcategory: ``,
      //   id: `5`,
      //   anchorId: ``,
      //   question: `쿠팡API연동을 테스트환경에서 Production환경으로 적용하기 위해 카테고리 정보를 맞추려고 합니다.쿠팡의 Open API사이트에 전체카테고리 정보 다운로드를 사용하려고 하는데 이 카테고리 정보가 현재 유효한 카테고리 정보인지 확인차 문의드립니다. 또한 카테고리 개편시 쿠팡에서 별도로 공유 해주는 건지도 확인 부탁드립니다 `,
      //   _description: `전체 카테고리 정보 다운로드 기능은 매시간 최신버전으로 업데이트 되기 때문에,아주 예외의 케이스를 제외하고는 현시각에 가장 최신정보를 받으실 수 있습니다.`,
      //   _referenceInfo: ``,
      //   _relationInfo: ``,
      // _warning: ``,
      // },
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `기존 연동업체(샵링커)를 통해 상품 등록시에는 승인반려가 나는 경우가 없었는데 API를 통해 직접 등록한 상품은 반려처리가 되고 있습니다`,
        _description: `유입 경로에 상관 없이(연동업체, Open API 어느 것을 통하든) 동일한 속성 승인 과정을 거칩니다.
(다만, 메뉴얼을 통해 속성 승인을 하는 경우에 자동 승인 처리와 다른 결과를 보일수 있음)
그렇기 때문에 연동업체가 데이터를 정제하여 상품 등록시의 속성 값이 다르게 입력된 것으로 보이며
만약 동일한 속성값을 사용하여 연동업체를 통해 등록한다 해도,
반려 사유는 동일합니다.
`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `상품등록 후 고객들에게 노출된 상품들이 묶음배송을 선택할 수 없습니다.`,
        _description: `상품 등록 시 unionDeliveryType=UNION_DELIVERY로 등록한 제품만이 쿠팡 사이트에서 묶음 배송을 선택할 수 있습니다.

※ 묶음 배송 조건

<br>묶음 배송 설정시, 출고지 정보 필수 입력 / 출고지 정보가 같은 상품만 묶음 배송 가능
<br>묶음 배송 설정시, 배송비 종류에 따른 조건
<br>무료배송 : 기본배송비 0원, 초도반품배송비 2,500원, 반품배송비 2,500원으로 자동 설정
<br>9800이상 무료배송 / 조건부무료배송 / 유료배송 : 기본배송비 2,500원, 반품배송비 2,500원으로 자동 설정
<br>착불배송 : 합배송 설정 불가
`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `"status code:400
status message:Bad Request
result:{"code":"VALIDATION","message":"배송비 종류가 무료 배송이면 기본배송비, 조건부무료가 0원 입니다."}`,
        _description: `"배송비 무료를 선택하셨을때 기본 배송비를 입력하시면 전달되는 메세지입니다.
deliveryCharge를 0으로 설정하여 연동하여 주시기 바랍니다."`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
//       {
//         subcategory: ``,
//         id: `11`,
//         anchorId: ``,
//         question: `"상품 연동중 아래와 같은 에러가 발생하고 있습니다.
//
// code : VALIDATION , error : 일반배송상품의 경우, 반품배송비는 초도반품비의 100%~150%까지만 입력가능합니다. 반품배송비를 변경해주세요."`,
//         _description: `"초도반품배송비는 무료배송인경우에 셀러가 최초 배송비를 다시 돌려받는것으로
// 초도 반품배송비를 일반 반품비나 최초 배송비보다 너무 높게 설정하는것은
// 고객에게 좋지 않은 Customer Experience를 줄 수 있기에
// 쿠팡 정책으로 Validation이 수행됩니다.
//
// 1) 각종 배송비가 25만원 넘을경우,
// <br>
// "기본배송비는 0원~250,000원까지만 입력이 가능합니다."
// <br>
// "반품배송비는 0원~250,000원까지만 입력이 가능합니다."
// <br>
// "초도반품비는 0원~250,000원까지만 입력이 가능합니다."
// <br>
// 2) 무료배송인 경우 validation + alert
// <br>
// 2-1) 무료배송 and '일반배송'이 아닌경우
// <br>
// 반품배송비는 초도반품배송비와 같거나, 크게 입력해야한다. (초도반품배송비의 100% 이상입력가능 - 기존 validation)
// -*** 알럿문구:반품배송비는 초도배송비보다 크커나 같아야합니다. 반품배송비를 변경해주세요.
// 2-2) 무료배송 and '일반배송'인 경우
// -반품배송비는 초도반품비와 같거나, 1.5배까지만 입력가능하다 (초도반품배송비의 100% ~150%까지만 입력가능)
// -***알럿문구 : 일반배송상품의 경우, 반품배송비는 초도반품비의 100%~150%까지만 입력가능합니다. 반품배송비를 변경해주세요."""`,
//         _referenceInfo: ``,
//         _relationInfo: ``,
      // _warning: ``,
//       },
    ]
  },
  {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `deliveryApi`,
    categoryViewValue: `배송/환불 API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `송장 업로드 시 아래와 같은 메세지가 발생하며 송장 업로드가 되지 않고 있습니다
{"code":"200","message":"OK","data":{"responseCode":99,"responseMessage":"FAIL","responseList":[{"shipmentBoxId":***************,"succeed":false,"resultCode":"NOT_ALLOW_INVOICE_NUMBER_RE_UPLOAD","retryRequired":false,"resultMessage":"이미 저장된 송장번호가 있어, 송장번호 등록이 불가능합니다. (동일송장번호 업로드 조건 : 수취인정보 동일) [합포장번호 : **************]"}]}}

수취인정보 동일한 케이스로 테스트했는데도 동일 송장번호로 실패되고 있습니다.`,
        _description: `중복된 송장 번호가 이미 등록되어 있을때 발생하는 경우로서 여러 연관 사례가 있을 수 있습니다
<br>1.택배사에서 송장번호를 중복되게 발생할 수 있기에 송장 등록 시 6개월내에 중복이 있는지 검사하고 있음.
<br>2.실제 묶음배송 요청되지 않은 경우에 대해 셀러사에서 묶음배송을 처리시에 발생가능합니다. 이럴 경우에는 다른 주문에 대해서 수취인이 동일한 경우 같은 송장번호로 업로드가 가능하되, 한번에 같이 보내면 되지만 한번 등록한 송장번호로 다시 등록하면 에러가 발생합니다.

<br>위의 메세지 발생 하는 송장 처리 오류 관련하여 쿠팡의 정책 사항
<br>---------------------------------------------------------------------------------------------------------------------------

송장 처리 오류가 발생하는 사유는
<br>1. 시스템상에서 유효하지 않은 운송장으로 인식
<br>2. 이미 다른 주문건의 운송장이 등록되어 있는 경우
<br>가 있습니다.

이러한 사유로 운송장 등록이 되지 않을 때,
배송상태 B, C, D 여부와 상관없이 판매자가 입력한 운송장이 실제 고객에게 출고된 운송장으로 확인될 경우
'업체직송'으로 운송장을 등록해드리고 있습니다.
<br>
<br>
또한 배송이 정상적으로 완료됐으나, 배송상태 C, D에 머물러 있을 경우에도
강제로 업체직송 처리하고 있는 점 참고 부탁드립니다.
 <br>---------------------------------------------------------------------------------------------------------------------------`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
//   {
//     epic: `technical`,
//     epicViewValue: `Technical`,
//     category: `returnApi`,
//     categoryViewValue: `반품 API`,
//     dataList: [
//       {
//         subcategory: ``,
//         id: `1`,
//         anchorId: ``,
//         question: `"반품 테스트 중에 고객이 사용하는 쿠팡의 반품 신청화면에서
// 1.반품 자동 회수 접수
// 2.직접 반품 접수(이미 반품 회수)
// 으로 회수방법을 선택할 수가 잇는것을 파악했습니다.
//
// 반품 목록 조회 API(/v2/providers/wing_api/apis/internal-api/v1/return/time-frame)를 통해 조회시
// 반품 자동회수 접수 시에는 returnDeliveryType(회수종료)가 연동택배 또는 수기관리로 값이 명확하게 넘어오지만
// 직접 반품 접수(이미 반품 회수)의 경우는 returnDeliveryType(회수종류)가 빈 값으로 넘어오고 있습니다.
// 반품 API로 반품 조회 시 returnDeliveryType이 빈 값으로 넘어 올 경우 직접 반품 접수인 것으로 인식하면 되는지 확인 부탁 드립니다"`,
//         _description: `"returnDeliveryType값은 Shipment에서 전달된 ReturndeliveryStatus->invoiceNumber->linkageTaget 값을 이용해 구성됩니다.
//
// linkageTarget 정보는 회수지시의 연동대상을 관리하는 필드입니다.
//
// TMS로 연동할지, goodsflow로 연동할지, CVSnet 등의 정보를 갖고 있습니다.
// 쿠팡과 택배사 사이의 연결고리가 되는 업체를 저장하고 있습니다.
//
// 자동회수가 아니면 택배사와 시스템으로 연동을 하지 않기 때문에 해당 값을 가지고 있지 않습니다.
//
// 해당 값이 없다면 수동회수로 판단하여도 무방합니다.
// 수동회수는 이미회수 외에도
// CS의 수기송장등록, 자동회수 불가 아이템의 회수 등등의 케이스가 있습니다."`,
//         _referenceInfo: ``,
//         _relationInfo: ``,
  // _warning: ``,
//       },
//     ]
//   },
  {
    epic: `technical`,
    epicViewValue: `Technical`,
    category: `settlementApi`,
    categoryViewValue: `정산 API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `쿠팡의 배송비 정산과 관련된 정책은 어떻게 되나요`,
        _description: `[배송비 인식시점 기준]
- 정상 배송의 경우 : 상품 구매확정일 (배송완료 D+7)
<br>- 취소 반품의 경우 : 고객 귀책일 경우 결제취소일 (고객에 반품배송비 제외하고 환불)
<br>- 교환의 경우 : 고객 귀책일 경우 고객이 배송비를 박스에 동봉 (따라서 쿠팡 정산 없음)
<br>- 위의 과정에 대해 판매자가 쿠팡확인요청 진행한 경우 : 쿠팡확인요청 정산 기준에 따름

<br> * 반품/교환이 판매자 귀책일 경우는 쿠팡의 정산 없음 (판매자 자체 부담)
<br> * 고객이 배송비를 미 동봉하였을 경우 등은 판매자가 쿠팡확인요청으로 해결

참고로 쿠팡의 구매확정 정책이 "고객배송완료 시점 D+8에서 D+7로" 변경되었습니다.
즉, 고객에게 배송이 완료된일로 부터 7일후에 매출로 인식이 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
  // {
  //   epic: `technical`,
  //   epicViewValue: `Technical`,
  //   category: `common`,
  //   categoryViewValue: `Common`,
  //   dataList: [
  //     {
  //       subcategory: ``,
  //       id: ``,
  //       anchorId: ``,
  //       question: ``,
  //       _description: ``,
  //       _referenceInfo: ``,
  //       _relationInfo: ``,
  // _warning: ``,
  //     },
  //   ]
  // },
];
