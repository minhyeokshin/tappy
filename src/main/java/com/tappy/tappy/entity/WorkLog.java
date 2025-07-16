package com.tappy.tappy.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "work_log")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WorkLog {

    @Id
    @Column(name = "work_log_id")
    private String workLogId;

    @Column(name = "work_start_time")
    private LocalDateTime workStartTime;

    @Column(name = "work_end_time")
    private LocalDateTime workEndTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "membership_id", nullable = false)
    private Membership membership;
}
