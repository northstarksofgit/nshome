package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.ModelListDtoResults;
import com.kia25.core.rest.client.service.Build002Service;
import com.kia25.core.rest.client.service.CommonRestApiService;

//Build002에서 사용 / modellist 불러오기 용도
public class Build002ServiceImpl implements Build002Service {

	// LOG 확인
	private static final Logger LOG = LoggerFactory.getLogger(BuildYourCarServiceImpl.class);
	
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();

	// 모델 리스트 가져오기 (interface에 선언해둔 메소드 구현)
	@Override
	public ModelListDto getModelList() {
		
		try {
			String response = service.getRequest("/model-list");
			ObjectMapper mapper = new ObjectMapper();
			
			ModelListDtoResults results = mapper.readValue(response, ModelListDtoResults.class);
			return results.getData();
			
		} catch (IOException e) {
			LOG.error("Error Parsing JSON API response.", e);
			e.printStackTrace();
		}
		
		return null;
	}
	

}
