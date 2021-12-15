package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorListDto {
	
	/**
	 * selected Trim Code
	 */
	
	private List<ColorDto> colorList;
	private List<ColorDto> exteriorList;
	
	/* selected Trim Code */
	private String trimName;

	/* selected Model Code	 */
	private String modelCode;
	

	public List<ColorDto> getColorList() {
		return colorList;
	}

	public List<ColorDto> getExteriorList() {
		return exteriorList;
	}
	
	public void setColorList(List<ColorDto> colorList) {
		this.colorList = colorList;
	}

	public void setExteriorList(List<ColorDto> exteriorList) {
		this.exteriorList = exteriorList;
	}

	public String getTrimName() {
		return trimName;
	}

	public void setTrimName(String trimName) {
		this.trimName = trimName;
	}

	public String getModelCode() {
		return modelCode;
	}

	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}
	
		

}
