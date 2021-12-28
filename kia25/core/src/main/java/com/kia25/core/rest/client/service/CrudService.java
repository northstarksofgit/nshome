package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelListDto;

public interface CrudService {

	/**
	 * build001 / categorylist 불러오기
	 */
	CategoryListDto getCategoryAPI();
	
	/*
	 * build 001 / modelList 불러오기
	 */
	ModelListDto getModelListAPI();
	
}
