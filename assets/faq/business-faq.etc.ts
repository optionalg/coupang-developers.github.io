export const businessFaq = [
{
    epic: `business`,
    epicViewValue: `Business`,
    category: `API Key`,
    categoryViewValue: `API Key`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `쿠팡 오픈 API를 이용할 때 비용이 발생하나요?`,
        _description: `아니요. 무료입니다.
쿠팡 오픈 API는 쿠팡 판매자라면 누구나 사용할 수 있도록 공개되어있습니다. 
<br/>
● OEPN API 연동 가이드  
https://developers.coupang.com/guides/getting-started`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `AccessKey, SecretKey는 어디서 발급 / 확인 할 수 있나요?`,
        _description: `
1. API Key 발급 방법<br/>
 API Key 발급에 관한 자세한 사항은 아래 URL을 참고 바랍니다.<br/>
http://developers.coupang.com/guides/getting-started#obtaining_an_openapi_key<br/>
● WING 로그인 > 우측상단 업체명 (클릭) > 업체정보 변경 (클릭) > 판매 정보 탭 (클릭) > OPEN API 키 발급 약관동의 (클릭) > 발급 (클릭) <br/>
<br/>
2. 발급된 Key 확인 방법<br/>
API KEY 발급을 완료하면, 해당 화면 하단에 ‘업체코드 / Access Key / Secret Key’가 노출됩니다. <br/>
해당 값이 API 연동에 사용하는 값입니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `AccessKey, SecretKey는 어떻게 재발급 / 삭제 할 수 있나요?`,
        _description: `Access Key, Secret Key의 재 발급 및 삭제는 지원하고 있지 않습니다. 
<br/>해당 Key 값이 외부로 유출되지 않도록 각별한 주의 부탁드립니다.

<br/>API연동시에는 기존에 발급 받으신 Key를 활용하여 사용부탁드립니다. 

<br/>● 기존에 발급 된 key 확인 방법 
<br/>WING 로그인 > 우측상단 업체명 (클릭) > 업체정보 변경 (클릭) > 판매 정보 탭 (클릭) > OPEN API 키 확인`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `Hmac 생성 가이드가 있나요?`,
        _description: `아래 링크에서 Hmac 생성 예제를 참고해주세요.

<br/>Java 를 사용하시는 판매자께서는  'Java HMAC Generator SDK'를 다운 받으시면 보다 편하게 
<br/>개발하실 수 있습니다. (URL 페이지 내에서 다운로드 가능)

<br/>● Hmac가이드 및 샘플 예제
<br/>https://coupa.ng/bfQRDy`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `Specified signature is expired. 401 에러가 리턴됩니다.`,
        _description: `401 에러는 Hmac Signature 생성이 잘못되었거나, 사용 시간이 만료되었을 때에 발생합니다. 

<br/>Hmac Signature 생성은 쿠팡 API을 호출할때 마다 새롭게 생성하셔야 됩니다.
<br/>따라서, 일정 시간 이후 동일한 Hmac 값으로 인증을 시도할 경우 401에러가 리턴됩니다. 

<br/>http://developers.coupang.com/guides/getting-started#hmac_signature_generate 에서 예제를 참고하셔서 
<br/>Hmac 생성을 하실 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `Invalid signature 에러가 리턴됩니다. (HMAC 오류)`,
        _description: `해당 에러는 Hmac 생성 에러입니다. 
<br/>vendorId, accesskey, secretkey 확인과 함께 설정 시간이 정확한지, 서버 Path를 실제 사용이 가능한 경로로 변경하였는지 확인해주세요.

<br/>● Hmac 생성 예제  
<br/>http://developers.coupang.com/guides/getting-started#hmac_signature_generate 

<br/>● Hmac 생성 String 체크 
<br/>http://developers.coupang.com/guides/hmac-gen`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `vendorID(업체코드)는 어디서 확인할 수 있나요?`,
        _description: `WING 로그인 후, 오른쪽 상단의 업체 명을 클릭하시면 A또는 C로 시작하는 업체코드를 확인하실 수 있습니다. 
<br/>예시 ) A000001234`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      ]
},
{
    epic: `business`,
    epicViewValue: `Business`,
    category: `general`,
    categoryViewValue: `일반`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `아이템마켓이란 무엇입니까?`,
        _description: `아이템마켓이란 여러 판매자가 같은 상품을 한 페이지에서 파는 장터입니다. 여러 판매자는 같은 상품을 한 아이템페이지에서 판매할 수 있습니다. 쿠팡은 가격이 경쟁력 있고 고객경험이 좋은 아이템위너를 실시간으로 선정해 고객에게 가장 먼저 보여줍니다. 아이템위너가 되면 트래픽이 집중돼 매출이 크게 오를 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `아이템위너가 되려면 어떻게 해야 합니까?`,
        _description: `판매가격, 배송비, 할인, 재고수량, 배송소요기간, 판매자점수 등 복합적인 기준에 따라 아이템위너를 실시간으로 선정합니다. 자세한 내용은 WING > 도움말 > 아이템위너 도움말에서 확인하세요. `,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `카테고리별 판매수수료는 어디서 확인할 수 있습니까?`,
        _description: `아래의 링크를 누르면 카테고리별 판매수수료를 확인할 수 있습니다.`,
        _referenceInfo: `<a href="https://wing.coupang.com/vendor-inventory/commission-info" target="_blank">수수료 확인</a>`,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `쿠팡 오픈 API를 이용할 때 비용이 듭니까?`,
        _description: `쿠팡 오픈 API는 쿠팡 판매자라면 누구나 사용할 수 있도록 무료로 공개한 API입니다. 제휴가 필요한 판매자의 경우, 별도 심사를 통해 제휴를 맺고 있으며 이때 오픈 API도 무료로 제공합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `일별 생성할 수 있는 Query 개수 제한이 있습니까?`,
        _description: `특별한 제한은 없습니다. 단, 이용약관에 따라 비정상적인 사용이나 동작으로 시스템 부하가 발생하는 경우 이용을 제한할 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `발급받은 API 키(Hmac 키)를 갱신하거나 변경하려면 어떻게 합니까?`,
        _description: `"기존 API 키(Hmac 키)를 삭제하거나 다시 발급받으려면 WING> 판매자지원 > 온라인문의 메뉴를 이용하세요. 다음의 양식에 맞춰 작성하시기 바랍니다.
<ul>
<li>분류 "Open API" 선택</li>
<li>제목 : [판매자ID] API 키 재발급 / 삭제 요청</li>
<li>본문 : 판매자명, 요청자 또는 담당자 정보 기재"</li>
</ul>`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `쿠팡 오픈 API 키 발급이 안됩니다.`,
        _description: `http://developers.coupang.com/guides/getting-started#obtaining_an_openapi_key 에서 자세한 키 발급 방법을 확인해주시기 바랍니다.
1 .약관 동의 처리를 정상적으로 마치셨는지 확인 부탁드리며 
2. 브라우저를 현재 사용하고 계시는 브라우저와 다른 것을 사용하셔서 시도해 주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
      
      
      
  {
    epic: `business`,
    category: `delivery`,
    categoryViewValue: `배송`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `쿠팡과 배송 정보를 연동하는 택배사를 어떻게 알 수 있습니까?`,
        _description: `"쿠팡은 굿스플로와 제휴를 맺은 택배사 전체와 배송정보를 연동합니다. 아래의 링크를 누르면 택배사 목록을 확인할 수 있습니다.`,
        _referenceInfo: `<a href="http://www.goodsflow.com/lapssolution.html" target="_blank">택배사 목록정보</a>`,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `9,800원 이외 다른 금액으로 무료배송 조건을 설정할 수 있습니까?`,
        _description: `쿠팡은 무료배송, 유료배송, 9,800원 이상 무료배송 3가지 배송정책만 운영합니다. 9,800원 외 다른 금액으로 무료배송 조건을 설정할 수 없습니다. 유료배송으로 전환하는 방법을 고려하시길 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `반품할 때 반품배송비를 동봉하라고 고객에게 안내하려면 어떻게 합니까?`,
        _description: `반품할 때 반품배송비 동봉은 허용하지 않습니다. 상품을 회수하고 고객에게 환불할 때 반품사유를 제공한 자(고객 또는 판매자)가 반품배송비를 최종 부담하도록 정산합니다. `,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `주문번호, 배송BOX ID, 운송장 번호는 어떻게 다릅니까?`,
        _description: `"
<ul>
  <li>주문번호 : 고객이 주문할 때 사용한 장바구니를 기준으로 부여하는 고유 번호</li>
  <li>배송 BOX ID : 주문번호가 같은 주문을 분리배송할 때 포장박스를 기준으로 부여하는 고유 번호</li>
  <li>운송장번호 : 상품의 배송상태를 추적하고 관리하기 위해 택배사가 부여한 고유 번호</li>
</ul>
        `,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
  {
    epic: `business`,
    category: `settlement`,
    categoryViewValue: `정산`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `정산일은 어떻게 알 수 있습니까?`,
        _description: `"주정산, 월정산 중 1가지 정산유형을 선택할 수 있으며 정산유형에 따라 정산일이 달라집니다.
<ul>
 <li>주정산 : 1주 동안 구매확정된 주문에 대한 금액의 70%를 그주 일요일부터 15영업일 후 입금합니다. 나머지 유보된 30%는 매월 말일 기준 익익월 1일에 입금합니다.</li>
 <li>월정산 : 1달 동안 구매확정된 주문에 대한 금액 100%를 그달 말일부터 15영업일 후 입금합니다.</li>
</ul>

자세한 내용은 WING > 도움말 > 아이템마켓 판매 정산정책 도움말에서 확인하세요. "`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `쿠팡 정산내역이 저희가 계산한 내역과 다른 이유는 무엇입니까?`,
        _description: `"쿠팡은 구매확정을 기준으로 정산합니다. 고객이 구매확정한 날 또는 자동구매확정일(배송완료 후 7일 후)을 매출일로 매출을 계산합니다. 판매자가 매출을 계산하는 기준이 구매확정이 아닐 경우(예: 상품출고일), 결과가 달라질 수 있습니다. 또한 빠른환불 또는 쿠팡확인요청 정산은 별도 주기로 진행됩니다.

WING 또는 API를 통해 주문별 배송상태, 매출내역, 정산예정일 등 상세 정보를 볼 수 있습니다. 자세한 내용은 WING > 도움말 > 아이템마켓 판매 정산정책 도움말에서 확인하세요. "`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `쿠팡확인요청을 요청한 주문은 언제 정산합니까?`,
        _description: `"상품을 회수해 입고된 날 기준 3영업일 안에 쿠팡확인요청을 접수하고, 판매자 귀책이 아닌 주문에 한해 손실보상금을 정산합니다. 쿠팡확인요청을 접수한 날짜에 따라 정산일이 달라집니다. (「전자상거래 등에서의 소비자보호에 관한 법률」 제18조 2항 근거)

<ul>
  <li>1~15일 사이 접수된 주문 : 당월 말일 정산</li>
  <li>16~말일 사이 접수된 주문 : 익월 15일</li>
</ul>

자세한 내용은 WING > 도움말 > 아이템마켓 판매 정산정책 도움말에서 확인하세요. "`,
        _referenceInfo: `
        <a href="http://www.law.go.kr/lsInfoP.do?lsiSeq=182153&efYd=20160930#0000" target="_blank">
         법률정보
        </a>`,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
  {
    epic: `business`,
    category: `product`,
    categoryViewValue: `상품등록/관리`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `19세 이상 구입 가능 상품도 API를 연동할 수 있습니까?`,
        _description: `API를 연동할 때 19세 이상 구입 가능 여부에 체크하면 쿠팡 승인 절차를 거쳐 등록됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `일별 등록할 수 있는 상품 개수 제한이 있습니까?`,
        _description: `특별한 제한은 없습니다. 단, 이용약관에 따라 비정상적인 사용이나 동작으로 시스템 부하가 발생하는 경우 이용을 제한할 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `판매 중인 상품의 옵션정보를 바꾸고 싶은데 변경한 정보가 즉시 반영되지 않습니다. 이유가 무엇일까요?`,
        _description: `판매 중인 상품의 옵션정보를 임의로 바꾸지 못하도록, 판매자가 옵션정보를 변경하면 쿠팡이 검토합니다. 다시 승인완료되기까지 일정 시간이 소요됩니다. 만약 상품명 등 중요한 정보가 잘못 기재된 상태라면 판매를 중지하고 신규 상품으로 재등록하세요. `,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `API로 각각 상품을 등록했는데 하나의 상품으로 묶여있습니다. 어떻게 해야 합니까?`,
        _description: `쿠팡 아이템마켓은 같은 상품을 한 페이지에서 보여줍니다. 판매자가 다르게 관리하더라도 아래의 경우에는 같은 상품으로 노출될 수 있습니다.

<ul>
  <li>상품명이 거의 같은 경우</li>
  <li>대표이미지가 거의 같은 경우</li>
  <li>상세설명이 거의 같은 경우</li>
  <li>그 외 같은 상품으로 판단할 수 있는 근거가 명확한 경우</li>
</ul>

위 정보를 참고해 상품정보를 정확하게 입력하시길 바랍니다. 만약 다른 상품이 같은 상품으로 묶인 경우, WING> 판매자지원 > 온라인문의 메뉴를 이용하세요.
<ul>
 <li> 분류 : 상품관리 > 상품/조회 수정 선택 후 문의 </li>
</ul>
        `,
        _referenceInfo: `https://wing.coupang.com/download/partner?path=faq/2017/03/03/18/0/48ed4993-48c5-497c-9c5d-e76f16e1638a.pdf&fileName=%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC%20%E1%84%91%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A2%E1%84%8C%E1%85%A1%20%E1%84%80%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF_%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A6%E1%86%B7%E1%84%86%E1%85%A1%E1%84%8F%E1%85%A6%E1%86%BA.pdf`,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `해외구매대행 상품을 등록할 때 인보이스 영수증이 없으면 어떻게 해야 합니까?`,
        _description: `고객이 안심하고 상품을 살 수 있도록, 해외구매대행 상품을 판매하려면 인보이스 영수증이 있어야 합니다. 만약 상품을 등록하는 시점이 인보이스 영수증이 발행되기 전이라면, '인보이스 구매 후 첨부.txt' 메모장 파일을 임시로 첨부하세요. 추후 인보이스 영수증이 발행되면 그때 해당 영수증을 등록하시기 바랍니다.

<br/>쿠팡은 해외구매대행 상품의 인보이스 영수증 등록 여부를 수시로 확인하고 있으며, 영수증 등록이 되지 않은 상품을 블라인드 처리할 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `판매요청 시 상품 승인 시 시간이 너무 오래 걸립니다.`,
        _description: `상품등록 후 판매요청 시 보통 15분 이내에 승인이 이루어지지만 상품을 대량 등록하시는 판매자 분들의 경우 별도의 승인 처리를 하고 있어 시간이 다소 소요될 수 있습니다.  비정상적으로 하루 이상 승인이 늦어질 경우 온라인 게시판(상품관리 분류 선택) 또는 판매자 콜센터(1600-9879)로 문의주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `구비서류가 필수인 카테고리는 어떻게 알 수 있나요?`,
        _description: `카테고리 메타 정보 조회 API를 사용하시면
/targets/wing/seller_api/apis/api/v1/marketplace/meta/category-related-metas/display-category-codes/{displayCategoryCode}
<br/>아래 데이터의 조회가 가능합니다.
<br/>기타 인증 서류가 MANDATORY인 카테고리인 경우는 인증서류를 필수로 등록해야 하며
병행수입시는 수입신고필증, 해외구매대행 선택시는 인보이스영수증을 필수로 등록하시면 됩니다.
<br/>"requiredDocumentNames": [
<br/> {
<br/>   "templateName": "기타인증서류",
<br/>   "required": "OPTIONAL"
<br/> },
<br/> {
<br/>   "templateName": "수입신고필증(병행수입 선택시)",
<br/>   "required": "MANDATORY_PARALLEL_IMPORTED"
<br/> },
<br/> {
<br/>   "templateName": "인보이스영수증(해외구매대행 선택시)",
<br/>   "required": "MANDATORY_OVERSEAS_PURCHASED"
<br/> }
<br/>],
`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
];
