package com.tappy.tappy.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "worker")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Worker {

    @Id
    @Column(name = "worker_id")
    private String workerId;

    @Column(name = "worker_name")
    private String workerName;

    @Column(name = "worker_email")
    private String workerEmail;

    @Column(name = "worker_phone")
    private String workerPhone;

    @Column(name = "worker_login_id")
    private String workerLoginId;

    @Column(name = "worker_login_pw")
    private String workerLoginPw;

    @OneToMany(mappedBy = "worker", fetch = FetchType.LAZY)
    private List<Membership> memberships = new ArrayList<>();
}
