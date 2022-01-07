package com.kia25.core.rest.client.service;

import java.util.List;

import com.kia25.core.rest.client.dto.CarGroupDto;
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
	 * build002 / carGroupList 조회
	 */
	List<CarGroupDto> getCarGroupListAPI(String modelCode, String modelYear);
	
	/**
	 * build002 / carGroup 추가
	 */
	String saveCarGroup(CarGroupDto carGroupDto);
	
	/**
	 * build002 / carGroup 삭제
	 */
	String deleteCarGroup(CarGroupDto carGroupDto);
	
	/**
	 * build002 / trimList 조회
	 */
	List<TrimDto> getTrimListAPI(String modelCode, String modelYear);
	
	/**
	 * build002 / trim 추가
	 */
	String saveTrim(TrimDto trimDto);
	
	/**
	 * build002 / trim 삭제
	 */
	String deleteTrim(TrimDto trimDto);
	
	
	
	/**
	 * build003 / colorlist 목록 불러오기
	 */
	  List<ColorDto> listColor(ColorDto colorDto);
	
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
	 * @param OptionDto
	 * @return
	 */
	OptionDto[] getOptionListAPI(OptionDto optionParams);
	
	/**
	 * get Option Select
	 * @param OptionDto
	 * @return
	 */
	OptionDto getOptionSelectAPI(OptionDto optionParams);
	
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
	TrimDto getSelectTrimAPI(String trimCode);
	
	
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
