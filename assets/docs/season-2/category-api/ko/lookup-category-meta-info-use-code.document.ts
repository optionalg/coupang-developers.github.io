export const lookupCategoryMetaInfoUseCodeDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-category-meta-info-use-code`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_category_meta_info_use_code`,
    name: `카테고리 메타 정보 조회 [Code]`,       // use display name, i will change 'translation key'
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
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/category-related-metas/display-category-codes/{displayCategoryCode}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/meta/category-related-metas/display-category-codes/{displayCategoryCode}`,
    _description: `노출 카테고리코드로 해당 카테고리에 속한 구매옵션(필수정보), 검색옵션, 고시정보, 구비서류, 인증정보 목록을 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `상품생성 시 사전에 displayCategoryCode 로 조회 후 해당 카테고리의 정보 대로 전문을 구성해야 한다.`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `displayCategoryCode`,
        require: true,
        _description: `노출카테고리코드`,
        _relation: ``,
        _referenceInfo: `URL에 포함됨`,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: `SUCCESS/ERROR`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `결과 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: ``,
      _description: `카테고리 메타정보`,
      _relation: ``,
      _referenceInfo: `조회된 업체상품 개수만큼 N번 반복`,
      _warning: ``,
      children: [
         {
              name: `isAllowSingleItem`,
              type: ``,
              require: false,
              _description: `단일상품 등록 가능 여부`,
              _relation: ``,
              _referenceInfo: `
              <table class="table">
              <tr>
                <th>Response Value</th>
                <th>Mean</th>
              </tr>
              <tr>
                <td>true</td>
                <td>단일상품 등록 가능 카테고리</td>
              </tr>
              <tr>
                <td>false</td>
                <td>단일상품 등록 불가능 카테고리</td>
              </tr>
              </table>
                `,
              _warning: ``,
              children: false
          },
         {
          name: `attributes`,
          type: ``,
          require: false,
          _description: `카테고리옵션목록`,
          _relation: ``,
          _referenceInfo: `
             <table class="table">
              <tr>
                <td>isAllowSingleItem이 true인 카테고리</td>
                <td>속성의 입력이 없이 단일 상품(1개의 아이템) 등록이 가능</td>
              </tr>
              <tr>
                <td>isAllowSingleItem이 False인 카테고리</td>
                <td>속성의 입력 없이는 상품 등록이 불가</td>
              </tr>
              </table>
옵션 개수 만큼 반복
`,
          _warning: `
