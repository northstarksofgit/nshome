package com.kia25.core.rest.client.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.CategoryListDtoResults;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.ModelListDtoResults;
import com.kia25.core.rest.client.service.CommonRestApiService;
import com.kia25.core.rest.client.service.CrudService;

public class CrudServiceImpl implements CrudService{
	
	private static final Logger LOG = LoggerFactory.getLogger(CrudServiceImpl.class);
	
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();

	@Override
	public List<CategoryDto> getCategoryAPI() {
		
		try {
			String response = service.getRequest("db/category/list");
			
			LOG.info("category response={}", response);
			
			ObjectMapper mapper = new ObjectMapper();
			
			
			List<CategoryDto> results = mapper.readValue(response, new TypeReference<List<CategoryDto>>(){});
			
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public ModelListDto getModelListAPI() {
		
		try {
			
			String response = service.getRequest("build-your-car/model-list");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			ModelListDtoResults results = mapper.readValue(response,  ModelListDtoResults.class);
            return results.getData();
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}

}