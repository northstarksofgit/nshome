package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorDto {

	//색상 코드
	private String colorCode;
	
	//컬러명
	private String colorName;
	
	//컬러별 이미지
	private String colorImgPath;
	
	//컬러 위치(익스테리어/인테리어)
	private String position;

	
	
	
	
	public String getColorCode() {
		return colorCode;
	}

	public void setColorCode(String colorCode) {
		this.colorCode = colorCode;
	}

	public String getColorName() {
		return colorName;
	}

	public void setColorName(String colorName) {
		this.colorName = colorName;
	}

	public String getColorImgPath() {
		return colorImgPath;
	}

	public void setColorImgPath(String colorImgPath) {
		this.colorImgPath = colorImgPath;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}
	
	
	
	
	
	
	
	
	
	
}
