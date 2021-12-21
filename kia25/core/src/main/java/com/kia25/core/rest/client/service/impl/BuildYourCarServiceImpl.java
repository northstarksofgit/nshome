package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.felix.scr.annotations.Service;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.AreaListDtoResults;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.CategoryListDtoResults;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.dto.CompleteListDtoResults;
import com.kia25.core.rest.client.dto.ModelDetailListDtoResults;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.ModelListDtoResults;
import com.kia25.core.rest.client.dto.OptionListDtoResults;
import com.kia25.core.rest.client.dto.SummaryDto;
import com.kia25.core.rest.client.dto.SummaryDtoResults;
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
	 * build 002 / get ModelDetail 
	 */
	@Override
	public ModelDetailListDtoResults getModelDetailAPI(String modelCode) {
		
		String response = null;
		
		try {
			String url = null;
			
			// 차종이 EV6인 경우 
			if (modelCode.equals("EV6")) {
				url = "trim-list-E";
				
			// 차종이 EV6가 아닌 경우
			} else {
				url = "trim-list-S";
			}
			
			url += "?modelCode=" + modelCode;
			response = service.getRequest(url);
			
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			ModelDetailListDtoResults result = mapper.readValue(response, ModelDetailListDtoResults.class);
			return result;
			
		} catch (IOException e) {
			
			LOG.debug("response={}", "error");
			e.printStackTrace();
			
		}
		
		return null;
	}
	
	
	/**
	 * get option List
	 */
	public OptionListDtoResults getOptionlListAPI(String modelCode, String trimCode, String extColorCode, String intColorCode) {
		
		try {
	        String url = "list-of-option?";
			url += "modelCode="+modelCode;
			url += "&trimCode="+trimCode;
			url += "&ext="+extColorCode;
			url += "&int="+intColorCode;
			
			String response = service.getRequest(url);
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
	
	public ColorListDtoResults getColorAPI(String modelCode, String trimCode) {

		try {
			
			String url = "color-list?";
			url += "modelCode="+modelCode;
			url += "&trimCode="+trimCode;
			
			String response = service.getRequest(url);
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
	public SummaryDto getSummaryAPI(String step, String modelCode, String trimCode, String ext, String intCode, String option) {
		
		String response = null;
		
		try {
		
			if(step.equals("3")) {
				
				response = service.getRequest("summary-info-0"+"?modelCode="+modelCode);
				
			}else if(step.equals("4")) {
				//trim까지
				
				response = service.getRequest("summary-info-1"+"?modelCode="+modelCode+"&trimCode="+trimCode);

				
			}else if(step.equals("5")){
				//color까지
				
				response = service.getRequest("summary-info-2"+"?modelCode="+modelCode+"&trimCode="+trimCode+"&exteriorColorCode="+ext+"&interiorColorCode="+intCode);
				
			}else{
				//how to buy
			
				response = service.getRequest("summary-info-3"+"?modelCode="+modelCode+"&trimCode="+trimCode+"&exteriorColorCode="+ext+"&interiorColorCode="+intCode+"&optionCode="+option);
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
	
	public CompleteListDtoResults getCompleteAPI(String modelCode, String trimCode, String extColorCode, String intColorCode, String optionCode) {

		try {
			
			String url = "complete-list?";
			url += "modelCode="+modelCode;
			url += "&trimCode="+trimCode;
			url += "&ext="+extColorCode;
			url += "&int="+intColorCode;
			url += "&option="+optionCode;
			
			String response = service.getRequest(url);
			ObjectMapper mapper = new ObjectMapper();

			CompleteListDtoResults results = mapper.readValue(response, CompleteListDtoResults.class);
			return results;

		} catch (IOException e) {
		//	LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}

		return null;
	}
	

	/**
	 * get area List
	 */
	public AreaListDtoResults getAreaListAPI() {
		
		try {
			String response = service.getRequest("list-of-area");
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			AreaListDtoResults results = mapper.readValue(response,  AreaListDtoResults.class);
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}

 

}
