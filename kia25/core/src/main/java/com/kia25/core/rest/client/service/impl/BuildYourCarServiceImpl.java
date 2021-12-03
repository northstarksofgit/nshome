package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.CategoryListDtoResults;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.CommonRestApiService;

public class BuildYourCarServiceImpl implements BuildYourCarService {

	private String endPointUrl = "http://localhost:3000";
	private static final Logger LOG = LoggerFactory.getLogger(BuildYourCarServiceImpl.class);
	
	@OSGiService
	private CommonRestApiService service;
	
	public CategoryListDto getCategoryList() {
		
		try {
			String response = service.getRequest(endPointUrl + "/category-list");
			ObjectMapper mapper = new ObjectMapper();
			
			CategoryListDtoResults results = mapper.readValue(response,  CategoryListDtoResults.class);
            return results.getData();
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
}
