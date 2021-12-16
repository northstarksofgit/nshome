package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.felix.scr.annotations.Service;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.AreaListDtoResults;
import com.kia25.core.rest.client.dto.CarGroupListDto;
import com.kia25.core.rest.client.dto.CarGroupListDtoResults;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.CategoryListDtoResults;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.dto.CompleteListDtoResults;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.ModelListDtoResults;
import com.kia25.core.rest.client.dto.OptionListDtoResults;
import com.kia25.core.rest.client.dto.SummaryDto;
import com.kia25.core.rest.client.dto.SummaryDtoResults;
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
	
	/**
	 * get category List
	 */
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
	
	/**
	 * get Model List
	 */
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
	 * get carGroup List
	 */
	@Override
//	public CarGroupListDto getCarGroupListAPI() {
	public CarGroupListDtoResults getCarGroupListAPI() {
		
		try {
			String response = service.getRequest("trim-list");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			CarGroupListDtoResults result = mapper.readValue(response, CarGroupListDtoResults.class);
			return result;
//			return result.getData();
			
		} catch (IOException e) {
			LOG.debug("response={}", "error");
			e.printStackTrace();
			
		}
		
		return null;
	}
	
	/**
	 * get trim List
	 
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
	*/
	
	/**
	 * get option List
	 */
	public OptionListDtoResults getOptionlListAPI() {
		
		try {
			String response = service.getRequest("list-of-option");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			OptionListDtoResults results = mapper.readValue(response,  OptionListDtoResults.class);
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
	 
	/**
	 * build003 / colorlist 불러오기
	 */
	
	public ColorListDtoResults getColorAPI() {

		try {
			String response = service.getRequest("color-list");
			ObjectMapper mapper = new ObjectMapper();

			ColorListDtoResults results = mapper.readValue(response, ColorListDtoResults.class);
			return results;

		} catch (IOException e) {
		//	LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}

		return null;
	}
	
	public ModelListDto getModelAPI() {

		try {
			String response = service.getRequest("model-list");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();

			ModelListDtoResults results = mapper.readValue(response, ModelListDtoResults.class);
			return results.getData();

		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}

		return null;
	}
	
	
	
	/*
	 * get summary
	 */

	@Override
	public SummaryDto getSummaryAPI(String step) {
		
		String response = null;
		
		try {
		
			if(step.equals("2")) {
				
				response = service.getRequest("summary-info-0");
				
			}else if(step.equals("3")) {
				//trim까지
				
				response = service.getRequest("summary-info-1");

				
			}else if(step.equals("4")){
				//color까지
				
				response = service.getRequest("summary-info-2");
				
			}else {
				//option까지
			
				response = service.getRequest("summary-info-3");
			}
			
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			SummaryDtoResults result = mapper.readValue(response, SummaryDtoResults.class);
			
			return result.getData();
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * build006 / completelist 불러오기
	 */
	
	public CompleteListDtoResults getCompleteAPI() {

		try {
			String response = service.getRequest("complete-list");
			ObjectMapper mapper = new ObjectMapper();

			CompleteListDtoResults results = mapper.readValue(response, CompleteListDtoResults.class);
			return results;

		} catch (IOException e) {
		//	LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}

		return null;
	}

	@Override
	public CarGroupListDtoResults getTrasmissionListAPI() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AreaListDtoResults getAreaListAPI() {
		// TODO Auto-generated method stub
		return null;
	}

}
