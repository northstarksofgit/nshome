package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.felix.scr.annotations.Service;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.CarGroupListDto;
import com.kia25.core.rest.client.dto.CarGroupListDtoResults;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.CategoryListDtoResults;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.ModelListDtoResults;
import com.kia25.core.rest.client.dto.OptionListDto;
import com.kia25.core.rest.client.dto.OptionListDtoResults;
import com.kia25.core.rest.client.dto.TrimListDto;
import com.kia25.core.rest.client.dto.TrimListDtoResults;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.CommonRestApiService;

@Component(immediate = true)
@Service(value = BuildYourCarService.class)
public class BuildYourCarServiceImpl implements BuildYourCarService {

	private static final Logger LOG = LoggerFactory.getLogger(BuildYourCarServiceImpl.class);
	
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();
	
	//get Category
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
	
	//get Model List
	public ModelListDto getModelListAPI() {
		
		try {
			String response = service.getRequest("model-list");
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
	
	
	/**
	 * carGroup list 가져오기
	 */
	@Override
	public CarGroupListDto getCarGroupListAPI() {
		
		try {
			String response = service.getRequest("carGroup-list");
			ObjectMapper mapper = new ObjectMapper();
			
			CarGroupListDtoResults result = mapper.readValue(response, CarGroupListDtoResults.class);
			return result.getData();
			
		} catch (IOException e) {
			e.printStackTrace();
			
		}
		
		return null;
	}
	
	
	public TrimListDto getTrimListAPI() {
		
		try {
			String response = service.getRequest("trim-list");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			TrimListDtoResults results = mapper.readValue(response,  TrimListDtoResults.class);
			return results.getData();
			
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	public OptionListDto getOptionlListAPI() {
		
		try {
			String response = service.getRequest("list-of-option");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			OptionListDtoResults results = mapper.readValue(response,  OptionListDtoResults.class);
            return results.getData();
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
	public ColorListDto getColorListAPI() {
		
		try {
			String response = service.getRequest("color-list");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			ColorListDtoResults results = mapper.readValue(response,  ColorListDtoResults.class);
			results.getData();
            return results.getData();
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
}
