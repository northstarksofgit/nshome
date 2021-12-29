package com.kia25.core.rest.client.service;

import java.util.List;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.OptionDto;

public interface CrudService {

	/**
	 * build001 / categorylist 불러오기
	 */
	List<CategoryDto> getCategoryAPI();

	String saveCategory(CategoryDto categoryDto);
	
	/*
	 * build 001 / modelList 불러오기
	 */
	List<ModelDto> getModelListAPI(String categoryCode);
	
	
	OptionDto[] getOptionListAPI(String modelCode, String trimCode, String extColorCode, String intColorCode);
}
