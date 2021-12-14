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
	private String pretrimName;

	/* selected Model Code	 */
	private String premodelCode;
	

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

	public String getPretrimName() {
		return pretrimName;
	}

	public void setPretrimName(String pretrimName) {
		this.pretrimName = pretrimName;
	}

	public String getPremodelCode() {
		return premodelCode;
	}

	public void setPremodelCode(String premodelCode) {
		this.premodelCode = premodelCode;
	}
	
	

}
