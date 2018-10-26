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
        question: `401 Unauthorized 라는 오류가 리턴됩니다. 어떻게 해야하나요?`,
        _description: `대부분의 경우 HMAC으로 생성한 요청헤더의 Authorization 문자열의 시간이 초과되었거나 
<br/>Hmac Signature 생성이 잘못되어 인증이 서버에서 거부되었을 때 발생하는 메세지입니다. 
<br/>해당 문자열을 다시 생성하여 시도하면 정상 동작합니다.
 <br/>특히 개발환경이 .NET인 경우, 기본 제공 되어지는 “WebRequest / WebClient”에서 인코딩 된 “~” 문자열을 Framework 내부에서 
다시 풀어버리지는 않는지 확인 부탁드리겠습니다.
<br/>마지막으로 서버의 시각이 변경되었거나 정확하지 않은 지 여부도 체크 부탁드립니다.
<br/>Hmac Signature 생성 예제나 검증은 아래 URL을 참고하세요.
<br/>http://developers.coupang.com/guides/getting-started#hmac_signature_generate 
<br/>http://developers.coupang.com/guides/hmac-gen`,
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
        _description: `현재로서는 상품API의 업체상품 옵션추가정보(extraProperties)필드를 이용하시면 됩니다.
 실제 프론트에 노출되는 값은 아니며, 업체의 편의를 위해 만들어진 필드입니다.
 자사의 별도 관리 코드 및 추가 저장이 필요한 값을 넣어주시면 됩니다.`,
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
관련 사항 발생시 Wing의 판매자지원>온라인문의 [분류에서 Open API 선택]로 문의부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `15`,
        anchorId: ``,
        question: `API 연동시 타임아웃 에러가 발생합니다.`,
        _description: `타임아웃이 빈번히 발생할 경우에 API Call시 X-EXTENDED-TIMEOUT 값을 늘려서 설정해 주세요.
<br/>아래와 같이 X-EXTENDED-TIMEOUT 설정값을 HTTP Header값에 넣어주시면 됩니다.
<br/>get.addHeader("X-Requested-By", VENDOR_ID);
<br/>get.addHeader("X-EXTENDED-TIMEOUT", "60000");
<br/>get.addHeader("content-type", "application/json");`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `16`,
        anchorId: ``,
        question: `API 개발을 위한 샘플코드는 어디에서 확인할 수 있나요?`,
        _description: `Java, PHP,Python, C# 샘플코드를 제공하고 있으며 아래 URL에서 확인하실 수 있습니다.
<br/>http://developers.coupang.com/guides/getting-started#java_example`,
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
<br/>자동 매칭의 과정에서 상품명이나 상품명의 입력이 충분치 않으면 동일한 제품이 아닌 경우에도 다른 상품과 자동 매칭 발생 후 병합이 될때가 있습니다.
<br/>상품이 잘못 병합된 경우를 발견하셨을때는 잘못된 병합으로 발생할수도 있는
<br/>귀책확인과 손실건들의 처리를 위해서 Wing의 판매자지원>온라인문의 메뉴 혹은 판매자 콜센터로 요청주셔야
<br/>상담사분과 상담 이력이 남고 손실 처리사항이 가능하오니
<br/>온라인문의 혹은 판매자 콜센터를 통해 처리를 진행 부탁드립니다.`,
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
        _description: `배송비 무료를 선택하셨을때 기본 배송비를 입력하시면 전달되는 메세지입니다.
deliveryCharge를 0으로 설정하여 연동하여 주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `11`,
        anchorId: ``,
        question: `상품상세설명에 iframe 태그를 입력 시 반영이 안됩니다.`,
        _description: `상품상세설명에서 iframe 태그는 youtube 관련 태그만 허용이 되고 있습니다. `,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `12`,
        anchorId: ``,
        question: `상품생성 시 출고지/반품지 코드는 어디서 확인할 수 있나요?`,
        _description: `출고지/반품지 목록 조회 API를 통해서 조회가 가능합니다.
<br/>각 API 조회 결과에서 outboundShippingPlaceCode(출고지코드)와 returnCenterCode(반품지센터코드)값을 각각 확인하시면 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `13`,
        anchorId: ``,
        question: `상품생성 시 노출카테고리(displayCategoryCode) 코드는 어디에서 확인할 수 있나요?`,
        _description: `최신 노출카테고리 정보는 Wing에 로그인 후 아래에서 다운로드 받으실 수 있습니다. 
