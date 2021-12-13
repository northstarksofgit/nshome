package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.CarGroupListDto;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.OptionListDtoResults;
import com.kia25.core.rest.client.dto.SummaryDto;
import com.kia25.core.rest.client.dto.TrimListDto;

public interface BuildYourCarService {

	/**
	 * build001 / categorylist 불러오기
	 */
	CategoryListDto getCategoryAPI();

	/**
	 * build002 / modellist 불러오기
	 */
	ModelListDto getModelListAPI();

	/**
	 * build002 / carGrouplist 불러오기
	 */
	CarGroupListDto  getCarGroupListAPI();
	
	/**
	 * build002 / trimlist 불러오기
	 */
	TrimListDto getTrimListAPI();
	
	/**
	 * build003 / colorlist 불러오기
	 */
	ColorListDto getColorListAPI();
	
	/**
	 * build003 / colorlist 불러오기
	 */
	ColorListDto getColorAPI();
	ModelListDto getModelAPI();
	
	/**
	 * build004 / optionlist 불러오기
	 */
	OptionListDtoResults getOptionlListAPI();
	
	/*
	 * navi / summary 불러오기
	 */
	SummaryDto getSummaryAPI(String step);
	
}
