package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import javax.annotation.Resource;

import org.apache.felix.scr.annotations.Service;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.service.Build003Service;
import com.kia25.core.rest.client.service.CommonRestApiService;

@Component(immediate = true)
@Service(value = Build003Service.class)
public class Build003ServiceImpl implements Build003Service {

	private static final Logger LOG = LoggerFactory.getLogger(Build003ServiceImpl.class);
	
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();
	
	public ColorListDto getModelAPI() {
		
		try {
			String response = service.getRequest("color-list");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			ColorListDtoResults results = mapper.readValue(response,  ColorListDtoResults.class);
            return results.getData();
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
}
