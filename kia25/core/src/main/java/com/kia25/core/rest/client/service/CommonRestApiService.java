package com.kia25.core.rest.client.service;

import java.io.IOException;

import org.apache.http.entity.ContentType;

public interface CommonRestApiService {

	String getRequest(final String url) throws IOException;
	String sendPostRequest(final String url, final String body, final ContentType contentType) throws IOException;

}
