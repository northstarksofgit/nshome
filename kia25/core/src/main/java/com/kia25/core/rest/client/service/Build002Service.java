package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.TrimModel.CarGroupListDto;
import com.kia25.core.rest.client.dto.TrimModel.ModelListDto;
import com.kia25.core.rest.client.dto.TrimModel.TrimListDto;

public interface Build002Service {

	/**
	 * build002 / modellist 불러오기
	 */
	ModelListDto getModelListAPI();
	
	
	/**
	 * build002 / carGroup list 불러오기
	 */
	CarGroupListDto getCarGroupListAPI();
	
	
	/**
	 * build002 / trimlist 불러오기
	 */
	TrimListDto getTrimListAPI();
	
}
