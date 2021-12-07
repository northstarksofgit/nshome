package com.kia25.core.rest.client.service;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelListDto;

public interface BuildYourCarService {

	CategoryListDto getCategoryAPI();

	ModelListDto getModelListAPI();
	
}
