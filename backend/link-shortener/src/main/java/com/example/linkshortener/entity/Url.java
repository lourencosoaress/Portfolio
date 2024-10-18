package com.example.linkshortener.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table (name = "url")

public class Url {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private String longUrl;
    @Column
    private Date createdDate;
    private Date expiredDate;
}
