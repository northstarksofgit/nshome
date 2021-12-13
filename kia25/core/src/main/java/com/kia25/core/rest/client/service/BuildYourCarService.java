package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.CarGroupListDto;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.OptionListDto;
import com.kia25.core.rest.client.dto.TrimListDto;

public interface BuildYourCarService {

	CategoryListDto getCategoryAPI();

	ModelListDto getModelListAPI();

	CarGroupListDto  getCarGroupListAPI();
	
	TrimListDto getTrimListAPI();
	
	ColorListDto getColorListAPI();
	
	OptionListDto getOptionlListAPI();
}
