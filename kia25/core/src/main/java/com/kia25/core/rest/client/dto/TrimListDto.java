package com.kia25.core.rest.client.dto.TrimModel;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TrimListDto {
	
	/**
	 * build002 컴포넌트 TrimListDto
	 */
	private List<TrimDto> trimList;

	
	/**
	 * getter / setter
	 */
	public List<TrimDto> getTrimList() {
		return trimList;
	}

	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}

}
