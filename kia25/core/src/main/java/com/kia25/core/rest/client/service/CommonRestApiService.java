package com.kia25.core.rest.client.service;

import java.io.IOException;
import java.util.ArrayList;

import org.apache.http.NameValuePair;
import org.apache.http.entity.ContentType;

public interface CommonRestApiService {

	String getRequest(final String url) throws IOException;
	String sendPostRequest(final String url, ArrayList<NameValuePair> postParameterse) throws IOException;

}
