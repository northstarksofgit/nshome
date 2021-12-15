package com.kia25.core.rest.client.dto;

import java.util.List;

public class AreaSiSubListDto {

	private String siCode;
	private String siName;
	private List<AreaSiSubDto> siSub;
	
	
	
	
	public String getSiCode() {
		return siCode;
	}
	public void setSiCode(String siCode) {
		this.siCode = siCode;
	}
	public String getSiName() {
		return siName;
	}
	public void setSiName(String siName) {
		this.siName = siName;
	}
	public List<AreaSiSubDto> getSiSub() {
		return siSub;
	}
	public void setSiSub(List<AreaSiSubDto> siSub) {
		this.siSub = siSub;
	}
	
	
}
