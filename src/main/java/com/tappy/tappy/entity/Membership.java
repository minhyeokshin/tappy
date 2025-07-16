package com.tappy.tappy.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "membership")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Membership {

    @Id
    @Column(name = "membership_id")
    private String membershipId;

    @Column(name = "wage")
    private int wage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "worker_id", nullable = false)
    private Worker worker;
}
