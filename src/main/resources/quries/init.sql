DROP TABLE IF EXISTS owner CASCADE;
CREATE TABLE owner (
    owner_id VARCHAR(20) NOT NULL,
    owner_name VARCHAR(15) NULL,
    owner_login_id VARCHAR(20) NULL,
    owner_login_pw VARCHAR(255) NULL,
    owner_email VARCHAR(50) NULL,
    owner_phone VARCHAR(15) NULL
);

DROP TABLE IF EXISTS membership CASCADE;
CREATE TABLE membership (
    membership_id VARCHAR(20) NOT NULL,
    store_id VARCHAR(20) NOT NULL,
    worker_id VARCHAR(20) NOT NULL,
    wage INTEGER NULL
);

DROP TABLE IF EXISTS qr CASCADE;
CREATE TABLE qr (
    qr_id VARCHAR(20) NOT NULL,
    image_link TEXT NULL,
    qr_create_at TIMESTAMP NULL,
    store_id VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS payment CASCADE;
CREATE TABLE payment (
    payment_id VARCHAR(20) NOT NULL,
    store_id VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS work_log CASCADE;
CREATE TABLE work_log (
    work_log_id VARCHAR(20) NOT NULL,
    work_start_time TIMESTAMP NULL,
    work_end_time TIMESTAMP NULL,
    membership_id VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS store CASCADE;
CREATE TABLE store (
    store_id VARCHAR(20) NOT NULL,
    owner_id VARCHAR(20) NOT NULL,
    store_name VARCHAR(50) NULL,
    store_gps_x DOUBLE PRECISION NULL,
    store_gps_y DOUBLE PRECISION NULL,
    store_payment_status BOOLEAN NULL
);

DROP TABLE IF EXISTS contract CASCADE;
CREATE TABLE contract (
    contract_id VARCHAR(20) NOT NULL,
    membership_id VARCHAR(20) NOT NULL,
    contract_link TEXT NULL,
    document_id TEXT NULL
);

DROP TABLE IF EXISTS worker CASCADE;
CREATE TABLE worker (
    worker_id VARCHAR(20) NOT NULL,
    worker_name VARCHAR(15) NULL,
    worker_email VARCHAR(50) NULL,
    worker_phone VARCHAR(15) NULL,
    worker_login_id VARCHAR(20) NULL,
    worker_login_pw VARCHAR(255) NULL
);

ALTER TABLE owner ADD CONSTRAINT PK_OWNER PRIMARY KEY (
    owner_id
);

ALTER TABLE membership ADD CONSTRAINT PK_MEMBERSHIP PRIMARY KEY (
    membership_id
);

ALTER TABLE qr ADD CONSTRAINT PK_QR PRIMARY KEY (
    qr_id
);

ALTER TABLE payment ADD CONSTRAINT PK_PAYMENT PRIMARY KEY (
    payment_id
);

ALTER TABLE work_log ADD CONSTRAINT PK_WORK_LOG PRIMARY KEY (
    work_log_id
);

ALTER TABLE store ADD CONSTRAINT PK_STORE PRIMARY KEY (
    store_id
);

ALTER TABLE contract ADD CONSTRAINT PK_CONTRACT PRIMARY KEY (
    contract_id
);

ALTER TABLE worker ADD CONSTRAINT PK_WORKER PRIMARY KEY (
    worker_id
);
