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
      {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `다른 언어로 만들어진 예시가 있나요?`,
        _description: `API 연동 샘플로 JAVA, PHP, C#, Python를 지원해드리고 있습니다. 
이외에 추가 언어 지원은 현재 제공되지 않는 점 양해부탁드립니다. 
<br/>
● 연동 예제 샘플
<br/>http://developers.coupang.com/guides/getting-started#java_example`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `사전에 IP 허용 작업이 필요한가요?`,
        _description: `쿠팡은 AWS를 사용하고 있어 귀사 서버에 해외IP 접근이 제한되어있을 경우, 
<br/>api가 정상작동되지 않으니 아래의 대역을 접근 허용해주시기 바랍니다. 
<br/>52.78.59.*`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
       {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `일별 생성할 수 있는 Query 개수 제한이 있나요?`,
        _description: `특별한 제한은 없습니다. 단, 이용약관에 따라 비정상적인 사용이나 동작으로 시스템 부하가 발생하는 경우 이용을 제한할 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      }
      ]
},
{
    epic: `business`,
    epicViewValue: `Business`,
    category: `물류센터API`,
    categoryViewValue: `물류센터API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `[공통] 물류센터API는 꼭 연동이 필요한가요?`,
        _description: `선택사항입니다. 
<br/>생성해야 할 출고지/반품지 수가 적은 경우, WING을 통해 직접 등록하는 것이 효율적입니다. 

<br/>다만, 묶음배송을 진행하실 경우 동일한 출고지의 상품만 묶음배송이 가능합니다.
<br/>묶음배송을 진행하실 판매자님은 반드시  WING 또는 API를 통해 출고지 등록을 해주시기 바랍니다. 

<br/>반품지 등록 없이 상품 등록을 하길 원하는 경우, '상품 생성 API'에서 반품지 센터코드를 "NO_RETURN_CENTERCODE"를 입력하실 수 있습니다. 
<br/>자세한 사항은 상품 생성 API를 참고해주시기 바랍니다. 

<br/>● 상품 생성 API 
<br/>http://developers.coupang.com/docs/season-2/product-api#create_seller_product`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `[반품지] 택배사 계약코드 없이 상품을 등록할 수 있나요?`,
        _description: `
가능합니다. 반품지 등록 없이 상품 생성 시, 직접 반품지를 등록할 수 있습니다. 
<br/>상품 생성 API 전문에서 returnCenterCode 를 NO_RETURN_CENTERCODE 로 입력 후, 반품지를 직접 넣어주시면 됩니다. 
 
<br/>"returnCenterCode": "NO_RETURN_CENTERCODE",

<br/>자세한 사항은 상품 생성 API를 참고해주시기 바랍니다.
<br/>● 상품 생성 API 
<br/>http://developers.coupang.com/docs/season-2/product-api#create_seller_product`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `[공통] 도로명 주소만으로는 출고지/반품지를 등록할 수 없나요?`,
        _description: `
<br/>addressType을 "JIBUN"으로 설정하고 도로명 주소를 입력하여 등록해주시기 바랍니다.
<br/>  
<br/>{
<br/>      "addressType": "JIBUN",
<br/>      "countryCode": "KR",
<br/>      "companyContactNumber": "02-1111-1111",
<br/>      "phoneNumber2": "",
<br/>      "returnZipCode": "05510",
<br/>      "returnAddress": "서울특별시 송파구 송파대로 570",
<br/>      "returnAddressDetail": "101동 101호"
<br/>}
<br/>
<br/>*addressType의 Code 설정에 따른 주소 입력 방법
<br/>   1)  JIBUN : 지번 주소 단독 등록 가능 / 도로명 주소 단독 등록 가능  
<br/>   2) ROADNAME : 도로명 + 지번 주소 이중 등록 필요 (도로명 주소 단독 등록 불가능)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `[공통] 출고지 / 반품지 코드는 어디서 확인할 수 있나요?`,
        _description: `아래의 2가지 방법을 통해 확인 가능합니다.
<br/>
<br/>1. 출고지/반품지 생성 시 Response 값으로 확인 가능
<br/>2. [출고지/반품지 조회 API]를 통해 확인 가능`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `[공통] 출고지/반품지 수정 시, "The shippingPlaceId doesn't match~" 에러가 노출됩니다.`,
        _description: `Path 또는 Request Body에 입력한 outboundShippingPlaceCode가 정확한지 확인해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `[출고지] 도서산간은 어느 지역이며 배송비는 어떻게 설정하나요?`,
        _description: `
도서 산간은 제주 지역과 제주 외 지역 2가지로 구분하고 있습니다. 
<br/>출고지 등록 시, 도서산간 추가 배송비를 설정할 수 있습니다. 
<br/>
<br/> "remoteInfos": [
<br/>    { "deliveryCode": "CJGLS",
<br/>      "jeju": "2500",
<br/>      "notJeju": "0" },
<br/>
<br/>무료배송/조건부무료배송일 경우에도 도서산간추가배송비는 별도 결제됩니다.
<br/>착불배송(가구, 업체직배송 등)의 경우 도서산간추가배송비가 적용되지 않습니다.
<br/>출고지에 도서산간추가배송비를 등록한 경우, 반품 시에도 자동 적용됩니다.(단, 고객/쿠팡 배송비 부담 시)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `[반품지] 택배사 계약정보를 변경하고 싶습니다.`,
        _description: `반품지 수정 API를 통해, 택배사 코드(deliverCode)와 택배사 계약코드(contractNumber) 또는 업체코드(contractCustomerNumber)는 변경하실 수 없습니다. 
<br/>새로운 반품지를 생성하신 후, 상품 수정 API를 통해 상품에 새로운 반품지 정보를 적용해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `[반품지] 중복된 반품지는 등록할 수 없나요?`,
        _description: `반품지 생성 시에는, 동일한 반품지명(shippingPlaceName)과 반품지 주소를 제한하고 있습니다. 
<br/>반품지 상세주소(returnAddressDetail)에 공백을 추가할 경우, 동일하지 않은 주소로 인식하고 있으므로 필요시다면 공백을 추가하여 작성하실 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
       {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `[반품지] 반품지 생성 시, "등록되었으나 계약확인에 실패하였습니다" 에러가 노출됩니다.`,
        _description: `반품지 등록처리는 되었으나, 반품지 계약 정보가 불명확하여 '승인불가' 상태로 등록된 것입니다.
<br/>해당 반품지는 상품 API 연동 시 사용 가능합니다. 
<br/>
<br/>단, 해당 반품지 정보를 가지고 등록한 상품은 굿스플로(반품 자동 회수 서비스)를 이용할 수 없습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `[반품지] 반품지 생성 시,  vendorCreditFee05kg ~ returnFee20kg 값을 입력할 수 없습니다.`,
        _description: `정확한 계약 금액 정보를 기입할 수 없는 경우, 모두 동일한 금액을 입력하여 반품지 생성을 하실 수 있습니다.
<br/>상품에 따른 배송비와 반품비는 [상품 생성 API]에서 정확하게 기입해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `11`,
        anchorId: ``,
        question: `[반품지] 반품지 생성 시, "서버 에러 (알 수 없는 에러 / 신규 에러)" 에러가 노출됩니다.`,
        _description: `반품지 택배사로 우체국 택배사를 선택 하신 경우,  contractCustomerNumber 파라미터를 필수로 입력해야 합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      ]
},


