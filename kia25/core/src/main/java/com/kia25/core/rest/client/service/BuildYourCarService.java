package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.dto.TrimModel.TrimListDto;
import com.kia25.core.rest.client.dto.option.OptionListDto;

public interface BuildYourCarService {

	CategoryListDto getCategoryAPI();

	ModelListDto getModelListAPI();

	TrimListDto getTrimListAPI();
	
	ColorListDto getColorListAPI();
	
	OptionListDto getOptionlListAPI();
}
