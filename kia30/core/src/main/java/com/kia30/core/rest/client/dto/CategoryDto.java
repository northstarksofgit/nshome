package com.kia30.core.rest.client.dto;

public class CategoryDto {
	
	/**
	 * 전시카테고리코드
	 */
	private String categoryCode;
	/**
	 * 카테고리명
	 */
	private String categoryName;
	
	public String getCategoryCode() {
		return categoryCode;
	}
	
	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}
	
	public String getCategoryName() {
		return categoryName;
	}
	
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	
	
}