{
    epic: `business`,
    epicViewValue: `Business`,
    category: `카테고리API`,
    categoryViewValue: `카테고리API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `원하는 카테고리 ID를 빠르게 찾을 수 있는 방법이 없을까요?`,
        _description: `
현재 2가지 방법을 통해, 카테고리[displayCategoryCode]를 확인하실 수 있습니다. 
<br/>
<br/>1. 엑셀 파일 다운로드
<br/>WING > 상품관리 > 상품등록 > 상품대량등록(엑셀) > 엑셀업로드 > [전체카테고리 정보 다운로드] 버튼 클릭 
<br/>
<br/>*참고 ) 엑셀 파일 확인 방법
<br/>카테고리 왼쪽 숫자 코드 : displayCategoryCode 
<br/>고시정보 : 1개의 카테고리에 여러가지 '상품고시정보카테고리'가 존재할 수 있으며, 적합한 1개를 선택하여 매칭 
<br/>구매옵션 : 필수(MANDATORY)인 경우, attributes 에 넣어 상품 생성 필요. 
<br/>
<br/>2. 카테고리 조회 API 
<br/>https://developers.coupang.com/docs/season-2/category-api#lookup_exposure_category_list`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `카테고리 메타 정보 조회는 꼭 해야하나요?`,
        _description: `API 연동을 위해서 조회가 필요합니다.
<br/>메타정보를 통해 필수적으로 확인해야하는 파라미터는 아래와 같습니다.
<br/>1. attributeTypeName 옵션타입명 
<br/>2. noticeCategories 상품고시정보 목록
<br/>
<br/>* 메타정보 조회 API를 연동하지 않을 경우, <전체 카테고리 정보 Excel file>에 있는 카테고리 및 고시정보, 구매옵션 항목을 확인해주세요.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `카테고리 유효성 검사는 언제하는 건가요?`,
        _description: `
<br/>카테고리 유효성 검사 API는 현재 사용할 수 있는 카테고리인지 확인하는 용도입니다. 
<br/>카테고리 리뉴얼 등으로 인해, 사용중인 카테고리가 사용하지 않는 카테고리로 변경될 수 있습니다. 
<br/>
<br/>단, 카테고리 리뉴얼은 연 2회 이루어지며 리뉴얼로 인해 변경 된 카테고리에 대하여 판매자님들께 공지를 하고 있습니다. 
<br/>따라서 수시로 카테고리 유효성 검사를 하실 필요성은 없습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `카테고리는 변경되지 않나요?`,
        _description: `카테고리는 연 2회 리뉴얼 됩니다.
<br/>모든 카테고리 변경되는 것이 아닌 일부 카테고리가 추가, 삭제 또는 변경될 수 있습니다.
<br/>
<br/>이미 등록 완료된 상품에 대해서는 셀러가 임의로 카테고리를 변경할 수 없습니다.
<br/>카테고리 변경을 원하실 경우에는 상품을 재등록 하시거나, 
<br/>[WING > 온라인문의 > 자주묻는질문 > 상품관리 > 상품수정 > 카테고리 정보 확인 부탁 드립니다] 항목에서 재 문의 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `isAllowSingleItem (단일상품 등록 가능 여부)가 무엇인가요?`,
        _description: `카테고리 메타 정보 조회 API를 사용하여 isAllowSingleItem (단일상품 등록 가능 여부)를 확인해주시기 바랍니다.
