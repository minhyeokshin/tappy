package com.tappy.tappy.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "contract")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Contract {

    @Id
    @Column(name = "contract_id")
    private String contractId;

    @Column(name = "contract_link")
    private String contractLink;

    @Column(name = "document_id")
    private String documentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "membership_id", nullable = false)
    private Membership membership;
}
