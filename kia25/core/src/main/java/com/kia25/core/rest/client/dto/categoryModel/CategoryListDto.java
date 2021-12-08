package com.kia25.core.rest.client.dto.categoryModel;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoryListDto {
	
 	/**
	 * 카테고리 리스트
	 */
	private List<CategoryDto> categoryList;
	
	public List<CategoryDto> getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(List<CategoryDto> categoryList) {
		this.categoryList = categoryList;
	}
	
}
