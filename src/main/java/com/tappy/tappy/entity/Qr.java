package com.tappy.tappy.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "qr")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Qr {

    @Id
    @Column(name = "qr_id")
    private String qrId;

    @Column(name = "image_link")
    private String imageLink;

    @Column(name = "qr_create_at")
    private LocalDateTime qrCreateAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;
}
