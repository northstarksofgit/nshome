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
			String response = service.getRequest("build-your-car/category-list");
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
	
	
	/**
	 * build 002 / get ModelDetail 
	 */
	@Override
	public ModelDetailListDtoResults getModelDetailAPI(String modelCode, String modelYear) {
		
		String response = null;
		
		try {
			String url = "build-your-car/trim-list";
			
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
	        String url = "build-your-car/option-list?";
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
			
			String url = "build-your-car/color-list?";
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
			String response = service.getRequest("build-your-car/model-list");
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
	public SummaryDto getSummaryAPI(String modelCode, String modelYear, String trimCode, String extColorCode, String intColorCode, String optionCode) {
		
		String response = null;
		String url = "";
		try {

			
			// 2021 12 28 기준 : data가 유효한 트림 코드 LRL
			
			url = "build-your-car/summary-info?modelCode="+modelCode;
			url += "&modelYear="+modelYear;
			url	+= trimCode!=null? "&trimCode="+trimCode : "";
			url	+= extColorCode != null ? "&extColorCode="+extColorCode : "";
			url += intColorCode != null ? "&intColorCode="+intColorCode : "";
			url += optionCode != null ? "&optionCode="+optionCode: "";
			
			
			response = service.getRequest(url);
			
			LOG.debug("response={}", response);
			LOG.info("summary url="+url);
			
			ObjectMapper mapper = new ObjectMapper();
			
			SummaryDtoResults result = mapper.readValue(response, SummaryDtoResults.class);
			
			return result.getData();
		
		} catch (Exception e) {
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
			
			String url = "build-your-car/complete-list?";
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
			String response = service.getRequest("build-your-car/list-of-area");
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
