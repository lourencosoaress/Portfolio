package com.example.linkshortener.service;

import com.example.linkshortener.dto.UrlLongRequest;
import com.example.linkshortener.entity.Url;
import com.example.linkshortener.repository.UrlRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class UrlService {

    private final UrlRepository urlRepository;
    private final BaseConversion baseConversion;

    public String convertToShortUrl(UrlLongRequest request) {
        Url url = new Url();
        url.setLongUrl(request.getLongUrl());
        url.setExpiredDate(request.getExpiredDate());
        url.setCreatedDate(new Date());
        var entity = urlRepository.save(url);
        return baseConversion.encode(entity.getId());
    }

    public String getOriginalUrl(String shortUrl) {
        int id = baseConversion.decode(shortUrl);
        var entity = urlRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("There is no entity with " + shortUrl));

        if (entity.getExpiredDate() != null && entity.getExpiredDate().before(new Date())){
            urlRepository.delete(entity);
            throw new EntityNotFoundException("Link expired!");
        }

        return entity.getLongUrl();
    }
}
