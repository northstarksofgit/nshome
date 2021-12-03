package com.kia25.core.rest.client.dto;

import java.util.List;

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
