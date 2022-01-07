package com.kia25.core.rest.client.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.CarGroupDto;
import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.CategoryListDtoResults;
import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.OptionDto;
import com.kia25.core.rest.client.dto.TrimDto;
import com.kia25.core.rest.client.service.CommonRestApiService;
import com.kia25.core.rest.client.service.CrudService;

public class CrudServiceImpl implements CrudService{
	
	private static final Logger LOG = LoggerFactory.getLogger(CrudServiceImpl.class);
	
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();

	/*
	 * 카테고리 리스트 출력
	 */
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

	
	/*
	 *  새로운 키테고리 저장
	 */
	@Override
	public String saveCategory(CategoryDto categoryDto) {
		
        try {
            
        	/*
        	 * api-test.http 파일 참고 ==> contentType이 urlEncoded임을 확임
        	 * 따라서 UrlEncodedFormEntity 객체 생성을 위한 postParameter를 mapping 함
        	 */
        	
            ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
            postParameters.add(new BasicNameValuePair("categoryCode", categoryDto.getCategoryCode() ));
            postParameters.add(new BasicNameValuePair("categoryName", categoryDto.getCategoryName() ));
            postParameters.add(new BasicNameValuePair("sortOrder", Integer.toString(categoryDto.getSortOrder()) ));
            postParameters.add(new BasicNameValuePair("useYn", categoryDto.getUseYn() ));
        	
            String response = service.sendPostRequest("db/category/save", postParameters);
            
            LOG.debug("postContract: response = '{}'.", response);
        
            return "OK";
            
        } catch (JsonProcessingException e) {
            LOG.error("Error serializing object to JSON.", e);
        } catch (IOException e) {
            LOG.error("Error submitting contract.", e);
        }
        
		return "NO";
	}
	
