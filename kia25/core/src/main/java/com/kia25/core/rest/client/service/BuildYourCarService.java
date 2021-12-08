package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.option.OptionListDto;

public interface BuildYourCarService {

	CategoryListDto getCategoryAPI();

	ModelListDto getModelListAPI();
	
	OptionListDto getOptionlListAPI();
	
}
