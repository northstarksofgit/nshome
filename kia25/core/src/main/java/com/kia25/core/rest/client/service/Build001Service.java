package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.TrimModel.TrimListDto;
import com.kia25.core.rest.client.dto.categoryModel.CategoryListDto;
import com.kia25.core.rest.client.dto.categoryModel.ModelListDto;
import com.kia25.core.rest.client.dto.option.OptionListDto;

public interface Build001Service {

	/*
	 * build001컴포넌트와 navi컴포넌트에서 사용하는 ServiceImpl
	 * 필요시 추후 다른 ServiceImpl로 통합 예정
	 */
	
	//카테고리 리스트를 가져옵니다.
	CategoryListDto getCategoryAPI();
	
	//모델 리스트를 가져옵니다.
	ModelListDto getModelAPI();
	
	//옵션 리스트를 가져옵니다.
	OptionListDto getOptionlListAPI();
	
	//컬러리스트를 가져옵니다.
	ColorListDto getColorListAPI();
	
	//트림 리스트를 가져옵니다.
	TrimListDto getTrimListAPI();
	
	
}
