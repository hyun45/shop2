# shop
<div align="center">
 <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" alt="Node.js"/> 
 <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" alt="Express"/>
 <img src="https://img.shields.io/badge/Passport-34E27A?style=flat&logo=Passport&logoColor=white" alt="Passport"/>
 <img src="https://img.shields.io/badge/.ENV-ECD53F?style=flat&logo=.ENV&logoColor=white" alt=".ENV"/>
 <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" alt="MySQL"/>
 <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=Sequelize&logoColor=white" alt="Sequelize"/>
 <img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon"/>
 <img src="https://img.shields.io/badge/visualstudio-5C2D91?style=flat&logo=visualstudio&logoColor=white">
</div>

<br/><br/>
Controller, Service, Repository 설계 방식을 따라 개발하였고, API 설계만을 목적으로 하여 
<br/>**Front-end는 개발하지 않았습니다.**<br/>

**서버를 실행한 후 postman으로 API 기능을 수행할 수 있습니다.** <br/><br/>

**핵심 기능**

- 로그인, 회원가입 등 사용자 관련 API 설계
- 제품 및 장바구니 관련 CRUD API 설계
- 제품의 경우 관리자 권한(userType이 1인 경우)에만 가능하도록 설계
- 로그인 된 경우에만 장바구니 기능을 사용가능하도록 설계<br/><br/>


### Postman 예시
<br/>

**회원 가입 API**
<br/>
![postman_register](https://github.com/hyun45/shop2/assets/97267651/2886fc85-5a78-4055-ac5e-a9d9831bd186)
<br/>

**로그인 및 로그아웃 API**
<br/>
![postman_login](https://github.com/hyun45/shop2/assets/97267651/8b6dba7d-aeda-429f-b02a-0552a90c1911)
![postman_logout](https://github.com/hyun45/shop2/assets/97267651/4547e1c7-784b-4fee-8557-34b0a345fbf9)
<br/>

**회원 정보 조회 API**
<br/>
![postman_userInfo](https://github.com/hyun45/shop2/assets/97267651/cdecf6db-9845-40d3-9015-6068ea88a366)
<br/>
다른 유저 정보 조회 권한 없음
<br/>
![postman_userInfo_fail](https://github.com/hyun45/shop2/assets/97267651/7d1857f8-5480-4389-b8da-111be1f80477)
<br/>

**회원 정보 수정 및 회원 탈퇴 API**
<br/>
![postman_userInfo_update](https://github.com/hyun45/shop2/assets/97267651/e4ed0ac9-2c1c-4450-ab1f-dc147e24b3e4)
![postman_delete_user](https://github.com/hyun45/shop2/assets/97267651/4ab58f56-8775-4a4c-a533-8a477d6a1e20)
<br/>

**상품 등록 API**
<br/>
![postman_createProduct](https://github.com/hyun45/shop2/assets/97267651/f5556471-df99-4593-9bfb-f42224541808)
<br/>

**상품 등록 및 조회 API**
<br/>
![postman_createProduct](https://github.com/hyun45/shop2/assets/97267651/f5556471-df99-4593-9bfb-f42224541808)
![postman_all_product](https://github.com/hyun45/shop2/assets/97267651/294d1370-7dd8-4dc5-9f34-2b9e66dba5ae)
<br/>

**장바구니 등록 및 조회 API**
<br/>
![postman_cart](https://github.com/hyun45/shop2/assets/97267651/58ae326d-1989-4614-96c2-548bf143eae5)
![postman_add_cart](https://github.com/hyun45/shop2/assets/97267651/3dd7d35d-7ab7-4476-87a0-6aa6337f6018)
<br/>

