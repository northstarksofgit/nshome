package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ColorListDto {

	private List<ColorDto> interiorList;
	private List<ColorDto> exteriorList;

	private String trimName;

	private String modelCode;

	public List<ColorDto> getInteriorList() {
		return interiorList;
	}

	public List<ColorDto> getExteriorList() {
		return exteriorList;
	}

	public void setInteriorList(List<ColorDto> interiorList) {
		this.interiorList = interiorList;
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
