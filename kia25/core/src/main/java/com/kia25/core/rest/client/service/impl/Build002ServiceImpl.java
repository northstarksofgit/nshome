package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.TrimModel.ModelListDto;
import com.kia25.core.rest.client.dto.TrimModel.ModelListDtoResult;
import com.kia25.core.rest.client.dto.TrimModel.TrimListDto;
import com.kia25.core.rest.client.dto.TrimModel.TrimListDtoResult;
import com.kia25.core.rest.client.service.Build002Service;
import com.kia25.core.rest.client.service.CommonRestApiService;

//Build002에서 사용 / modellist 불러오기 용도
public class Build002ServiceImpl implements Build002Service {

	// LOG 확인
	private static final Logger LOG = LoggerFactory.getLogger(Build002ServiceImpl.class);
	
	// 요청을 보내서 json 데이터를 가져오기 위해서 interface 객체 선언
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();

	
	/**
	 * model list 가져오기
	 */
	@Override
	public ModelListDto getModelListAPI() {
		
		try {
			String response = service.getRequest("model-list");
			ObjectMapper mapper = new ObjectMapper();
			
			ModelListDtoResult results = mapper.readValue(response, ModelListDtoResult.class);
			return results.getModelData();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}

	
	/**
	 * trim list 가져오기
	 */
	@Override
	public TrimListDto getTrimListAPI() {

		try {
			String response = service.getRequest("trim-list");
			ObjectMapper mapper = new ObjectMapper();
			
			TrimListDtoResult results = mapper.readValue(response, TrimListDtoResult.class);
			return results.getTrimData();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	

}
