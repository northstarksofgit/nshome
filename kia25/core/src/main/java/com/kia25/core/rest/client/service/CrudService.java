package com.kia25.core.rest.client.service;

import java.util.List;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.OptionDto;

public interface CrudService {

	/**
	 * build001 / categorylist 불러오기
	 */
	List<CategoryDto> getCategoryAPI();
	
	/*
	 * build 001 / modelList 불러오기
	 */
	ModelListDto getModelListAPI();
	
	
	OptionDto[] getOptionListAPI(String modelCode, String trimCode, String extColorCode, String intColorCode);
}
