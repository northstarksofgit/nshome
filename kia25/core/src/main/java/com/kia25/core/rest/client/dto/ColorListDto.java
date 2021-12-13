package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorListDto {
	
	
    private List<ColorDto> colorList;
    private List<ColorDto> exteriorList;

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
    
    
    
    
    
}   
