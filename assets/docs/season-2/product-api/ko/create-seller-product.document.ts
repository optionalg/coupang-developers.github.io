export const createSellerProductDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `create-seller-product`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_seller_product`,
    name: `상품 생성`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `업체상품 생성`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products`,
    _description: `업체상품을 생성한다. 상품은 한개 이상의 아이템으로 구성된다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `displayCategoryCode`,
        type: `Number`,
        require: true,
        _description: `노출카테고리코드`,
        _relation: ``,
        _referenceInfo: `노출카테고리(internal category)를 선택해서 추가할수 있다, 노출카테고리 조회 API를 통해 조회 가능`,
        _warning: ``,
        children: false
      },
      {
        name: `sellerProductName`,
        type: `String`,
        require: true,
        _description: `등록상품명`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: `쿠팡에서 업체를 관리하기 위해 발급한 코드.`,
        _warning: ``,
        children: false
      },
      {
        name: `saleStartedAt`,
        type: `String`,
        require: true,
        _description: `판매시작일시`,
        _relation: ``,
        _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식`,
        _warning: ``,
        children: false
      },
      {
        name: `saleEndedAt`,
        type: `String`,
        require: true,
        _description: `판매종료일시`,
        _relation: ``,
        _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식, *2099년 까지 길게 선택 가능`,
        _warning: ``,
        children: false
      },
      {
        name: `brand`,
        type: `String`,
        require: true,
        _description: `브랜드`,
        _relation: ``,
        _referenceInfo: `브랜드명은 한글/영어 표준이름 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `deliveryMethod`,
        type: `String`,
        require: true,
        _description: `배송방법`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>SEQUENCIAL</td>
          <td>순차배송</td>
        </tr>
        <tr>
          <td>VENDOR_DIRECT</td>
          <td>업체직송</td>
        </tr>
        <tr>
          <td>MAKE_ORDER</td>
          <td>주문제작</td>
        </tr>
        <tr>
          <td>INSTRUCTURE</td>
          <td>설치배송</td>
        </tr>
        <tr>
          <td>AGENT_BUY</td>
          <td>구매대행</td>
        </tr>
        <tr>
          <td>COLD_FRESH</td>
          <td>신선냉동</td>
        </tr>
         <tr>
          <td>MAKE_ORDER_DIRECT</td>
          <td>주문제작(업체직송)</td>
        </tr>
        </table>
        `,
        _warning: ``,
        children: false
      },
      {
        name: `deliveryCompanyCode`,
        type: `String`,
        require: true,
        _description: `택배사코드`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>HYUNDAI</td>
          <td>롯데택배</td>
        </tr>
        <tr>
          <td>KGB</td>
          <td>로젠택배</td>
        </tr>
        <tr>
          <td>EPOST</td>
          <td>우체국</td>
        </tr>
        <tr>
          <td>HANJIN</td>
          <td>한진택배</td>
        </tr>
        <tr>
          <td>KOREX</td>
          <td>대한통운</td>
        </tr>
        <tr>
          <td>CJGLS</td>
          <td>CJ대한통운</td>
        </tr>
        <tr>
          <td>KGBLS</td>
          <td>KGB택배</td>
        </tr>
        <tr>
          <td>KDEXP</td>
          <td>경동택배</td>
        </tr>
        <tr>
          <td>DONGBU</td>
          <td>KG로지스</td>
        </tr>
        <tr>
          <td>INNOGIS</td>
          <td>GTX로지스</td>
        </tr>
        <tr>
          <td>KDEXP</td>
          <td>경동택배</td>
        </tr>
        <tr>
          <td>ILYANG</td>
          <td>일양택배</td>
        </tr>
        <tr>
          <td>CHUNIL</td>
          <td>천일택배</td>
        </tr>
        <tr>
          <td>AJOU</td>
          <td>아주택배</td>
        </tr>
        <tr>
          <td>CSLOGIS</td>
          <td>SC로지스</td>
        </tr>
        <tr>
          <td>DAESIN</td>
          <td>대신택배</td>
        </tr>
        <tr>
          <td>CVS</td>
          <td>CVS택배</td>
        </tr>
        <tr>
          <td>HDEXP</td>
          <td>합동택배</td>
        </tr>
        <tr>
          <td>DADREAM</td>
          <td>다드림</td>
        </tr>
        <tr>
          <td>DHL</td>
          <td>DHL</td>
        </tr>
        <tr>
          <td>UPS</td>
          <td>UPS</td>
        </tr>
        <tr>
          <td>FEDEX</td>
          <td>FEDEX</td>
        </tr>
        <tr>
          <td>REGISTPOST</td>
          <td>우편등기</td>
        </tr>
        <tr>
          <td>DIRECT</td>
          <td>업체직송</td>
        </tr>
        <tr>
          <td>COUPANG</td>
          <td>쿠팡자체배송</td>
        </tr>
        <tr>
          <td>IQS</td>
          <td>굿스포스트</td>
        </tr>
        <tr>
          <td>EMS</td>
          <td>우체국 EMS</td>
        </tr>
        <tr>
          <td>TNT</td>
          <td>TNT</td>
        </tr>
        <tr>
          <td>USPS</td>
          <td>USPS</td>
        </tr>
        <tr>
          <td>IPARCEL</td>
          <td>i-parcel</td>
        </tr>
        <tr>
          <td>GSMNTON</td>
          <td>GSM NtoN</td>
        </tr>
        <tr>
          <td>SWGEXP</td>
          <td>성원글로벌</td>
        </tr>
        <tr>
          <td>PANTOS</td>
          <td>범한판토스</td>
        </tr>
        <tr>
          <td>ACIEXPRESS</td>
          <td>ACI Express</td>
        </tr>
        <tr>
          <td>DAEWOON</td>
          <td>대운글로벌</td>
        </tr>
        <tr>
          <td>AIRBOY</td>
          <td>에어보이익스프레스</td>
        </tr>
        <tr>
          <td>KGLNET</td>
          <td>KGL네트웍스</td>
        </tr>
        <tr>
          <td>KUNYOUNG</td>
          <td>건영택배</td>
        </tr>
        <tr>
          <td>SLX</td>
          <td>SLX택배</td>
        </tr>
        <tr>
          <td>HONAM</td>
          <td>호남택배</td>
        </tr>
        <tr>
          <td>LINEEXPRESS</td>
          <td>LineExpress</td>
        </tr>
        <tr>
          <td>SFEXPRESS</td>
          <td>순풍택배</td>
        </tr>
        <tr>
          <td>TWOFASTEXP</td>
          <td>2FastsExpress</td>
        </tr>
        </table>
        `,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `deliveryChargeType`,
        type: `String`,
        require: true,
        _description: `배송비종류`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <th>FREE</th>
          <th>무료배송</th>
        </tr>
        <tr>
          <th>FREE_DELIVERY_OVER_9800</th>
          <th>9800이상 무료배송 ※ 쿠팡 정책으로 예외 카테고리를 제외하면, 묶음 배송을 하려면 9800이상 무료배송 조건을 선택해야함</th>
        </tr>
        <tr>
          <th>NOT_FREE</th>
          <th>유료배송</th>
        </tr>
        <tr>
          <th>CHARGE_RECEIVED</th>
          <th>착불배송</th>
        </tr>
        </table>
        `,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `deliveryCharge`,
        type: `Number`,
        require: true,
        _description: `기본배송비`,
        _relation: ``,
        _referenceInfo: `금액 입력`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `freeShipOverAmount`,
        type: `Number`,
        require: true,
        _description: `조건부무료`,
        _relation: ``,
        _referenceInfo: `무료배송을 위한 조건 금액`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `deliveryChargeOnReturn`,
        type: `Number`,
        require: true,
        _description: `초도반품배송비`,
        _relation: ``,
        _referenceInfo: `무료배송인 경우 반품시 소비자가 지불하는 배송비`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `remoteAreaDeliverable`,
        type: `String`,
        require: true,
        _description: `도서산간 배송여부`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <th>Y</th>
          <th>도서산간 배송</th>
        </tr>
        <tr>
          <th>N</th>
          <th>도서산간 배송안함</th>
        </tr>
        </table>
        `,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `unionDeliveryType`,
        type: `String`,
        require: true,
        _description: `묶음 배송여부`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <th>UNION_DELIVERY</th>
          <th>묶음 배송 가능</th>
        </tr>
        <tr>
          <th>NOT_UNION_DELIVERY</th>
          <th>묶음 배송 불가능</th>
        </tr>
        </table>
        <br/>※ 묶음 배송 조건<br/>
묶음 배송 설정시, 출고지 정보 필수 입력 / 출고지 정보가 같은 상품만 묶음 배송 가능
묶음 배송 설정시, 배송비 종류에 따른 조건
무료배송 : 기본배송비 0원, 초도반품배송비 2,500원, 반품배송비 2,500원으로 자동 설정
9800이상 무료배송 / 조건부무료배송 / 유료배송 : 기본배송비 2,500원, 반품배송비 2,500원으로 자동 설정
착불배송 : 합배송 설정 불가
        `,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnCenterCode`,
        type: `String`,
        require: true,
        _description: `반품지센터코드`,
        _relation: ``,
        _referenceInfo: `쿠팡 Wing에서 배송지 등록 후 확인`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnChargeName`,
        type: `String`,
        require: true,
        _description: `반품지담당자명`,
        _relation: ``,
        _referenceInfo: `쿠팡 Wing에서 배송지 등록 후 확인`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `companyContactNumber`,
        type: `String`,
        require: true,
        _description: `반품지연락처`,
        _relation: ``,
        _referenceInfo: `쿠팡 Wing에서 배송지 등록 후 확인`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnZipCode`,
        type: `String`,
        require: true,
        _description: `반품지우편번호`,
        _relation: ``,
        _referenceInfo: `쿠팡 Wing에서 배송지 등록 후 확인`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnAddress`,
        type: `String`,
        require: true,
        _description: `반품지주소`,
        _relation: ``,
        _referenceInfo: `쿠팡 Wing에서 배송지 등록 후 확인`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnAddressDetail`,
        type: `String`,
        require: true,
        _description: `반품지주소상세`,
        _relation: ``,
        _referenceInfo: `쿠팡 Wing에서 배송지 등록 후 확인`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnCharge`,
        type: `Number`,
        require: true,
        _description: `반품배송비`,
        _relation: ``,
        _referenceInfo: `반품회수시 편도 배송비`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnChargeVendor`,
        type: `String`,
        require: true,
        _description: `착불여부`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <th>Y</th>
          <th>착불</th>
        </tr>
        <tr>
          <th>N</th>
          <th>선불</th>
        </tr>
        </table>
        `,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `afterServiceInformation`,
        type: `String`,
        require: true,
        _description: `A/S안내`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `afterServiceContactNumber`,
        type: `String`,
        require: true,
        _description: `반품지주소상세`,
        _relation: ``,
        _referenceInfo: `쿠팡 Wing에서 배송지 등록 후 확인`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `returnAddressDetail`,
        type: `String`,
        require: true,
        _description: `A/S전화번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `outboundShippingPlaceCode`,
        type: `Number`,
        require: true,
        _description: `출고지주소코드`,
        _relation: ``,
        _referenceInfo: `묶음 배송 선택할 경우 필수, 출고지 조회 API를 통해 조회 가능`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `vendorUserId`,
        type: `String`,
        require: true,
        _description: `실사용자아이디(쿠팡 WING 아이디)`,
        _relation: ``,
        _referenceInfo: `업체(Vendor)에 소속된 사용자아이디 (윙 ID)`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `requested`,
        type: `Boolean`,
        require: true,
        _description: `자동승인요청여부`,
        _relation: ``,
        _referenceInfo: `상품 저장후에 자동으로 승인요청을 진행여부 기본값 : false, true를 입력할 경우, 임시저장중 -> 임시저장 상태를 자동으로 승인 요청으로 바꿔 준다.`,
        _warning: ``,
        children: false
      }
      ,
      {
        name: `items`,
        type: `List`,
        require: true,
        _description: `업체상품옵션목록`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `itemName`,
            type: `String`,
            require: true,
            _description: `업체상품옵션명`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `originalPrice`,
            type: `Number`,
            require: true,
            _description: `할인율기준가`,
            _relation: ``,
            _referenceInfo: `할인율(%)표시를 위한 할인전 금액으로, 판매가격과 동일하게 입력시 '쿠팡가'로 노출. 승인완료 이후 할인율기준가 수정은 [옵션별 할인율기준가 변경] API를 통해 변경가능`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `salePrice`,
            type: `Number`,
            require: true,
            _description: `판매가격`,
            _relation: ``,
            _referenceInfo: `판매가격을 입력. '최초' 업체상품 등록시 판매가격은 상품 승인 요청 전에만 가능하며, 승인완료 이후 판매가격 수정은 [옵션별 가격 변경] API를 통해 변경가능`,
            _warning: ``,
            children: false
          }
          ,

          {
            name: `maximumBuyCount`,
            type: `Number`,
            require: true,
            _description: `판매가능수량`,
            _relation: ``,
            _referenceInfo: `판매가능한 재고수량을 입력. '최초' 업체상품 등록시 판매수량은 상품 승인 요청 전에만 가능하며, 승인완료 이후 재고 수정은 [옵션별 수량 변경] API를 통해 변경가능`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `maximumBuyForPerson`,
            type: `Number`,
            require: true,
            _description: `인당최대구매수량`,
            _relation: ``,
            _referenceInfo: `기간별 1인당 최대 구매 가능한 수량. 제한이 없을 경우 '0'을 입력`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `outboundShippingTimeDay`,
            type: `Number`,
            require: true,
            _description: `기준출고일(일)`,
            _relation: ``,
            _referenceInfo: `주문일(D-Day) 이후 배송을 위한 출고예정일자를 '일' 단위로 입력. (다음날(D+1) 출고일 경우 '1' 입력)`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `maximumBuyForPersonPeriod`,
            type: `Number`,
            require: true,
            _description: `최대구매수량기간(일)`,
            _relation: ``,
            _referenceInfo: `일별 1인당 최대 구매 가능한 수량. 제한이 없을 경우 '1'을 입력`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `unitCount`,
            type: `Number`,
            require: true,
            _description: `단위수량`,
            _relation: ``,
            _referenceInfo: `상품에 포함된 수량을 입력하면 (판매가격 ÷ 단위수량) 로 계산하여 (1개당 가격 #,000원) 으로 노출. 개당가격이 필요하지 않은 상품은 '0'을 입력`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `adultOnly`,
            type: `String`,
            require: true,
            _description: `19세이상`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
            <tr>
              <th>Parameter Name</th>
              <th>Status</th>
            </tr>
            <tr>
              <th>ADULT_ONLY</th>
              <th>19세이상 구입 가능 상품</th>
            </tr>
            <tr>
              <th>EVERYONE</th>
              <th>전연령 구입 가능 상품 (기본값)</th>
            </tr>
            </table>
            `,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `taxType`,
            type: `String`,
            require: true,
            _description: `과세여부`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
            <tr>
              <th>Parameter Name</th>
              <th>Status</th>
            </tr>
            <tr>
              <th>TAX</th>
              <th>과세 (기본값)</th>
            </tr>
            <tr>
              <th>FREE</th>
              <th>비과세</th>
            </tr>
            </table>
            `,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `parallelImported`,
            type: `String`,
            require: true,
            _description: `병행수입여부`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
            <tr>
              <th>Parameter Name</th>
              <th>Status</th>
            </tr>
            <tr>
              <th>PARALLEL_IMPORTED</th>
              <th>병행수입</th>
            </tr>
            <tr>
              <th>NOT_PARALLEL_IMPORTED</th>
              <th>병행수입 아님 (기본값)</th>
            </tr>
            </table>
            `,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `overseasPurchased`,
            type: `String`,
            require: true,
            _description: `해외구매대행여부`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
            <tr>
              <th>Parameter Name</th>
              <th>Status</th>
            </tr>
            <tr>
              <th>OVERSEAS_PURCHASED</th>
              <th>구매대행</th>
            </tr>
            <tr>
              <th>NOT_OVERSEAS_PURCHASED</th>
              <th>구매대행 아님 (기본값)</th>
            </tr>
            </table>
            `,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `externalVendorSku`,
            type: `String`,
            require: false,
            _description: `업체상품코드`,
            _relation: ``,
            _referenceInfo: `업체고유의 item 코드값을 임의로 세팅할 수 있으며, 입력값은 발주서 조회 API response 에 포함됨.`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `barcode`,
            type: `String`,
            require: false,
            _description: `바코드`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `emptyBarcode`,
            type: `Boolean`,
            require: false,
            _description: `바코드 없음`,
            _relation: ``,
            _referenceInfo: `바코드가 없으면 true`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `emptyBarcodeReason`,
            type: `String`,
            require: false,
            _description: `바코드 없음 사유`,
            _relation: ``,
            _referenceInfo: `바코드없음에 대한 사유 100자 제한`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `modelNo`,
            type: `String`,
            require: false,
            _description: `모델번호`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `extraProperties`,
            type: ``,
            require: false,
            _description: `업체상품옵션추가정보`,
            _relation: ``,
            _referenceInfo: `Key : Value 형태로 필요한 만큼 반복입력가능`,
            _warning: ``,
            children: [
              {
                name: `Key`,
                type: `String`,
                require: false,
                _description: `Value`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
              }
            ]
          }
          ,
          {
            name: `certifications`,
            type: `List`,
            require: false,
            _description: `상품인증정보`,
            _relation: ``,
            _referenceInfo: `상품 인증 정보`,
            _warning: ``,
            children: [
              {
                name: `certificationType`,
                type: `String`,
                require: false,
                _description: `인증정보Type`,
                _relation: ``,
                _referenceInfo: `카테고리 메타정보 조회 API를 통해 등록가능한 Type을 구할 수 있다.`,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `certificationCode`,
                type: `String`,
                require: false,
                _description: `상품인증정보코드`,
                _relation: ``,
                _referenceInfo: `인증기관에서 발급받은 코드`,
                _warning: ``,
                children: false
              }
            ]
          }
          ,
          {
            name: `searchTags`,
            type: `List`,
            require: false,
            _description: `검색어`,
            _relation: ``,
            _referenceInfo: `필요한 만큼 반복입력가능. ['검색어1','검색어2']`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `images`,
            type: `List`,
            require: true,
            _description: `이미지목록`,
            _relation: ``,
            _referenceInfo: `필요한 만큼 반복 입력 가능`,
            _warning: ``,
            children: [
              {
                name: `imageOrder`,
                type: `Number`,
                require: false,
                _description: `이미지표시순서`,
                _relation: ``,
                _referenceInfo: `0,1,2...`,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `imageType`,
                type: `String`,
                require: false,
                _description: `이미지타입`,
                _relation: ``,
                _referenceInfo: `REPRESENTATION : 대표이미지 (정사각형: 최소 500 x 500px ~ 최대 5000 x 5000px (3MB 이하)  *필수 )
REP_OBLONG_ORIGIN : 대표이미지 (직사각형: 최소 500 x 290px ~ 최대 5000 x 2900px(3MB 이하) *선택 )
DETAIL : 기타이미지 (정사각형: 최소 500 x 500px ~ 최대 5000 x 5000px (3MB 이하) *선택, 9개까지 등록 가능 )`,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `cdnPath`,
                type: `String`,
                require: false,
                _description: `쿠팡CDN경로`,
                _relation: ``,
                _referenceInfo: `쿠팡 CDN 에 올린 경우 직접 입력, vendorPath와 cdnPath 중 하나 이상 필수`,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `vendorPath`,
                type: `String`,
                require: false,
                _description: `업체이미지경로`,
                _relation: ``,
                _referenceInfo: `업체에서 사용하는 이미지 경로, http://로 시작하는 경로일 경우 자동 다운로드하여 쿠팡 CDN에 추가됨, vendorPath와 cdnPath 중 하나 이상 필수`,
                _warning: ``,
                children: false
              }
            ]
          }
          ,
          {
            name: `notices`,
            type: `List`,
            require: true,
            _description: `상품고시정보 목록`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: [
              {
                name: `noticeCategoryName`,
                type: `String`,
                require: true,
                _description: `상품고시정보카테고리명`,
                _relation: ``,
                _referenceInfo: `카테고리별 입력 가능한 상품고시정보 카테고리 중 하나를 입력`,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `noticeCategoryDetailName`,
                type: `String`,
                require: true,
                _description: `상품고시정보카테고리상세명`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `content`,
                type: `String`,
                require: true,
                _description: `내용`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
              }
            ]
          }
          ,
          {
            name: `attributes`,
            type: `List`,
            require: true,
            _description: `옵션목록(속성)`,
            _relation: ``,
            _referenceInfo: `카테고리 기준으로 정해진 옵션 목록을 입력하는 객체. 필요한 만큼 반복 입력 가능, 동일한 타입명, 타입값을 갖는 속성 객체는 한번만 입력할 수 있음, 한개 이상 등록 필수`,
            _warning: ``,
            children: [
              {
                name: `attributeTypeName`,
                type: `String`,
                require: true,
                _description: `옵션타입명`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `attributeValueName`,
                type: `String`,
                require: true,
                _description: `옵션값`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
              }
            ]
          }
          ,
          {
            name: `contents`,
            type: `List`,
            require: true,
            _description: `컨텐츠목록`,
            _relation: ``,
            _referenceInfo: `필요한 만큼 반복 입력 가능`,
            _warning: ``,
            children: [
              {
                name: `contentsType`,
                type: `String`,
                require: true,
                _description: `컨텐츠타입`,
                _relation: ``,
                _referenceInfo: `
                <table class="table">
                <tr>
                  <th>Parameter Name</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <th>IMAGE</th>
                  <th>이미지</th>
                </tr>
                <tr>
                  <th>IMAGE_NO_SPACE</th>
                  <th>이미지(공백없음)</th>
                </tr>
                <tr>
                  <th>TEXT</th>
                  <th>텍스트</th>
                </tr>
                <tr>
                  <th>IMAGE_TEXT</th>
                  <th>이미지-텍스트</th>
                </tr>
                <tr>
                  <th>TEXT_IMAGE</th>
                  <th>텍스트-이미지</th>
                </tr>
                <tr>
                  <th>IMAGE_IMAGE</th>
                  <th>이미지-이미지</th>
                </tr>
                <tr>
                  <th>TEXT_TEXT</th>
                  <th>텍스트-텍스트</th>
                </tr>
                <tr>
                  <th>TITLE</th>
                  <th>제목</th>
                </tr>
                </table>
                `,
                _warning: ``,
                children: false
              }
              ,
              {
                name: `contentDetails`,
                type: `List`,
                require: true,
                _description: `상세컨텐츠목록`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: [
                  {
                    name: `content`,
                    type: `String`,
                    require: true,
                    _description: `내용`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                  }
                  ,
                  {
                    name: `detailType`,
                    type: `String`,
                    require: true,
                    _description: `세부타입`,
                    _relation: ``,
                    _referenceInfo: `
                    <table class="table">
                    <tr>
                      <th>Parameter Name</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <th>IMAGE</th>
                      <th>이미지</th>
                    </tr>
                    <tr>
                      <th>TEXT</th>
                      <th>텍스트</th>
                    </tr>
                    </table>
                    `,
                    _warning: ``,
                    children: false
                  }
                ]
              }
            ]
          }
        ]
      }
      ,
      {
        name: `requiredDocuments`,
        type: `List`,
        require: false,
        _description: `구비 서류 필수인 경우 입력`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `templateName`,
            type: `String`,
            require: true,
            _description: `구비서류템플릿명`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `documentPath`,
            type: `String`,
            require: false,
            _description: `구비서류 쿠팡CDN경로`,
            _relation: ``,
            _referenceInfo: `documentPath 와 vendorDocumentPath 중 하나 필수`,
            _warning: ``,
            children: false
          }
          ,
          {
            name: `vendorDocumentPath`,
            type: `String`,
            require: false,
            _description: `구비서류벤더경로`,
            _relation: ``,
            _referenceInfo: `구비서류 경로, http://로 시작하는 경로일 경우 자동 다운로드하여 쿠팡 CDN에 추가됨. documentPath 와 vendorDocumentPath 중 하나 필수`,
            _warning: ``,
            children: false
          }
        ]
      }
      ,
      {
        name: `manufacture`,
        type: `String`,
        require: true,
        _description: `제조사`,
        _relation: ``,
        _referenceInfo: `제조사`,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `UNAUTHORIZATION`,
      _relation: ``,
      _referenceInfo: `Illegal authentication header.`,
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: `code`,
      type: `String`,
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: `SUCCES/ERROR`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `String`,
      _description: `업체상품아이디`,
      _relation: ``,
      _referenceInfo: `생성된 업체상품아이디`,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: {
          "displayCategoryCode": 3013,
          "sellerProductName": "테스트 상품 등록",
          "vendorId": "A00100542",
          "saleStartedAt": "2016-10-12T00:00:00",
          "saleEndedAt": "2099-01-01T23:59:59",
          "brand": "Stchodo",
          "deliveryMethod": "SEQUENCIAL",
          "deliveryCompanyCode": "HYUNDAI",
          "deliveryChargeType": "FREE_DELIVERY_OVER_9800",
          "deliveryCharge": "2500",
          "freeShipOverAmount": "9800",
          "deliveryChargeOnReturn": "0",
          "remoteAreaDeliverable": "N",
          "unionDeliveryType": "UNION_DELIVERY",
          "returnCenterCode": "1000005036",
          "returnChargeName": "대표이름4",
          "companyContactNumber": "02-1234-5678",
          "returnZipCode": "135-090",
          "returnAddress": "서울특별시 강남구 삼성동",
          "returnAddressDetail": "333",
          "returnCharge": 2500,
          "returnChargeVendor": "N",
          "afterServiceInformation": "A/S안내 1544-1255",
          "afterServiceContactNumber": "1544-1255",
          "outboundShippingPlaceCode": "43502",
          "vendorUserId": "3pmtest01",
          "requested": false,
          "items": [
            {
              "itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 44",
              "originalPrice": 13000,
              "salePrice": 10000,
              "maximumBuyCount": "9999",
              "maximumBuyForPerson": "0",
              "outboundShippingTimeDay": "2",
              "maximumBuyForPersonPeriod": "1",
              "unitCount": 1,
              "freePriceType": "NO_FREE_PRICE",
              "adultOnly": "EVERYONE",
              "taxType": "TAX",
              "parallelImported": "NOT_PARALLEL_IMPORTED",
              "overseasPurchased": "NOT_OVERSEAS_PURCHASED",
              "externalVendorSku": "90726",
              "barcode": "",
              "emptyBarcode": false,
              "emptyBarcodeReason": null,
              "modelNo": "",
              "extraProperties": {
                "coupangSalePrice": 5000,
                "onlineSalePriceForBooks": 10000,
                "transactionType": "manufacturer",
                "businessType": "Beauty"
              },
              "certifications": [],
              "searchTags": null,
              "images": [{
                "imageOrder": 0,
                "imageType": "REPRESENTATION",
                "cdnPath": "vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg",
                "vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"
              }],
              "notices": [{
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제품 소재",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "색상",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "치수",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제조자(수입자)",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제조국",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제조연월",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "품질보증기준",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "A/S 책임자와 전화번호",
                "content": "상세페이지 참조"
              }],
              "attributes": [{
                "attributeTypeName": "사이즈",
                "attributeValueName": "44"
              }],
              "contents": [{
                "contentsType": "TEXT",
                "contentDetails": [{
                  "content": "<html><div><\/div><div><img src='http:\/\/www.babomall.com\/bbsemarket\/gimage\/7005345_2014_04_09_10_02_25_111.jpg' \/><div><\/html>",
                  "detailType": "TEXT"
                }]
              }]
            },
            {
              "itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 55",
              "originalPrice": 13000,
              "salePrice": 10000,
              "maximumBuyCount": "9999",
              "maximumBuyForPerson": "0",
              "outboundShippingTimeDay": "2",
              "maximumBuyForPersonPeriod": "1",
              "unitCount": 1,
              "freePriceType": "NO_FREE_PRICE",
              "adultOnly": "EVERYONE",
              "taxType": "TAX",
              "parallelImported": "NOT_PARALLEL_IMPORTED",
              "overseasPurchased": "NOT_OVERSEAS_PURCHASED",
              "externalVendorSku": "90726",
              "barcode": "",
              "emptyBarcode": false,
              "emptyBarcodeReason": null,
              "modelNo": "",
              "extraProperties": null,            
              "certifications": [],
              "searchTags": null,
              "images": [{
                "imageOrder": 0,
                "imageType": "REPRESENTATION",
                "cdnPath": "vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg",
                "vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"
              }],
              "notices": [{
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제품 소재",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "색상",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "치수",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제조자(수입자)",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제조국",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "제조연월",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "품질보증기준",
                "content": "상세페이지 참조"
              }, {
                "noticeCategoryName": "의류",
                "noticeCategoryDetailName": "A/S 책임자와 전화번호",
                "content": "상세페이지 참조"
              }],
              "attributes": [{
                "attributeTypeName": "사이즈",
                "attributeValueName": "55"
              }],
              "contents": [{
                "contentsType": "TEXT",
                "contentDetails": [{
                  "content": "<html><div><\/div><div><img src='http:\/\/www.babomall.com\/bbsemarket\/gimage\/7005345_2014_04_09_10_02_25_111.jpg' \/><div><\/html>",
                  "detailType": "TEXT"
                }]
              }]
            }
          ],
          "requiredDocuments": [],
          "manufacture": "제조사"
        }
      }
    ],
    response: {
      "code": "200",
      "message": "",
      "data": {
        "code": "SUCCESS",
        "message": "",
        "data": "7770"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