상품 판매 승인 이전에는 attributes의 추가, 변경, 삭제가 가능<br/>
상품 판매 승인 이후에는 attributes의 추가가 가능하나 attributes의 삭제, 변경 등은 불가
`,
          children: [
            {
              name: `attributeTypeName`,
              type: ``,
              require: false,
              _description: `옵션타입명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `required`,
              type: ``,
              require: false,
              _description: `필수여부`,
              _relation: ``,
              _referenceInfo: `
              <table class="table">
              <tr>
                <th>Response Value</th>
                <th>Mean</th>
              </tr>
              <tr>
                <td>MANDATORY</td>
                <td>필수</td>
              </tr>
              <tr>
                <td>OPTIONAL</td>
                <td>선택</td>
              </tr>
              </table>
                `,
              _warning: ``,
              children: false
            },
            {
              name: `dataType`,
              type: ``,
              require: false,
              _description: `데이터형식`,
              _relation: ``,
              _referenceInfo: `
              <table class="table">
              <tr>
                <th>Response Value</th>
                <th>Mean</th>
              </tr>
              <tr>
                <td>STRING</td>
                <td>문자열</td>
              </tr>
              <tr>
                <td>NUMBER</td>
                <td>숫자</td>
              </tr>
              <tr>
                <td>DATE</td>
                <td>날짜</td>
              </tr>
              </table>
`,
              _warning: ``,
              children: false
            },
            {
              name: `basicUnit`,
              type: ``,
              require: false,
              _description: `기본단위`,
              _relation: ``,
              _referenceInfo: `
예)<br/>
길이(cm) : cm,mm,m,km<br/>
길이(인치) : in,ft, yd<br/>
무게(g) : mg, g, kg, t, oz, lb<br/>
부피(ml) : cc, ml, L<br/>
데이터 용량(GB) : KB, MB, GB, TB<br/>
수량(개) : 개, 개입, 매, 매입, 팩, 입, 장, 병, 인용, 인분, box, Ea, 포, 캔, 박스, 스틱, 권, set, 세트, 캡슐, 통, 정, 봉, 마리
`,
              _warning: ``,
              children: false
            },
            {
              name: `usableUnits`,
              type: ``,
              require: false,
              _description: `사용가능한단위값목록`,
              _relation: ``,
              _referenceInfo: `
예)<br/>
길이(cm) : cm,mm,m,km<br/>
길이(인치) : in,ft, yd<br/>
무게(g) : mg, g, kg, t, oz, lb<br/>
부피(ml) : cc, ml, L<br/>
데이터 용량(GB) : KB, MB, GB, TB<br/>
수량(개) : 개, 개입, 매, 매입, 팩, 입, 장, 병, 인용, 인분, box, Ea, 포, 캔, 박스, 스틱, 권, set, 세트, 캡슐, 통, 정, 봉, 마리<br/>
`,
              _warning: ``,
              children: false
            },
            {
              name: `groupNumber`,
              type: ``,
              require: false,
              _description: `그룹속성값(속성 중 택1 형태의 속성여부)`,
              _relation: ``,
              _referenceInfo: `
NONE : 그룹속성 아님<br/>
1 or 2 : 그룹 속성임. 이 경우 속성정보에 동일한 groupNumber 값이 있는 속성이 있으며 두개 중 1개만 입력 해야 함.<br/>
`,
              _warning: ``,
              children: false
            },
            {
              name: `exposed`,
              type: ``,
              require: false,
              _description: `구매옵션/검색옵션 구분값`,
              _relation: ``,
              _referenceInfo: `
              <table class="table">
              <tr>
                <th>Response Value</th>
                <th>Mean</th>
              </tr>
              <tr>
                 <td>EXPOSED</td>
                 <td>구매옵션</td>
              </tr>
                <td>NONE</td>
                <td>검색옵션</td>
              </tr>
              </table>
`,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `noticeCategories`,
          type: ``,
          require: false,
          _description: `상품고시정보목록`,
          _relation: ``,
          _referenceInfo: `옵션 개수 만큼 반복`,
          _warning: ``,
          children: [
            {
              name: `noticeCategoryName`,
              type: ``,
              require: false,
              _description: `상품고시정보카테고리명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `noticeCategoryDetailNames`,
              type: ``,
              require: false,
              _description: `상품고시정보카테고리상세목록`,
              _relation: ``,
              _referenceInfo: `
                `,
              _warning: ``,
              children: [
                {
                  name: `noticeCategoryDetailName`,
                  type: ``,
                  require: false,
                  _description: `상품고시정보카테고리상세명`,
                  _relation: ``,
                  _referenceInfo: `
                `,
                  _warning: ``,
                  children: false
                },
                {
                  name: `required`,
                  type: ``,
                  require: false,
                  _description: `필수여부`,
                  _relation: ``,
                  _referenceInfo: `
                  <table class="table">
                  <tr>
                    <th>Response Value</th>
                    <th>Mean</th>
                  </tr>
                  <tr>
                    <td>MANDATORY</td>
                    <td>필수</td>
                  </tr>
                  <tr>
                    <td>OPTIONAL</td>
                    <td>선택</td>
                  </tr>
                  </table>
                `,
                  _warning: ``,
                  children: false
                }
              ]
            }
          ]
        },
        {
          name: `requiredDocumentNames`,
          type: ``,
          require: false,
          _description: `구비서류목록`,
          _relation: ``,
          _referenceInfo: `옵션 개수 만큼 반복`,
          _warning: ``,
          children: [
            {
              name: `templateName`,
              type: ``,
              require: false,
              _description: `구비서류명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `required`,
              type: ``,
              require: false,
              _description: `구비서류필수여부`,
              _relation: ``,
              _referenceInfo: `
                <table class="table">
                  <tr>
                    <th>Response Value</th>
                    <th>Mean</th>
                  </tr>
                  <tr>
                    <td>MANDATORY</td>
                    <td>필수</td>
                  </tr>
                  <tr>
                    <td>OPTIONAL</td>
                    <td>선택</td>
                  </tr>
                  </table>
                `,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `certifications`,
          type: ``,
          require: false,
          _description: `상품 인증 정보`,
          _relation: ``,
          _referenceInfo: `옵션 개수 만큼 반복`,
          _warning: ``,
          children: [
            {
              name: `certificationType`,
              type: ``,
              require: false,
              _description: `상품등록/수정 시 certificationType에 입력`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `name`,
              type: ``,
              require: false,
              _description: `인증 정보 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `dataType`,
              type: ``,
              require: false,
              _description: `인증 정보 이름`,
              _relation: ``,
              _referenceInfo: `
CODE (인증기관에서 발급받은 코드 입력)<br/>
NONE (코드 입력 불필요)<br/>
`,
              _warning: ``,
              children: false
            },
            {
              name: `required`,
              type: ``,
              require: false,
              _description: `필수여부`,
              _relation: ``,
              _referenceInfo: `
MANDATORY(필수)<br/>
RECOMMEND(추천)<br/>
OPTIONAL(선택)
`,
              _warning: ``,
              children: false
            }
          ]
        },
        {
            name: `allowedOfferConditions`,
            type: `List`,
            require: false,
            _description: `허용된 상품 상태`,
            _relation: ``,
            _referenceInfo: `
                표시된 값에 따라 리퍼, 중고 상품 등록이 가능한지 확인할 수 있습니다.
                <table class="table">
                <tr>
                  <th>Response Value</th>
                  <th>Mean</th>
                </tr>
                <tr>
                  <td>NEW</td>
                  <td>새 상품</td>
                </tr>
                <tr>
                  <td>REFURBISHED</td>
                  <td>리퍼</td>
                </tr>
                <tr>
                  <td>USED_BEST</td>
                  <td>중고(최상)</td>
                </tr>
                <tr>
                  <td>USED_GOOD</td>
                  <td>중고(상)</td>
                </tr>
                <tr>
                  <td>USED_NORMAL</td>
                  <td>중고(중)</td>
                </tr>
                </table>
                `,
            _warning: ``,
            children: false
         }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/targets/wing/seller_api/apis/api/v1/marketplace/meta/category-related-metas/display-category-codes/78877`,
    code: [
      {
        language: `http`,
        codeblock: false
      }
    ],
    response: {
      "code": "SUCCESS",
      "message": "",
      "data": {
        "isAllowSingleItem": true,
        "attributes": [
          {
            "attributeTypeName": "수량",
            "dataType": "NUMBER",
            "basicUnit": "개",
            "usableUnits": [
              "개",
              "개입",
              "매",
              "매입",
              "팩",
              "입",
              "장",
              "병",
              "인용",
              "인분",
              "box",
              "Ea",
              "포",
              "캔",
              "박스",
              "스틱",
              "권",
              "set",
              "세트",
              "조",
              "캡슐",
              "통",
              "정",
              "봉",
              "마리",
              "롤",
              "p",
              "구",
              "피스",
              "회",
              "회분",
              "단계",
              "번",
              "프렛",
              "음판",
              "건반",
              "쪽",
              "단",
              "칸",
              "종",
              "분류",
              "현",
              "선",
              "공",
              "자리",
              "폭",
              "rpm",
              "색",
              "대"
            ],
            "required": "OPTIONAL",
            "groupNumber": "NONE",
            "exposed": "EXPOSED"
          },
          {
            "attributeTypeName": "자동차거치용품 거치대고정",
            "dataType": "STRING",
            "basicUnit": "없음",
            "usableUnits": [
              
            ],
            "required": "OPTIONAL",
            "groupNumber": "NONE",
            "exposed": "NONE"
          },
          {
            "attributeTypeName": "헤드 회전 가능여부",
            "dataType": "STRING",
            "basicUnit": "없음",
            "usableUnits": [
              
            ],
            "required": "OPTIONAL",
            "groupNumber": "NONE",
            "exposed": "NONE"
          },
          {
            "attributeTypeName": "각도조절 가능여부",
            "dataType": "STRING",
            "basicUnit": "없음",
            "usableUnits": [
              
            ],
            "required": "OPTIONAL",
            "groupNumber": "NONE",
            "exposed": "NONE"
          }
        ],
        "noticeCategories": [
          {
            "noticeCategoryName": "자동차용품(자동차부품/기타 자동차용품)",
            "noticeCategoryDetailNames": [
              {
                "noticeCategoryDetailName": "품명 및 모델명",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "출시년월",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "KC 인증 필 유무",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "제조자(수입자)",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "제조국",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "크기",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "적용차종",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "품질보증기준",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "A/S 책임자와 전화번호",
                "required": "MANDATORY"
              }
            ]
          },
          {
            "noticeCategoryName": "기타 재화",
            "noticeCategoryDetailNames": [
              {
                "noticeCategoryDetailName": "품명 및 모델명",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "인증사항",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "제조국(원산지)",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "제조자(수입자)",
                "required": "MANDATORY"
              },
              {
                "noticeCategoryDetailName": "소비자상담 관련 전화번호",
                "required": "MANDATORY"
              }
            ]
          }
        ],
        "requiredDocumentNames": [
          {
            "templateName": "기타인증서류",
            "required": "OPTIONAL"
          },
          {
            "templateName": "수입신고필증(병행수입 선택시)",
            "required": "MANDATORY_PARALLEL_IMPORTED"
          },
          {
            "templateName": "인보이스영수증(해외구매대행 선택시)",
            "required": "MANDATORY_OVERSEAS_PURCHASED"
          }
        ],
        "certifications": [
          {
            "certificationType": "NOT_REQUIRED",
            "name": "인증대상아님",
            "dataType": "NONE",
            "required": "OPTIONAL"
          },
          {
            "certificationType": "PRESENTED_IN_DETAIL_PAGE",
            "name": "상세설명에 표시",
            "dataType": "NONE",
            "required": "OPTIONAL"
          },
          {
            "certificationType": "KC_KID_CERTIFICATION",
            "name": "KC인증 어린이제품 안전인증",
            "dataType": "CODE",
            "required": "RECOMMEND"
          },
          {
            "certificationType": "KC_KID_CONFIRM",
            "name": "KC인증 어린이제품 안전확인",
            "dataType": "CODE",
            "required": "OPTIONAL"
          },
          {
            "certificationType": "KC_KID_PROVIDER",
            "name": "KC인증 어린이제품 공급자적합성확인",
            "dataType": "NONE",
            "required": "OPTIONAL"
          },
          {
            "certificationType": "KC_ELECTRONICS_CERTIFICATION",
            "name": "KC인증 전기용품 안전인증",
            "dataType": "CODE",
            "required": "OPTIONAL"
          },
          {
            "certificationType": "KC_ELECTRONICS_CONFIRM",
            "name": "KC인증 전기용품 안전확인",
            "dataType": "CODE",
            "required": "OPTIONAL"
          },
          {
            "certificationType": "KC_ELECTRONICS_PROVIDER",
            "name": "KC인증 전기용품 공급자적합성확인",
            "dataType": "NONE",
            "required": "OPTIONAL"
          },
          {
            "certificationType": "KC_HOUSEHOLD_CERTIFICATION",
            "name": "KC인증 생활용품 안전인증",
            "dataType": "CODE",
            "required": "RECOMMEND"
          },
          {
            "certificationType": "KC_HOUSEHOLD_CONFIRM",
            "name": "KC인증 생활용품 자율안전확인",
            "dataType": "CODE",
            "required": "RECOMMEND"
          },
          {
            "certificationType": "KC_HOUSEHOLD_QUALITY",
            "name": "KC인증 생활용품 안전품질표시",
            "dataType": "NONE",
            "required": "RECOMMEND"
          },
          {
            "certificationType": "KC_HOUSEHOLD_PACKAGING",
            "name": "KC인증 생활용품 어린이보호포장",
            "dataType": "NONE",
            "required": "RECOMMEND"
          },
          {
            "certificationType": "COMMUNICATION_EQUIPMENT",
            "name": "방송통신기자재 적합성 평가 대상",
            "dataType": "CODE",
            "required": "RECOMMEND"
          }
        ],
        "allowedOfferConditions": [
          "NEW",
          "REFURBISHED",
          "USED_BEST",
          "USED_GOOD",
          "USED_NORMAL"
        ]
      }
},
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
