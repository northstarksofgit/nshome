package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorListDto {
	
	
    private List<ColorDto> colorList;

	public List<ColorDto> getColorList() {
		return colorList;
	}

	public void setColorList(List<ColorDto> colorList) {
		this.colorList = colorList;
	}
    
    
    
    
    
}   
