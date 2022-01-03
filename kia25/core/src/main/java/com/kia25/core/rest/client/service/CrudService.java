package com.kia25.core.rest.client.service;

import java.util.ArrayList;
import java.util.List;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.ColorDto;
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
	
	/**
	 * build003 / colorlist 불러오기
	 */
	List<ColorDto> getColorAPI(String modelCode, String trimCode, String modelYear);
	
	/**
	 * get Option List
	 * @param trimCode
	 * @return
	 */
	
	OptionDto[] getOptionListAPI(String trimCode);
	/**
	 * Delete Option 
	 * @param optionDto
	 * @return
	 */
	String deleteOption(OptionDto optionDto);

	/*
	 * 카테고리 삭제
	 */
	String deleteCategory(CategoryDto categoryDto);

	/*
	 * 모델 삭제
	 */
	String deleteModel(ModelDto modelDto);

	/*
	 * 카테고리 수정
	 */
	String updateCategory(CategoryDto categoryDto);
}
