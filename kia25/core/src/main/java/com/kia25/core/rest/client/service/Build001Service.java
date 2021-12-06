package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelListDto;

public interface Build001Service {

	//build001컴포넌트에서 사용하는 Service
	//필요시 추후 다른 Service로 통합 예정
	
	//카테고리 리스트를 가져옵니다.
	CategoryListDto getCategoryList();
	
	//모델 리스트를 가져옵니다.
	ModelListDto getModelList();
	
	
}
