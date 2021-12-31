package com.kia25.core.rest.client.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Dictionary;

import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.osgi.service.component.ComponentContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.service.CommonRestApiService;

@Component(metatype = true, label = "Northstar API", description ="Northstar API Service using the REST API")
@Service(value = CommonRestApiService.class)
@Properties({
    @Property(name = "service.ranking", intValue = 100),
})
public class CommonRestApiServiceImpl implements CommonRestApiService {

	private static final Logger LOG = LoggerFactory.getLogger(CommonRestApiServiceImpl.class);

    @Property(label = "Service endpoint URL", description = "URL of the API service endpoint, e.g. http://hostname/. Must end with '/'.", value = "http://192.168.31.86:9090/")
    private static final String PROP_ENDPOINT_URL = "endpoint.url";
	
	private String endPointUrl = "http://192.168.31.86:9090/";

    @Activate
    private void activate(ComponentContext ctx) {
        Dictionary<String, Object> props = ctx.getProperties();
        endPointUrl = (String) props.get(PROP_ENDPOINT_URL);
        LOG.debug("Endpoint URL = '{}'.", endPointUrl);

    }
    
    @Override
	public String getRequest(final String url) throws IOException {
        LOG.debug("Getting '{}'.", endPointUrl + url);
        long startTime = System.currentTimeMillis();
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpGet request = new HttpGet(endPointUrl + url);
            
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
	
	
    @Override
	public String sendPostRequest(final String url, final ArrayList<NameValuePair> postParameters)
            throws IOException {
    	
        LOG.info("Posting to '{}'.", endPointUrl+url);
        LOG.info("postParameters: {}", postParameters);
        
        long startTime = System.currentTimeMillis();
      
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
        	
        	
        	/*
        	 * 요청할 URL 결합
        	 */
            HttpPost request = new HttpPost(endPointUrl+url);
            
            /*
             * urlEncoded 방식으로 request
             */
            request.setEntity(new UrlEncodedFormEntity(postParameters, "UTF-8"));
            
            LOG.info("request: {}", request.getEntity());
            
            CloseableHttpResponse response = httpClient.execute(request);
            
            long endTime = System.currentTimeMillis();
            LOG.info("Result Time : {}.", endTime - startTime);

            int responseCode = response.getStatusLine().getStatusCode();
            LOG.info("POST request response = '{}'.", response.getStatusLine());
            
            HttpEntity entity = response.getEntity();
            
            if (responseCode >= 200 && responseCode < 300) {
                return entity != null ? EntityUtils.toString(entity) : null;
                
            } else {
                LOG.error("Error in the request to '{" +endPointUrl+ url + "}, postParameters{" + postParameters + "}'");               
                String responsemsg = EntityUtils.toString(entity);
                LOG.info("Response = " + responsemsg);
                throw new IOException("Error in the request to '{" + endPointUrl+url + "}'");
            }

        } catch (IOException e) {
            throw new IOException("Error in the request to '{" + endPointUrl+url + "}'", e);
        }
    }
	
}
