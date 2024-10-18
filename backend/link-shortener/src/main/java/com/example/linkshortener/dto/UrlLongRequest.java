package com.example.linkshortener.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

@AllArgsConstructor
@Getter
public class UrlLongRequest {

    private String longUrl;
    private Date expiredDate;
}