<br/>https://wing.coupang.com/excel/categories/download/file
<br/>개별노출카테고리 코드를 가지고 카테고리 메타 정보 조회 API를 통해서 카테고리별 구매옵션(필수), 검색옵션, 고시, 인증정보를 확인하실 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
       {
        subcategory: ``,
        id: `14`,
        anchorId: ``,
        question: `API를 통해 표시되는 카테고리 정보와 쿠팡(www.coupang.com) 웹 사이트에서 노출되는 카테고리 정보가 다릅니다.`,
        _description: `판매자분들이 상품을 등록할때 사용하는 카테고리는 쿠팡의 INTERNAL 카테고리를 사용하시게 됩니다.
<br/>쿠팡에 노출되는 카테고리는 EXTERNAL카테고리로 두 카테고리는 연관 관계를 맺고 있지만 물리적으로 모두 동일하지는 않습니다.` ,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `15`,
        anchorId: ``,
        question: `API 로 상품등록 후에 쿠팡의 상품페이지에서 확인하려면 어떻게 해야 하나요? `,
        _description: `등록하신 상품의 페이지 접속을 위해서는 등록상품ID(sellerproductId)와 옵션ID(vendorItemId)를 가지고 URL을 구성해서 확인할 수 있습니다.
<br/>예를들어 상품의 sellerProductId : 26332272 , vendorItemId : 3102980826 이면
<br/>http://www.coupang.com/vp/products/26332272?vendorItemId=3102980826
<br/>로 URL을 구성하여 접근이 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `16`,
        anchorId: ``,
        question: `상품 승인 이후 상품 수정 API로 가격이 변경되지 않습니다.`,
        _description: `상품승인 이후 originalPrice (할인율기준가)와 salePrice (판매가격)은 상품수정 API가 아닌 각각 아래 API로 수정하시기 바랍니다.
<br/>상품 아이템별 할인율 기준가격 변경 : http://developers.coupang.com/docs/season-2/product-api#change_price_based_on_discount_rate_by_product
<br/>상품 아이템별 가격 변경 : http://developers.coupang.com/docs/season-2/product-api#change_price_by_product`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `17`,
        anchorId: ``,
        question: `상품수정이 불가능한 상태를 알려주세요.`,
        _description: `상품 등록시 승인상태에 따라 상품 정보를 조회만 하거나 조회/변경할 수 있습니다. 
<br/>판매를 요청한 다음 승인이 완료/반려되기 전까지 상품 정보를 바꿀 수 없습니다.  
<br/>승인완료/승인반려 시에는 상품 정보를 조회하고 변경할 수 있습니다. 
<br/>임시저장/승인대기중/부분승인완료 : 상품 정보를 조회만 할 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `18`,
        anchorId: ``,
        question: `OPEN API로 상품정보 수정을 할 때 브랜드명을 넣어야해서 기타라고 넣었더니 노출 상품명 앞에 기타가 나오고 노출상품명이 나옵니다.`,
        _description: `기본적으로 쿠팡 웹에 노출되는 노출상품명은 입력하신 "브랜드" + "제품명" + "상품군" 값을 조합해서 구성이 됩니다.
<br/>현재 문의하신 노출 상품명에서 기타를 빼시려면 브랜드 값에 "기타" 값을 제외하고 올바른 브랜드명으로 연동을 부탁드립니다.
<br/>또한 노출상품명에 대한 수정이 필요한 경우 Wing의 판매자지원> 온라인문의 메뉴에서 상품관리 > 상품노출 분류를 선택 후 수정요청을 해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `19`,
        anchorId: ``,
        question: `상품등록 API에서 externalVendorSku 파라메터는 무슨값을 넣어야 하나요?`,
        _description: `externalVendorSku는 판매자가 관리하고 있는 SKU(Stock Keeping Unit)의 관리ID나 번호를 저장하기 위해 제공되는 필드입니다. 
<br/>필수값이 아닌만큼 상품을 관리하고 계신 ID 등을 자유롭게 입력하시면 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `20`,
        anchorId: ``,
        question: `상품등록 API에서 cdnPath 파라메터는 무슨값을 넣어야 하나요?`,
        _description: `cdnpath는 상품 저장시 쿠팡 내부에서 생성하는 경로입니다. 
<br/>상품등록시점에는 기재하지 않으셔도 되며 상품 수정시에는 이미지에 변화가 없다면 생성된 cdnpath를 전달해주시면 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `21`,
        anchorId: ``,
        question: `상품등록 중에 아래와 같은 에러가 발생합니다.
{   "code": "VALIDATION",  "message": "번들 속성은 하나만 입력이 가능합니다." }`,
        _description: `예를들어 "[64037] 생활용품>건강용품>눈건강/렌즈관리>습윤제/단백질제거제" 카테고리 코드를 카테고리 메타정보조회 API로 조회 하시면 groupNumber라는 값에 1이 동일하게 들어 있게 됩니다.
<br/>위와 같이 조회되는 옵션은 두개의 옵션 중 한개만 선택하여 입력하면 됩니다. 즉 상품 등록 전문에서 "개당 중량" 또는 "개당 용량" 중에 하나만 입력하시면 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `22`,
        anchorId: ``,
        question: `API를 이용한 상품등록 중 구비서류(인보이스영수증) 를 업로드 하려고 합니다.
인보이스 영수증 URL을 requiredDocuments 에 추가를 하려하는데, templateName 은 무엇을 적어야 하나요?
그리고 documentPath 에는 "documentPath" 라고 적으면 되는 건가요?`,
        _description: `상품등록 시 해외구매대행 여부를 true로 등록(overseasPurchased: OVERSEAS_PURCHASED)하는 상품은 구비서류(requiredDocuments)로 인보이스영수증의 등록이 필수가 됩니다.
<br/>아래의 전문을 참조하셔서 인보이스영수증을 등록하시고
<br/>"requiredDocuments": [
<br/>{
<br/>"templateName": "인보이스영수증(해외구매대행 선택시)",
<br/>"vendorDocumentPath": "http://94.177.176.13/data/인보이스구매후첨부.txt"
<br/>}
<br/>]
<br/>위의 상품 구매가 발생했을때 해당건의 송장/영수증을 쿠팡의 관련부서로 전달하면 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `23`,
        anchorId: ``,
        question: `상품수정 API에서 displayProductName(노출상품명) 이란 필드는 수정 후 어느 곳에서 확인할 수있나요?`,
        _description: `displayProductName 필드는 신규 등록시 노출상품명을 브랜드+제품명+ 제품군등의 조합을 원하지 않고 다른 방식으로 입력을 원하시거나
<br/>현재 이미 등록하신 상품들의 노출상품명 수정을 원하신다면, 값을 채워서 보내시면 반영이 될 수 있도록 catalog쪽으로 값을 전달합니다.
<br/>만약 수정요청을 한 셀러의 상품이 여러 셀러들 중 위너로서 노출되고 있다면 
<br/>노출상품명은 www.coupang.com의 상품 노출 페이지에서 변경되어 나타나지만 다른 셀러가 위너인 경우에는 다른 셀러의 노출상품명이 나타나게 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `24`,
        anchorId: ``,
        question: `상품 아이템별 가격 변경 API로 가격변경 시 아래와 같은 에러가 발생합니다.
가격변경에 실패했습니다. [옵션ID[33*******] : 판매가 변경이 불가능합니다. 변경전 판매가의 최대50% 인하/최대 100%인상까지 변경가능합니다.]`,
        _description: `아이템 별 가격 변경 시 가능한 제한폭이 존재합니다. (최대 50% 인하/최대 100% 인상)  
<br/>해당 API로 변경요청 시 forceSalePriceUpdate 파라메터 값을 true 로 보내시면 가격 변경이 가능합니다. 기본값은 가격 변경 실수를 방지하기 위해 false로 되어 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
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
        question: `송장 업로드 시 이미 저장된 송장번호가 있어, 송장번호 등록이 불가능합니다. (동일송장번호 업로드 조건 : 수취인정보 동일) [합포장번호 : **************] 메세지가 발생하며 송장 업로드가 되지 않고 있습니다`,
        _description: `중복된 송장 번호가 이미 등록되어 있을때 발생하는 경우로서 여러 연관 사례가 있을 수 있습니다
<br>1.택배사에서 송장번호를 중복되게 발생할 수 있기에 송장 등록 시 6개월내에 중복이 있는지 검사
<br>2.실제 묶음배송 요청되지 않은 경우에 대해 셀러사에서 묶음배송을 처리시에 발생가능합니다. 이럴 경우에는 다른 주문에 대해서 수취인이 동일한 경우 같은 송장번호로 업로드가 가능하되, 한번에 같이 보내면 되지만 한번 등록한 송장번호로 다시 등록하면 에러가 발생합니다.

<br>위의 메세지 발생 하는 송장 처리 오류 관련하여 쿠팡의 정책 사항
<br>--------------------------------------------------------------------------------------------------------

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
 <br>--------------------------------------------------------------------------------------------------------`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `송장 업로드 시 "배송진행상태가 유효하지 않습니다." 에러가 발생합니다.`,
        _description: `배송상태가 상품준비 중 상태가 아닐 때 송장을 업로드 하면 해당 에러가 발생합니다.  
<br/>송장을 업로드 하려는 상품의 상태가 상품준비 중(INSTRUCT) 인지 확인해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `반품요청 목록 조회 API에서 status를 RU또는 UC로 조회해도 동일한 주문번호가 조회됩니다.`,
        _description: `배송 전에 구매자가 취소할 경우 RU로 표시되기에 동일하게 출력될 수 있습니다. 
<br/>UC일 경우 주문송장등록 여부로 판단하셔서 송장등록이 되었을 경우 임의 출고 처리를 하시고 송장등록이 안되었을 경우 주문취소 처리를 하시면 됩니다. 
<br/>RU일 경우 출고중지 요청을 하시면 됩니다.  `,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `발주서 목록 조회 API에서 수취인 안심번호가 null로 표시됩니다.`,
        _description: `안심번호는 배송이 완료된 시점에서 +5영업일 후 삭제가 되어 null로 표시됩니다.
<br/>배송완료 또는 업체직송이 처리되지 않은 경우 최장 30일 까지 사용 가능합니다. SMS 발송이 불가능할 경우 발송 사유와 함께 판매자콜센터(1600-9879) 또는 온라인문의로 문의 주시면 됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `상품결제 후 발주서 목록조회 API에서 해당 주문내역이 바로 조회되지 않습니다.`,
        _description: `결재완료 후 쿠팡내부에서 안심번호 채번 등의 처리로 인해 5분 정도의 시간이 소요됩니다. 
<br/>묶음배송 상품 중에 부분취소를 했을 경우에도 나머지 상품 조회 까지는 최소 10분 이상 시간이 소요가 됩니다.
<br/>이는 부분 반품이 완료되고 실제 구매 수단별로 환불의 과정이 완료되는 것을 기다리기 때문입니다. 
<br/>그 중간에 반품 철회도 이루어질 수 있어 어느정도 시간이 소요되는 점 양해 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `발주서 조회 API 로 주문 수집하는데 상품 정보가 종종 누락됩니다.`,
        _description: `"주문을 수집하실 때 시간 중첩 구간을 두고 Rolling 스케쥴링 구성하실수 있도록 부탁 드리겠습니다.
<br/>(24~02, 01~03, 02~04....) 이런 식으로 스케줄링을 구성할 경우 주문의 누락을 방지하실 수 있습니다."`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
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
