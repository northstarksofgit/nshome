package com.kia25.core.rest.client.service;

import java.util.ArrayList;
import java.util.List;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.OptionDto;
import com.kia25.core.rest.client.dto.TrimDto;

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
	 * build003 / colorlist 목록 불러오기
	 */
	List<ColorDto> getColorListAPI(String modelCode, String trimCode, String carOptionCode, String modelYear);
	
	/**
	 * build003 / colorlist 입력 저장
	 */
	String saveColor(ColorDto colorDto);
	
	
	/**
	 * build003 / colorlist 삭제
	 */
	String deleteColor(ColorDto colorDto);
	
	/**
	 * get Option List
	 * @param trimCode
	 * @return
	 */
	OptionDto[] getOptionListAPI(OptionDto optionParams);
	
	/**
	 * Save Option
	 * @param optionDto
	 * @return
	 */
	String saveOption(OptionDto optionDto);
	
	/**
	 * Delete Option 
	 * @param optionDto
	 * @return
	 */
	String deleteOption(OptionDto optionDto);
	
	/**
	 * get Trim Data
	 * @param trimCode
	 * @return
	 */
	TrimDto getSelectTrimAPT(String trimCode);
	
	
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

	/*
	 * 모델 등록
	 */
	String saveModel(ModelDto modelDto);

}
