
```
com.tappy.tappy
├── store             ← 매장 등록, GPS, QR
├── membership        ← 알바 고용, 시급
├── worklog           ← 출퇴근 기록
├── contract          ← 계약 관련
├── payment           ← 결제 관리
├── owner             ← 사장 계정
├── worker            ← 알바 계정
├── auth              ← 공통 로그인/인증

```


```
com.tappy.tappy
    2 ├── global                  # 💡 전역 설정 및 공통 모듈
    4 │   ├── config
    6 │   ├── exception
    7 │   └── util
    8 │
    9 └── admin                   # 💎 'admin' 도메인 (하나의 헥사곤)
   10 │   ├── domain              # 🧠 Core: 순수 도메인 모델 (가장 안쪽)
   11 │   │   └── Admin.java      # (Entity 또는 비즈니스 모델)
   12 │   │
   13 │   ├── application         # ⚙️ Core: 애플리케이션 로직 (Use Cases & Ports)
   14 │   │   ├── port            # 🔌 포트 (인터페이스)
   15 │   │   │   ├── in          #   - Inbound Port (외부에서 내부로)
   16 │   │   │   │   └── RegisterAdminUseCase.java
   17 │   │   │   └── out         #   - Outbound Port (내부에서 외부로)
   18 │   │   │       ├── SaveAdminPort.java
   19 │   │   │       └── LoadAdminPort.java
   20 │   │   │
   21 │   │   ├── service         #   - UseCase 구현체
   22 │   │   │   └── RegisterAdminService.java
   23 │   │   │
   24 │   │   └── dto             #   - 이 UseCase에서만 사용하는 DTO
   25 │   │       ├── RegisterAdminRequest.java
   26 │   │       └── AdminDetailsResponse.java
   27 │   │
   28 │   └── adapter             # 🔌 어댑터 (외부 세계와의 연동)
   29 │       ├── in              #   - Inbound Adapter
   30 │       │   └── web
   31 │       │       └── AdminController.java
   32 │       └── out             #   - Outbound Adapter
   33 │           └── persistence
   34 │               ├── AdminPersistenceAdapter.java  # Port 구현체
   35 │               ├── AdminJpaRepository.java       # Spring Data JPA
   36 │               └── AdminEntity.java              # 💡 DB 테이블과 1:1 매핑되는 엔티티 (VO 역할)
   37 │
   38 └── user                    # 💎 'user' 도메인 (admin과 동일한 구조)
   39     ├── domain
   40     ├── application
   41     └── adapter

```