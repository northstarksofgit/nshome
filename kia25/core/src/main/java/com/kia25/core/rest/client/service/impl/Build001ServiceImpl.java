package com.kia25.core.rest.client.service.impl;

import java.io.IOException;

import org.apache.felix.scr.annotations.Service;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kia25.core.rest.client.dto.categoryModel.CategoryListDto;
import com.kia25.core.rest.client.dto.categoryModel.CategoryListDtoResults;
import com.kia25.core.rest.client.dto.categoryModel.ModelListDto;
import com.kia25.core.rest.client.dto.categoryModel.ModelListDtoResults;
import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.CommonRestApiService;

@Component(immediate = true)
@Service(value = Build001Service.class)
public class Build001ServiceImpl implements Build001Service {
	
	//build001컴포넌트에서 사용하는 ServiceImpl
	//필요시 추후 다른 ServiceImpl로 통합 예정

	
	//실질적으로 요청을 보내고 응답을 받아오는 역할을 수행하는 interface(Impl)
	@OSGiService
	private CommonRestApiService service = new CommonRestApiServiceImpl();
	
	private static final Logger LOG = LoggerFactory.getLogger(Build001ServiceImpl.class);
	
	
	//카테고리 리스트를 가져온다.
	@Override
	public CategoryListDto getCategoryAPI() {
		
		try {
			// http://localhost:3000/category-list로 카테고리 list를 요청해서 받아온다.
			String response = service.getRequest("category-list");
			
			//json data와 DTO를 mapping해준다!
			// 때문에 json data가 DTO의 field와 구조가 동일해야함! 
			ObjectMapper mapper = new ObjectMapper();
			
			//response의 data를 CategoryListDtoResult의 구조에 맞게 mapping해주세요
			CategoryListDtoResults results = mapper.readValue(response, CategoryListDtoResults.class);

			
			//result에서 data필드를 가져와서 return해준다.
			return results.getData();
			
		} catch (IOException e) {

			e.printStackTrace();
		}
		
		
		return null;
	}


	//모델 리스트를 가져옵니다.
	@Override
	public ModelListDto getModelAPI() {
		
		try {
			String response = service.getRequest("model-list");
			
			ObjectMapper mapper = new ObjectMapper();
			
			ModelListDtoResults results = mapper.readValue(response, ModelListDtoResults.class);
			
			LOG.info(results.getResultCode());
			
			return results.getData();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	
	
}