	/*
	 * 모델리스트 출력
	 */
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
	
	
	/**
	 * build002 / carGroupList 불러오기
	 */
	@Override
	public List<CarGroupDto> getCarGroupListAPI(String modelCode, String modelYear) {
		
		try {

			String response = service.getRequest("db/car-group/list?modelCode=" + modelCode + "&modelYear=" + modelYear);
			LOG.debug("carGroup response={}", response);
			
			ObjectMapper mapper = new ObjectMapper();
			
			List<CarGroupDto> results = mapper.readValue(response, new TypeReference<List<CarGroupDto>>(){});
            
			return results;
			
		} catch(Exception e) {
			
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}

	/**
	 * build002 / carGroup 추가
	 */
	@Override
	public String saveCarGroup(CarGroupDto carGroupDto) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * build002 / carGroup 삭제
	 */
	@Override
	public String deleteCarGroup(CarGroupDto carGroupDto) {
		// TODO Auto-generated method stub
		return null;
	}


	/**
	 * build002 / trimList 불러오기
	 */
	@Override
	public List<TrimDto> getTrimListAPI(String modelCode, String modelYear) {
		// TODO Auto-generated method stub
		return null;
	}
	
	/**
	 * build002 / trim 추가
	 */
	@Override
	public String saveTrim(TrimDto trimDto) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * build002 / trim 삭제
	 */
	@Override
	public String deleteTrim(TrimDto trimDto) {
		// TODO Auto-generated method stub
		return null;
	}


	
	
	/**
	 *  color List
	 */
	@Override
	public List<ColorDto> listColor(ColorDto colorDto) {
		
		try {
			
			ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
			postParameters.add(new BasicNameValuePair("trimCode", colorDto.getTrimCode()));
            postParameters.add(new BasicNameValuePair("carOptionCode", colorDto.getCarOptionCode()));
            postParameters.add(new BasicNameValuePair("searchWord", colorDto.getSearchWord()));
            
			String response = service.sendPostRequest("db/color/list", postParameters);
			ObjectMapper mapper = new ObjectMapper();
			
			List<ColorDto> results = mapper.readValue(response, new TypeReference<List<ColorDto>>(){});
            return results;

			
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * insert Color
	 */
	public String saveColor(ColorDto colorDto) {

		try {
			ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
            postParameters.add(new BasicNameValuePair("trimCode", colorDto.getTrimCode() ));
            postParameters.add(new BasicNameValuePair("carOptionCode", colorDto.getCarOptionCode() ));
            postParameters.add(new BasicNameValuePair("colorCode", colorDto.getColorCode() ));
            postParameters.add(new BasicNameValuePair("colorName", colorDto.getColorName() ));
            postParameters.add(new BasicNameValuePair("bestYn", colorDto.getBestYn() ));
            postParameters.add(new BasicNameValuePair("colorPrice", colorDto.getColorPrice() ));
            postParameters.add(new BasicNameValuePair("colorImagePath", colorDto.getColorImagePath() ));
            postParameters.add(new BasicNameValuePair("carImagePath", colorDto.getCarImagePath() ));
            postParameters.add(new BasicNameValuePair("SortOrder", colorDto.getSortOrder() ));
            postParameters.add(new BasicNameValuePair("useYn", colorDto.getUseYn() ));
			
			String response = service.sendPostRequest("db/color/save" , postParameters);
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API save.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
		
	/**
	 * delete Color
	 */
	public String deleteColor(ColorDto colorDto) {

		try {
			ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
			postParameters.add(new BasicNameValuePair("trimCode", colorDto.getTrimCode() ));
			postParameters.add(new BasicNameValuePair("carOptionCode", colorDto.getCarOptionCode() ));
			postParameters.add(new BasicNameValuePair("colorCode", colorDto.getColorCode() ));
            
			
			String response = service.sendPostRequest("db/color/delete" , postParameters);
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API Delete.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * get Option List
	 */
	@Override
	public OptionDto[] getOptionListAPI(OptionDto optionParams) {
		
		try {
			
			ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
			postParameters.add(new BasicNameValuePair("trimCode", optionParams.getTrimCode()));
            postParameters.add(new BasicNameValuePair("carOptionCode", optionParams.getCarOptionCode()));
            
			String response = service.sendPostRequest("db/option/list", postParameters);

			ObjectMapper mapper = new ObjectMapper();
			
			OptionDto results[] = mapper.readValue(response,  OptionDto[].class);
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * get Option Select
	 */
	@Override
	public OptionDto getOptionSelectAPI(OptionDto optionParams) {
		
		try {
			
			ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
			postParameters.add(new BasicNameValuePair("trimCode", optionParams.getTrimCode()));
            postParameters.add(new BasicNameValuePair("carOptionCode", optionParams.getCarOptionCode()));
            postParameters.add(new BasicNameValuePair("optionCode", optionParams.getOptionCode()));
            
			String response = service.sendPostRequest("db/option/select", postParameters);

			ObjectMapper mapper = new ObjectMapper();
			
			OptionDto results = mapper.readValue(response,  OptionDto.class);
            return results;
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}


	/*
	 * 카테고리 삭제
	 */
	@Override
	public String deleteCategory(CategoryDto categoryDto) {

        try {
            
        	ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
        	
            postParameters.add(new BasicNameValuePair("categoryCode", categoryDto.getCategoryCode() ));
        	
            String response = service.sendPostRequest("db/category/delete", postParameters);
            
            LOG.debug("response = '{}'.", response);
        
            return "OK";
            
        } catch (JsonProcessingException e) {
            LOG.error("Error serializing object to JSON.", e);
        } catch (IOException e) {
            LOG.error("Error submitting contract.", e);
        }
        
		return "NO";
	}

	
	/*
	 * 모델 삭제 
	 */
	@Override
	public String deleteModel(ModelDto modelDto) {
		
        try {
            
        	ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
        	
            postParameters.add(new BasicNameValuePair("modelCode", modelDto.getModelCode() ));
            postParameters.add(new BasicNameValuePair("modelYear", modelDto.getModelYear() ));
        	
            String response = service.sendPostRequest("db/model/delete", postParameters);
            
            LOG.debug("response = '{}'.", response);
        
            return "OK";
            
        } catch (JsonProcessingException e) {
            LOG.error("Error serializing object to JSON.", e);
        } catch (IOException e) {
            LOG.error("Error submitting contract.", e);
        }
        
		return "NO";
		
	}

	/**
	 * Save Option
	 */
	@Override
	public String saveOption(OptionDto optionDto) {
		
		
		try {
			ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
			postParameters.add(new BasicNameValuePair("trimCode", optionDto.getTrimCode()));
            postParameters.add(new BasicNameValuePair("carOptionCode", optionDto.getCarOptionCode()));
            postParameters.add(new BasicNameValuePair("optionCode", optionDto.getOptionCode()));
            postParameters.add(new BasicNameValuePair("optionName", optionDto.getOptionName()));
            postParameters.add(new BasicNameValuePair("bestYn", optionDto.getBestYn()));
            postParameters.add(new BasicNameValuePair("optionPrice", String.valueOf(optionDto.getOptionPrice())));
            postParameters.add(new BasicNameValuePair("optionImagePath", optionDto.getOptionImagePath()));
            postParameters.add(new BasicNameValuePair("sortOrder", String.valueOf(optionDto.getSortOrder())));
            postParameters.add(new BasicNameValuePair("useYn", optionDto.getUseYn()));
			
			
			String response = service.sendPostRequest("db/option/save" , postParameters);
//			
            return "success";
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}

	/**
	 * Delete Option
	 */
	@Override
	public String deleteOption(OptionDto optionDto) {
		
		
		try {
			ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
            postParameters.add(new BasicNameValuePair("trimCode", optionDto.getTrimCode() ));
            postParameters.add(new BasicNameValuePair("carOptionCode", optionDto.getCarOptionCode() ));
            postParameters.add(new BasicNameValuePair("optionCode", optionDto.getOptionCode() ));
			
			
			String response = service.sendPostRequest("db/option/delete" , postParameters);
//			
            return "success";
            
		} catch (IOException e) {
			LOG.error("Error parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}

	
	/*
	 * 카테고리 수정
	 */

	@Override
	public String updateCategory(CategoryDto categoryDto) {
		
		return "OK";
		
	}


	@Override
	public TrimDto getSelectTrimAPI(String trimCode) {
		
		try {
			
			String response = service.getRequest("db/trim/select?trimCode=" + trimCode);
			ObjectMapper mapper = new ObjectMapper();
			
			TrimDto results = mapper.readValue(response,  TrimDto.class);
			return results;
			
		}catch (Exception e) {
			e.printStackTrace();
		}

		return null;
	}


	
	/*
	 * 모델 등록
	 */
	@Override
	public String saveModel(ModelDto modelDto) {
		
		LOG.info(modelDto.toString());
		LOG.info(modelDto.getUseYn());
		LOG.info(Integer.toString(modelDto.getSortOrder()));
		
		
		try {
	        	
	            ArrayList<NameValuePair> postParameters = new ArrayList<NameValuePair>();
	            postParameters.add(new BasicNameValuePair("categoryCode", modelDto.getCategoryCode() ));
	            postParameters.add(new BasicNameValuePair("modelCode", modelDto.getModelCode() ));
	            postParameters.add(new BasicNameValuePair("modelYear", modelDto.getModelYear() ));
	            postParameters.add(new BasicNameValuePair("modelName", modelDto.getModelName() ));
	            postParameters.add(new BasicNameValuePair("carImagePath", modelDto.getCarImagePath() ));
	            postParameters.add(new BasicNameValuePair("sortOrder", Integer.toString(modelDto.getSortOrder()) ));
	            postParameters.add(new BasicNameValuePair("useYn", modelDto.getUseYn() ));
	        	
	            String response = service.sendPostRequest("db/model/save", postParameters);
	            
	            LOG.debug("postContract: response = '{}'.", response);
	        
	            return "OK";
            
        } catch (JsonProcessingException e) {
            LOG.error("Error serializing object to JSON.", e);
        } catch (IOException e) {
            LOG.error("Error submitting contract.", e);
        }
    
		return "NO";
	}


	
	
}
