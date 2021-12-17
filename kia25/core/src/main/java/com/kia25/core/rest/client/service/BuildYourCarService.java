package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.AreaListDtoResults;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.dto.CompleteListDtoResults;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.OptionListDtoResults;
import com.kia25.core.rest.client.dto.SummaryDto;

public interface BuildYourCarService {

	/**
	 * build001 / categorylist 불러오기
	 */
	CategoryListDto getCategoryAPI();

	/**
	 * build002 / modellist 불러오기
	 */
	ModelListDto getModelListAPI();

//	/**
//	 * build002 / get carGroup Trim List
//	 */
//	CarGroupListDtoResults  getCarGroupListAPI();
//	
//	/**
//	 * build002 / get transmission Trim List
//	 */
//	CarGroupListDtoResults  getTrasmissionListAPI();
	
	/**
	 * build003 / colorlist 불러오기
	 */
	ColorListDtoResults getColorAPI();
	
	/**
	 * build004 / optionlist 불러오기
	 */
	OptionListDtoResults getOptionlListAPI();
	
	
	/**
	 * build006 / complete-list 불러오기
	 */
	CompleteListDtoResults getCompleteAPI();
	
	/*
	 * navi / summary 불러오기
	 */
	SummaryDto getSummaryAPI(String step);
	
	/**
	 * How-to-Buy / arealist 불러오기
	 */
	AreaListDtoResults getAreaListAPI();
	
}