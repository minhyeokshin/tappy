package com.tappy.tappy.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "owner")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Owner {

    @Id
    @Column(name = "owner_id")
    private String id;

    @Column(name = "owner_name")
    private String name;

    @Column(name = "owner_login_id")
    private String loginId;

    @Column(name = "owner_login_pw")
    private String loginPw;

    @Column(name = "owner_email")
    private String email;

    @Column(name = "owner_phone")
    private String phone;

    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<Store> stores = new ArrayList<>();
}
