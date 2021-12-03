package com.kia30.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.auth.AuthenticationException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia30.core.rest.client.service.CommonRestApiService;


public class CommonRestApiServiceImpl implements CommonRestApiService {

	private static final Logger LOG = LoggerFactory.getLogger(CommonRestApiServiceImpl.class);

	public String getRequest(final String url) throws IOException {
        LOG.debug("Getting '{}'.", url);
        long startTime = System.currentTimeMillis();
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpGet request = new HttpGet(url);
            
            /* add header
            request.addHeader(new BasicScheme().authenticate(credentials, request, null));
            request.addHeader("Authorization", "Bearer " + password);
            */

            CloseableHttpResponse response = httpClient.execute(request);
            
            long endTime = System.currentTimeMillis();
            LOG.debug("Result Time : {}.", endTime - startTime);

            int responseCode = response.getStatusLine().getStatusCode();
            HttpEntity entity = response.getEntity();
            if (responseCode < 200 || responseCode >= 300) {
            	LOG.error("Error in the request to '{}, response {}'", url, response.getStatusLine());
                String responsemsg = EntityUtils.toString(entity);
                LOG.debug("Response = " + responsemsg);
            }
            return entity != null ? EntityUtils.toString(entity) : null;

        } catch (IOException e) {
            throw new IOException("Error in the request to '{" + url + "}'", e);
        }
	}
}