<br/>단일상품 등록 가능 여부가 true인 경우, 옵션 없이 상품 등록이 가능합니다. 
<br/>
<br/>"isAllowSingleItem": true, 
<br/>
<br/>상품 생성 시 attributes 항목을 입력하지 않고 등록하실 수 있습니다. 
<br/>단, false인 경우에는 옵션(attributes)을 입력해야 등록이 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `noticeCategoryName (고시정보명) 이 2 ~ 3 종류씩 노출됩니다. 어떤걸 사용해야 하나요?`,
        _description: `
상품에 맞는 고시정보명 1개를 선택하셔서 입력해주시면 됩니다. 
<br/>일반적으로 2가지 또는 3가지의 고시정보 중 1개를 선택하실 수 있습니다. 
<br/>
<br/>아래의 예시 카테고리의 메타정보 조회에서는  '기타재화'와 '의류' 2가지의 noticeCategoryName(고시정보)가 존재합니다. 
<br/>
<br/>'기타재화'를 선택하실 경우 5개의 고시정보 항목을 상품 생성 시 입력하여주시고,
<br/>'의류'를 선택하실 경우 9개의 고시정보 항목을 상품 생성 시 입력해주시면 됩니다. 
<br/>
<br/>      "noticeCategories":       [
<br/>             {
<br/>                        "noticeCategoryName": "기타 재화",
<br/>                       "noticeCategoryDetailNames":             [
<br/>              {
<br/>                  "noticeCategoryDetailName": "품명 및 모델명",
<br/>                 "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                 "noticeCategoryDetailName": "인증사항",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                             {
<br/>                  "noticeCategoryDetailName": "제조국(원산지)",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제조자(수입자)",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "소비자상담 관련 전화번호",
<br/>                  "required": "MANDATORY"
<br/>               }
<br/>            ]
<br/>         },
<br/>             {
<br/>                   "noticeCategoryName": "의류",
<br/>                   "noticeCategoryDetailNames":             [
<br/>              {
<br/>                  "noticeCategoryDetailName": "제품 소재",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "색상",
<br/>                  "required": "MANDATORY"
<br/>              },
<br/>                              {
<br/>                 "noticeCategoryDetailName": "치수",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제조자(수입자)",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제조국",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제조연월",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                 "noticeCategoryDetailName": "품질보증기준",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "A/S 책임자와 전화번호",
<br/>                  "required": "MANDATORY"
<br/>               }
<br/>            ]
<br/>         }
<br/>      ],`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
    ]
  },
  {
    epic: `business`,
    category: `상품관리API`,
    categoryViewValue: `상품관리API`,
    dataList: [
      {
        subcategory: ``,
        id: `1`,
        anchorId: ``,
        question: `출고지/반품지 코드는 어떻게 확인할 수 있나요?`,
        _description: `
[출고지 목록 조회 API]를 통해 'outboundShippingPlaceCode'를 확인하실 수 있습니다. 
<br/> ● 출고지 목록 조회 API
<br/> http://developers.coupang.com/docs/season-2/distribution-center-api#lookup_outbound_shipping_facility_list
<br/> 
<br/> [반품지 목록 조회 API]를 통해 'returnCenterCode'를 확인하실 수 있습니다. 
<br/> ● 반품지 목록 조회 API
<br/> http://developers.coupang.com/docs/season-2/distribution-center-api#lookup_return_shipping_facility`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `2`,
        anchorId: ``,
        question: `가격과 재고가 변경되지 않습니다.`,
        _description: `
'승인완료'된 상품의 가격 및 재고는 [상품 수정 API]를 사용하시면 반영되지 않습니다.
<br/>
<br/>아래와 같이 필요한 항목에 맞는 API를 사용하여 수정부탁드립니다.
<br/>1) originalPrice (할인율기준가) : [상품 아이템별 할인율 기준가격 변경 API] 
<br/>2) salePrice (판매가격) : [상품 아이템별 가격 변경 API] 
<br/>3) maximumBuyCount (판매가능수량-재고) :  [상품 아이템별 수량 변경 API]`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `3`,
        anchorId: ``,
        question: `ID가 각각 무엇을 의미하는 것인지 모르겠습니다.`,
        _description: `1. sellerProductId (등록상품 ID) : 상품 생성 완료 시, 출력되는 ID. 변경되지 않는 ID 이며, 상품을 묶어서 관리하는데 사용 
<br/>2. productId (노출상품 ID) : 쿠팡의 상품 단위. 하위에 아이템과 벤더아이템이 존재. 머지와 분리 등으로 언제든 변경될 수 있는 ID 
<br/>3. vendorItemId (옵션 ID) : 쿠팡의 가장 작은 상품 단위. 변경되지 않고 가장 작은 단위이기 때문에 key로 많이 활용 
<br/>4. sellerProductItemId : 상품 생성 완료 후, 상품 조회 API를 통해 얻을 수 있는 ID. 상품의 옵션 값 수정 시 필요
<br/>5. externalVendorSku (판매자상품코드) : 상품 생성 시, 업체가 임의로 넣어 관리용으로 활용할 수 있는 코드. 입력 된 값은 발주서 조회 시 포함됨`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `4`,
        anchorId: ``,
        question: `상품 등록 개수에 제한이 있나요?`,
        _description: `"일 10만건씩 등록가능합니다. 
<br/>일 10만건 이상 등록 허용이 필요할 경우, 문의글을 남겨주시기 바랍니다.
<br/>
<br/>쿠팡의 카탈로그 기준에 부합하지 않는 상품을 대량으로 등록하실 경우, 일 등록 상품 수가 제한 될 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },
      {
        subcategory: ``,
        id: `5`,
        anchorId: ``,
        question: `카테고리의 필수 속성이 존재하지 않습니다. 라는 오류가 뜹니다.`,
        _description: `[메타정보 조회 API] 또는 [카테고리 엑셀 파일]을 통해서 해당카테고리에 맞는 '구매옵션'을 확인하여 json내에 추가해주셔야합니다.
<br/>필수(MANDATORY)인 구매옵션이 없을 경우, 해당 에러가 출력됩니다.
<br/>*참고 - 메타정보 조회를 통한 구매옵션과 검색옵션 구분 
 <br/>
 <br/>       "attributes":       [
 <br/>          {
<br/>            "attributeTypeName": "색상",
<br/>            "dataType": "STRING",
 <br/>           "basicUnit": "없음",
 <br/>           "usableUnits": [],
 <br/>           "required": "MANDATORY", //필수
 <br/>           "groupNumber": "NONE",
 <br/>           "exposed": "EXPOSED" //구매옵션
  <br/>       },
 <br/>       {
 <br/>           "attributeTypeName": "주얼리 사이즈",
<br/>            "dataType": "STRING",
<br/>            "basicUnit": "없음",
 <br/>           "usableUnits": [],
 <br/>           "required": "MANDATORY", //필수
 <br/>           "groupNumber": "NONE",
 <br/>           "exposed": "EXPOSED" //구매옵션
<br/>         },
 <br/>       {
 <br/>           "attributeTypeName": "쥬얼리 소재",
 <br/>           "dataType": "STRING",
<br/>            "basicUnit": "없음",
<br/>            "usableUnits": [],
 <br/>           "required": "OPTIONAL", //비필수
 <br/>           "groupNumber": "NONE",
 <br/>           "exposed": "NONE" //검색옵션
 <br/>        },`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },      
      {
        subcategory: ``,
        id: `6`,
        anchorId: ``,
        question: `상품필수 정보 확인:[입력된 카테고리[상세정보]의 상품필수 고지정보를 찾을 수 없습니다.] 라는 오류가 뜹니다.`,
        _description: `해당 오류는 상품 고시정보를 정확하게 입력하지 않은 경우 발생합니다. 
 <br/>JSON 전문 내용 중, notices 파라미터 값을 정확하게 입력해야 합니다.
 <br/>
 <br/>우선, 카테고리 메타정보 조회 API를 통해 "displayCategoryCode"에 원하는 카테고리 코드를 넣어 정보를 조회하시고,
 <br/>조회되는 "noticeCategories"에서 가장 알맞는 "noticeCategoryName" 1개를 선택하여주시고, 
 <br/>해당 "noticeCategoryName"에 포함 된 "noticeCategoryDetailName"을 모두 json 전문에 입력하여주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `7`,
        anchorId: ``,
        question: `입력된 상품필수 고지정보 갯수[14]가 카테고리[기타 재화]에서 제공하는 갯수[5]와 다릅니다. 라는 알럿이 뜹니다.`,
        _description: `고시정보 개수가 메타정보와 다르다는 뜻입니다. 
 <br/>일반적으로 2가지 또는 3가지의 고시정보 중 선택하실 수 있으며 택1 하셔서, 구성해주시면 됩니다. 
 <br/>
 <br/>아래의 예시 카테고리에서는 '기타재화'와 '의류' 2가지의 noticeCategoryName(고시정보)가 존재하며,
 <br/>2가지 배열 중 택1 하셔서 구성해주시면 됩니다. 

<br/>'기타재화'를 선택하실 경우 5개의 고시정보 항목을 상품 생성 시 입력하여주시고,
<br/>'의류'를 선택하실 경우 9개의 고시정보 항목을 상품 생성 시 입력해주시면 됩니다. 
<br/>
<br/>     "noticeCategories":       [
<br/>                 {
<br/>            "noticeCategoryName": "기타 재화",
<br/>          "noticeCategoryDetailNames":             [
<br/>                            {
<br/>                "noticeCategoryDetailName": "품명 및 모델명",
 <br/>                  "required": "MANDATORY"
 <br/>               },
 <br/>                              {
 <br/>                  "noticeCategoryDetailName": "인증사항",
<br/>                 "required": "MANDATORY"
 <br/>               },
 <br/>                              {
 <br/>                  "noticeCategoryDetailName": "제조국(원산지)",
 <br/>                  "required": "MANDATORY"
 <br/>               },
 <br/>                              {
<br/>                 "noticeCategoryDetailName": "제조자(수입자)",
<br/>                 "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "소비자상담 관련 전화번호",
<br/>                  "required": "MANDATORY"
<br/>               }
<br/>            ]
<br/>         },
<br/>                  {
<br/>            "noticeCategoryName": "의류",
<br/>            "noticeCategoryDetailNames":             [
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제품 소재",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "색상",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "치수",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제조자(수입자)",
<br/>                  "required": "MANDATORY"
<br/>              },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제조국",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "제조연월",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "품질보증기준",
<br/>                  "required": "MANDATORY"
<br/>               },
<br/>                              {
<br/>                  "noticeCategoryDetailName": "A/S 책임자와 전화번호",
<br/>                 "required": "MANDATORY"
<br/>               }
<br/>            ]
<br/>         }
<br/>      ],`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `8`,
        anchorId: ``,
        question: `해외구매대행 서택 시, "필수 구비서류를 모두 등록 해 주세요"라는 오류가 뜹니다. Or 구매대행 상품은 어떻게 등록하나요?`,
        _description: `구매대행 상품을 등록하기 위해서는 3가지를 확인해주셔야합니다.
<br/>
<br/>1. 해외상품 배송 "유"체크가 되어있는지 확인
<br/>    WING 로그인 > 오른쪽 상단 업체명 클릭 > 업체정보 변경 클릭 > 판매정보 탭 클릭 > 하단 "해외상품 배송" 필드 '유' 확인  
<br/>
<br/>2. json 내에 필수 구비서류 등록
<br/>    구매대행 상품의 경우, 구비서류를 등록해주셔야 합니다.
<br/>    보내주신 json하단에 아래와 같이 넣어주시고, vendorDocumentPath를 해당하는 구비서류 URL로 수정해주시면 됩니다. 
<br/>
<br/>     "requiredDocuments": [   {
<br/>       "templateName": "인보이스영수증(해외구매대행 선택시)",
<br/>       "vendorDocumentPath": "http://image11.coupangcdn.com/image/product/content/vendorItem/2018/07/02/41579010/eebc0c30-8f35-4a51-8ffd-808953414dc1.jpg"
<br/>
<br/>3. 배송방법을 구매대행으로 설정 
<br/>    상품연동 시, 배송방법을 아래와 같이 설정해주세요.    
<br/>    "deliveryMethod": "AGENT_BUY",`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `9`,
        anchorId: ``,
        question: `제가 등록한 상품과 사이트에 실제 보이는 상품이 다릅니다.`,
        _description: `다른 정보가 노출되는 경우는 타 상품과 잘못 결합되어 분리가 필요한 상태입니다.
<br/>온라인 문의에서 '상품결합 및 분리요청'을 진행해주시기 바랍니다.
<br/>오노출되고 있는 상품의 노출상품 ID 와 옵션 ID를 첨부하여 요청주시면 됩니다.
<br/>
<br/>● WING > 판매자지원 > 온라인문의 > 상품관리 > '상품결합 및 분리요청' > 온라인문의하기 (click)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `10`,
        anchorId: ``,
        question: `결제완료 단계에서 취소된 상품 리스트를 확인할 수 있나요?`,
        _description: `
결제완료단계에서 취소된 상품의 리스트는 별도로 제공되지않습니다.
<br/>다만 결제단계에서 상품준비중으로 처리 시, 해당 주문건은 정상처리되지 않습니다. 
<br/>상품준비중처리가 불가능한 상품은 결제완료단계에서 취소 된 상품입니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `11`,
        anchorId: ``,
        question: `API 연동 개발 및 연동을 완료하였는데, 실제 승인완료된 상품들이 쿠팡 페이지에 정상적으로 노출되는지 테스트가 필요합니다.`,
        _description: `테스트를 원하는 상품의 '등록상품ID (sellerProductID)'를 접수해주시면, 고객에게 상품이 보여지지 않도록 비노출 처리를 진행 후 회신드립니다. 
<br/>단, 해당 테스트는 소량으로 접수 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `12`,
        anchorId: ``,
        question: `묶음배송 설정은 어떻게 할 수 있나요?`,
        _description: `
상품 등록 시  "unionDeliveryType": "UNION_DELIVERY" 로 등록한 제품만이 쿠팡 사이트에서 묶음 배송을 선택할 수 있습니다.
<br/>
<br/>● 묶음 배송 조건 
<br/>
<br/>1) 출고지 정보가 같은 상품만 묶음 배송 가능 : outboundShippingPlaceCode (출고지 주소 코드) 필수 입력
<br/>2) 착불 설정 시, 묶음 배송 불가 : 선불 또는 무료배송으로 설정 필요
<br/>    "returnChargeVendor"=N"`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },      
      {
        subcategory: ``,
        id: `13`,
        anchorId: ``,
        question: `"배송비 종류가 유료 배송이면 조건부무료가 0원 입니다." 메시지가 반환되는데 어떻게 해야하나요?`,
        _description: `유료배송을 선택 한 후, 조건부 무료 금액을 입력하였을 때 전달되는 메시지입니다.
<br/>freeShipOverAmount를 0으로 설정하여 주시기 바랍니다.
<br/>
<br/>배송비 종류는 3가지입니다.
<br/>3가지 모두 편도이며, 배송비 조건에 맞는 배송비를 설정해주셔야 합니다.  
<br/>- 초도반품배송비 (deliveryChargeOnReturn) : 무료배송 시, 판매자가 지불한 금액에 대해 고객에게 청구하는 배송비 
<br/>- 반품배송비 (returnCharge) : 반품받을 때 지불하는 편도 비용
<br/>- 기본배송비 (deliveryCharge) : 조건부 무료배송 시, 고객이 물건을 전달 받기 위해 지불해야하는 비용 
<br/>
<br/>따라서 배송비 종류에 따라 2가지의 배송비를 설정해주셔야 합니다. 
<br/>● 무료배송 설정 시
<br/>초도반품배송비와, 반품배송비 금액 설정 
<br/>*기본배송비와 조건부 무료 금액을 0원으로 설정해야합니다. 
<br/>*반품 시, 고객에게 청구되는 배송비는 "초도반품배송비 + 반품배송비"입니다. 
<br/>
<br/>● 유료배송 설정 시
<br/>기본배송비와 반품배송비 금액 설정 
<br/>*초도반품배송비와 조건부 무료 금액을 0원으로 설정해야합니다. 
<br/>*반품 시, 고객에게 청구되는 배송비는 "기본배송비 + 반품배송비"입니다. 
<br/>
<br/><유료배송 예제>
<br/>deliveryChargeType: "NOT_FREE",
<br/>deliveryCharge: 2500,
<br/>freeShipOverAmount: 0,
<br/>deliveryChargeOnReturn:0,
<br/>returnCharge:2500
<br/>
<br/>● 조건부 무료배송 설정 시 
<br/>기본배송비와 반품배송비 금액 설정 
<br/>*초도반품배송비는 0원으로 설정해야합니다. 
<br/>*반품 시, 고객에게 청구되는 배송비는 "기본배송비 + 반품배송비"입니다. 
 <br/>
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
        id: `15`,
        anchorId: ``,
        question: `"[택배사 코드]를 확인해 주세요." 라는 에러가 노출됩니다.`,
        _description: `
도서산간 배송을 설정하셨나요? ( remoteAreaDeliverable = "Y" ) 
<br/>도서산간 배송은 출고지에 등록된 택배사만 입력 가능합니다.  
<br/>(도서산간 배송 설정하지 않을 경우 어떤 택배사를 선택해도 무관합니다) 
<br/>
<br/>출고지 조회를 통해, 출고지에 등록 된 택배사를 적용 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `16`,
        anchorId: ``,
        question: `셀러가 제공하는 Unique key(상품 관리 코드)를 쿠팡에 등록하여 상품 관리를 하는 방법은 없나요?`,
        _description: `상품 생성 시, externalVendorSku (판매자상품코드)를 넣어주시면, 발주서 등에서 해당 코드를 확인하여 관리할 수 있습니다. 
<br/>
<br/>그 외의 값은 extraProperties(옵션추가정보)필드를 이용하시면 됩니다. 
<br/>실제 프론트에 노출되는 값은 아니며, 업체의 편의를 위해 만들어진 필드입니다. 자사의 별도 관리 코드 및 추가 저장이 필요한 값을 넣어주시면 됩니다.
<br/>
<br/>자세한 사항은 상품 [생성 API]에 있는 파라미터 설명을 확인부탁드립니다. 
<br/>https://developers.coupang.com/docs/season-2/product-api#create_seller_product`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `14`,
        anchorId: ``,
        question: `"배송비 종류가 무료 배송이면 기본배송비, 조건부무료가 0원입니다."라는 메시지가 반환되는데 어떻게 해야하나요?`,
        _description: `무료배송을 선택 한 후, 기본배송비와 조건부 무료금액을 입력하였을 때 전달되는 메시지입니다.
<br/>deliveryCharge와 freeShipOverAmount를 0으로 설정하여 주시기 바랍니다.
<br/>
<br/>배송비 종류는 3가지입니다.
<br/>3가지 모두 편도이며, 배송비 조건에 맞는 배송비를 설정해주셔야 합니다.  
<br/>- 초도반품배송비 (deliveryChargeOnReturn) : 무료배송 시, 판매자가 지불한 금액에 대해 고객에게 청구하는 배송비 
<br/>- 반품배송비 (returnCharge) : 반품받을 때 지불하는 편도 비용
<br/>- 기본배송비 (deliveryCharge) : 조건부 무료배송 시, 고객이 물건을 전달 받기 위해 지불해야하는 비용 
<br/>
<br/>따라서 배송비 종류에 따라 2가지의 배송비를 설정해주셔야 합니다. 
<br/>● 무료배송 설정 시
<br/>초도반품배송비와, 반품배송비 금액 설정 
<br/>*기본배송비와 조건부 무료 금액을 0원으로 설정해야합니다. 
<br/>*반품 시, 고객에게 청구되는 배송비는 "초도반품배송비 + 반품배송비"입니다. 
<br/>
<br/>● 유료배송 설정 시
<br/>기본배송비와 반품배송비 금액 설정 
<br/>*초도반품배송비와 조건부 무료 금액을 0원으로 설정해야합니다. 
<br/>*반품 시, 고객에게 청구되는 배송비는 "기본배송비 + 반품배송비"입니다. 
<br/>
<br/><유료배송 예제>
<br/>deliveryChargeType: "NOT_FREE",
<br/>deliveryCharge: 2500,
<br/>freeShipOverAmount: 0,
<br/>deliveryChargeOnReturn:0,
<br/>returnCharge:2500
<br/>
<br/>● 조건부 무료배송 설정 시 
<br/>기본배송비와 반품배송비 금액 설정 
<br/>*초도반품배송비는 0원으로 설정해야합니다. 
<br/>*반품 시, 고객에게 청구되는 배송비는 "기본배송비 + 반품배송비"입니다. 
<br/>
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
        id: `17`,
        anchorId: ``,
        question: `승인 반려 된 상품 리스트를 API로 전달 받을 수 있나요?`,
        _description: `
상품 목록 페이징 조회 API를 사용하여, 조회하실 수 있습니다. 
<br/>
<br/>https://developers.coupang.com/docs/season-2/product-api#lookup_exposure_product_list_paging`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `18`,
        anchorId: ``,
        question: `19세 이상 구입 가능 상품도 API를 연동할 수 있나요?`,
        _description: `
가능합니다. 
<br/>상품 생성 시,  "adultOnly": "ADULT_ONLY" 파라미터를 넣어주시면 19세 이상만 구입가능한 상품으로 등록됩니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `19`,
        anchorId: ``,
        question: `
옵션없이 단일상품으로 등록할 수 있나요?`,
        _description: `등록할 수 있습니다.
<br/>카테고리 메타 정보 조회 API를 사용하여 isAllowSingleItem (단일상품 등록 가능 여부)를 확인해주시기 바랍니다.
<br/>단일상품 등록 가능 여부가 true인 경우, 옵션 없이 상품 등록이 가능합니다. 
<br/>
<br/>"isAllowSingleItem": true, 
<br/>
<br/>상품 생성 시 attributes 항목을 입력하지 않고 등록하실 수 있습니다. 
<br/>단, false인 경우에는 옵션(attributes)을 입력해야 등록이 가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `20`,
        anchorId: ``,
        question: `상품 생성 시, Item 하위 항목의 비필수/필수 항목을 구분하고 싶습니다.`,
        _description: `
Items 배열의 경우, 아래 파라미터만 제외하고 모두 필수입니다. 
<br/>
 <br/>* Items 배열 하위, 비 필수 파라미터 리스트
 <br/>1) externalVendorSku - 판매자상품코드 (업체상품코드)
 <br/>2) barcode - 바코드
 <br/>3) emptyBarcode - 바코드 없음
 <br/>4) emptyBarcodeReason - 바코드 없음 사유
 <br/>5) modelNo - 모델번호
 <br/>6) extraProperties - 업체상품옵션추가정보
 <br/>7) certifications - 상품인증정보
<br/> 8) searchTags - 검색어`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },      
      {
        subcategory: ``,
        id: `21`,
        anchorId: ``,
        question: `상품등록 API를 호출하였는데 "입력값에 오류가 있습니다." 라는 오류가 발생합니다.`,
        _description: `해당 오류는 일반적으로 문제가 있는 Line이 함께 노출됩니다. 
<br/>전송하신 JSON 전문 중, 해당하는 Line의 내용을 알맞게 수정해주세요.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `22`,
        anchorId: ``,
        question: `"입력값에 오류가 있습니다. line: 1" 라는 에러가 발생하는데 문제 원인을 못찾겠습니다.`,
        _description: `입력하신 정보가 한 줄로 되어 있어서 정확한 오류 위치를 잡지 못하여 line:1 이라는 메시지가 발생합니다. 
<br/>
<br/>JSON Viewer 등으로 사용하신 JSON을 알맞은 포멧으로 변경한뒤 통신 시도 부탁드립니다. 
<br/>** 추천 JSON Viewer : http://jsonviewer.stack.hu/`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `23`,
        anchorId: ``,
        question: `contentDetails >> content 파라미터 쪽에서 입력값에 오류가 있다고 계속 나옵니다.`,
        _description: `해당 파라미터에서 발생하는 오류는 '강제 줄바꿈' 대체로 때문에 발생합니다. 
<br/>강제 줄구분된 내용을 한줄로 붙여주세요.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `24`,
        anchorId: ``,
        question: `<iframe> 을 사용할 수 있나요?`,
        _description: `유튜브, 일반이미지를 제외한 iframe은 사용이 불가능합니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `25`,
        anchorId: ``,
        question: `"업체상품[****]이 승인요청 가능한 상태가 아닙니다." 라는 오류메시지가 노출됩니다.`,
        _description: `
상품 승인 요청은 '임시저장' 상태에서만 가능합니다. 
<br/>상품의 상태(status)를 확인해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `26`,
        anchorId: ``,
        question: `아이템(벤더아이템)을 삭제하고 싶습니다.`,
        _description: ``,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `27`,
        anchorId: ``,
        question: `상품 승인을 하려는데, sellerProductId는 어떻게 확인하나요?`,
        _description: `상품 생성 시, Response 메시지로 해당 값이 출력됩니다. 
<br/>(또는, WING에서 등록상품ID로 확인 가능합니다.)`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `28`,
        anchorId: ``,
        question: `
아이템(벤더아이템)을 추가하고 싶습니다.`,
        _description: `
items 배열에서 해당하는 옵션의 하위 항목을 모두 추가 해주세요.
<br/>추가한 옵션에는 sellerProductItemId를 입력하지 않습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },      
      {
        subcategory: ``,
        id: `29`,
        anchorId: ``,
        question: `등록한 옵션 순서대로 사이트에 노출할 수 있나요?`,
        _description: `아니요. 프론트 노출은 쿠팡 내부 로직에 의해 보여지고 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `30`,
        anchorId: ``,
        question: `"vendorItem로 생성된 아이템은 삭제가 불가능합니다." 위와 같은 에러가 발생합니다.`,
        _description: `
승인이 완료된 상품의 옵션을 삭제 시도하여 발생한 오류입니다. 
<br/>이미 승인 완료된 상품에 대해서는 옵션 삭제가 불가능하오니 해당하는 옵션을 '판매중지' 처리하여 운영해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `31`,
        anchorId: ``,
        question: `"업체상품[********]이 없거나 삭제가 불가능한 상태입니다. 삭제는 '저장중', '임시저장' 상태에서만 가능합니다." 라는 메시지가 노출됩니다.`,
        _description: `
상품에 포함된 옵션(아이템)이 모두 '판매중지'된 경우에만 삭제가 가능합니다. 
<br/>옵션을 판매중지한 후, 삭제처리 재시도를 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `32`,
        anchorId: ``,
        question: `상품 조회를 하려고 합니다. sellerProductId는 어디서 확인할 수 있을까요?`,
        _description: `sellerProductId는 상품 생성시 Response 값으로 받을 수 있으며, 상품 목록 페이징 / 구간 조회 API를 통해서도 확인할 수 있습니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `33`,
        anchorId: ``,
        question: `"검색 허용 범위를 초과했습니다. 최대 허용 범위는 10분입니다." 라는 오류메시지가 노출됩니다.`,
        _description: `상품목록 구간조회 API는 설정한 10분 이내의 상품만 조회 가능하니 조회 구간을 재설정 해주세요.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `34`,
        anchorId: ``,
        question: `Object text must begin with '{' at character 0 라는 오류가 발생합니다.`,
        _description: `
vendorItemId를 확인부탁드립니다. 
<br/>vendorItemId는 상품 승인완료시 생성되는 옵션ID입니다. 해당 값을 확인하여 입력 부탁드립니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `35`,
        anchorId: ``,
        question: `판매가 변경이 불가능합니다. 변경전 판매가의 최대 50% 인하/최대 100%인상까지 변경가능합니다." 라는 에러가 발생합니다`,
        _description: `
<br/>쿠팡에서는 실수로 인한 가격 오기재를 방지하기 위해 기존 가격대비 큰 폭의 가격 수정을 방지하고 있습니다. 
<br/>만약, 큰 범위로 한번에 가격 조정이 필요하시다면,, 해당 API에서 forceSalePriceUpdate 값을 True로 설정해주시기 바랍니다.`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },  
      {
        subcategory: ``,
        id: `36`,
        anchorId: ``,
        question: `쿠런티 적용이 되지 않습니다.`,
        _description: `
쿠런티는 허가 셀러에게 특정 카테고리 대상, 새상품 기준으로 
<br/>무료 배송/9800원 이상 무료 배송의 경우에만 설정 가능합니다. 
<br/>(9800원 무료 배송의 배송비도 2500원을 초과할 수 없음) 
<br/>보다 자세한 사항은 아래 URL을 참고해주세요. 
<br/>
<br/>https://coupa.ng/bfUa9v`,
        _referenceInfo: ``,
        _relationInfo: ``,
        _warning: ``,
      },      
    ]
  },
];
