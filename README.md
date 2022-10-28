# Project

- wecode 38기 1차 프로젝트
- 스웨덴의 가구 브랜드 iKEA cloning project
- [weKEA 시연영상](https://youtu.be/F_pV4OFjY4A)

# 개발 인원 및 기간

- 개발기간 : 2022/10/17 ~ 2022/10/27
- 개발 인원 : Front-End 3명, Back-End 3명
- Front-End : [김도영](https://github.com/doyoungkim1994), [김솔(PM)](https://github.com/Solrasido55), [양동선](https://github.com/yangseon3)
- Back-End : [김희연](https://github.com/Cein1), [이찬우](https://github.com/c0zyb1ue), [정해만](https://github.com/haemong)

# 티켓 
# 적용 기술

- Front-End : <img src="https://img.shields.io/badge/Javscript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React.js-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/sass-CC6699?style=flat&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=ReactRouter&logoColor=white"/> <img src="https://img.shields.io/badge/Create React App-09D3AC?style=flat&logo=CreateReactApp&logoColor=white"/>
- Back-End : <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/EC2-FF9900?style=flat&logo=AmazonEC2&logoColor=white"/> <img src="https://img.shields.io/badge/RDS-527FFF?style=flat&logo=AmazonRDS&logoColor=white"/> <img src="https://img.shields.io/badge/S3-569A31?style=flat&logo=AmazonS3&logoColor=white"/> <img src="https://img.shields.io/badge/PostMan-FF6C37?style=flat&logo=PostMan&logoColor=white"/>
- common : <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=AmazonAWS&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=AmazonAWS&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white"/>
- 협업툴 : <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>

# 관련 링크

- [백엔드 깃헙주소](https://github.com/wecode-bootcamp-korea/38-1st-weKEA-backend)
- [프론트엔드 깃헙주소](https://github.com/wecode-bootcamp-korea/38-1st-weKEA-frontend)
- [Notion 프로젝트 소개](https://www.notion.so/a765855cac2d43ecb083e59a5a5957fd)


# 구현 기능

## Main Page

- 메인 페이지 레이아웃
- 해당 카테고리로 이동할 수 있는 링크가 달린 이미지

## Nav

- 로그인 여부에 따른 레이아웃 변화
- 메뉴바, 로그인바 마운트/언마운트시 애니메이션

## Footer

- 상수데이터를 활용한 레이아웃 구현

## Login

- 유효성 검사
- 유효성 여부에 의한 레이아웃 변화

## SignUp

- 유효성 검사
- 유효성 여부에 의한 레이아웃 변화

## List page

- 쿼리스트링을 사용한 pagination, sort, filter 기능
- 장바구니, 위시리스트에 추가 기능

## Detail Page

- 제품 설명, 치수, 장바구니, 위시리스트를 눌렀을 때 나오는 사이드바를 하나의 컴포넌트로 재사용
- 이미지를 클릭하면 캐러셀이 포함된 모달이 나오도록 구현
- 색상을 선택하지 않으면 장바구니에 추가하지 못하게 설정
- 장바구니, 위시리스트에 추가 기능

## Cart

- 상품 수량 변경, 삭제 기능
- 위시리스트로 이동 기능
- 가격과 수량을 곱해 품목별 총 가격을 표시
- 품목별 총 가격을 모두 더한 총 가격 표시
- 결제하기 버튼을 클릭하면 "결제하시겠습니까?"가 포함된 모달이 mount됨
- 모달의 확인버튼을 누르면 카트에 담긴 제품이 결제되고 보유한 포인트가 차감됨

## WishList

- 장바구니에 추가 기능
- 모든 상품 장바구니에 추가 기능
- 상품 삭제 기능

## My Page

- 유저 정보를 받아와 이름과 포인트를 표시

## Purchase History

- 결제 내역 표시
- 주문취소 기능
