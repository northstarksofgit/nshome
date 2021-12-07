package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TrimDto {

	//트림 아이디
	private String trimId;
	
	//트림 이름
	private String trimName;
	
	//가격
	private String price;
	
	//색상 리스트
	private ColorListDto color;
	

	public String getTrimId() {
		return trimId;
	}

	public void setTrimId(String trimId) {
		this.trimId = trimId;
	}

	public String getTrimName() {
		return trimName;
	}

	public void setTrimName(String trimName) {
		this.trimName = trimName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public ColorListDto getColor() {
		return color;
	}

	public void setColor(ColorListDto color) {
		this.color = color;
	}
	
	
	
	
	
}
