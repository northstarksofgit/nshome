package com.kia25.core.rest.client.service.impl;

import java.io.IOException;
import java.util.List;

import org.apache.http.entity.ContentType;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.OptionDto;
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
	public String saveCategory(CategoryDto categoryDto) {
		// TODO Auto-generated method stub
        ObjectMapper mapper = new ObjectMapper();
        try {
            String json = mapper.writeValueAsString(categoryDto);
            LOG.debug("Serialized contract = '{}'.", json);
            String response = service.sendPostRequest("db/category/save", json, ContentType.APPLICATION_JSON);
            LOG.debug("postContract: response = '{}'.", response);
//            JsonParser parser = new JsonParser();
//            JsonElement jsonResponse = parser.parse(response);
//            JsonObject jsonObj = jsonResponse.getAsJsonObject();
//            JsonObject data = jsonObj.getAsJsonObject("data");
//            String categorySeq = data.get("categorySeq").getAsString();
            return "OK";
        } catch (JsonProcessingException e) {
            LOG.error("Error serializing object to JSON.", e);
        } catch (IOException e) {
            LOG.error("Error submitting contract.", e);
        }
		return "OK";
	}
	
	
	@Override
	public List<ModelDto> getModelListAPI(String categoryCode) {
		
		try {
			
			String response = service.getRequest("db/model/list?categoryCode="+categoryCode);
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			List<ModelDto> results = mapper.readValue(response, new TypeReference<List<ModelDto>>(){});
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
	@Override
	public List<ColorDto> getColorAPI(String modelCode, String trimCode, String modelYear) {
		
		try {
			
			String response = service.getRequest("db/model/list?modelCode"+modelCode+"&trimCode="+trimCode+"&modelYear="+modelYear);
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			List<ColorDto> results = mapper.readValue(response, new TypeReference<List<ColorDto>>(){});
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}

	
	@Override
	public OptionDto[] getOptionListAPI(String modelCode, String trimCode, String extColorCode, String intColorCode) {
		
		try {
			String url = "db/option/list?trimCode="+trimCode;
			
			LOG.debug("URL   =    {}", url);
			
			String response = service.getRequest(url);
			LOG.debug("response={}", response);
			ObjectMapper mapper = new ObjectMapper();
			
			OptionDto results[] = mapper.readValue(response,  OptionDto[].class);
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
}
