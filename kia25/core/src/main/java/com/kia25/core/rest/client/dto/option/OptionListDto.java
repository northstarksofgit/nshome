package com.kia25.core.rest.client.dto.option;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OptionListDto {

	List<OptionDto> listOfOptions;

	public List<OptionDto> getOptionList() {
		return listOfOptions;
	}

	public void setOptionList(List<OptionDto> listOfOptions) {
		this.listOfOptions = listOfOptions;
	}
}
