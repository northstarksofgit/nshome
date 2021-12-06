package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import javax.annotation.Resource;

import org.apache.felix.scr.annotations.Service;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.CategoryListDtoResults;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.CommonRestApiService;

@Component(immediate = true)
@Service(value = BuildYourCarService.class)
public class BuildYourCarServiceImpl implements BuildYourCarService {

	private static final Logger LOG = LoggerFactory.getLogger(BuildYourCarServiceImpl.class);
	
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();
	
	public CategoryListDto getCategoryAPI() {
		
		try {
			String response = service.getRequest("category-list");
			LOG.debug("response={}", response);
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
