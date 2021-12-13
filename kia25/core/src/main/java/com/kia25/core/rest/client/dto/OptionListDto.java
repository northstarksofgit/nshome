package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OptionListDto {

	/**
	 * 옵션리스트
	 */
	
	private List<OptionDto> listOfOptions;

	public List<OptionDto> getListOfOptions() {
		return listOfOptions;
	}

	public void setListOfOptions(List<OptionDto> listOfOptions) {
		this.listOfOptions = listOfOptions;
	}
	
	
}
