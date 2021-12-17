package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TransmissionDto {

	/**
	 * 변속기 코드
	 */
	private String transmissionCode;
	
	/**
	 * 변속기 명
	 */
	private String transmissionName;
	
	
	/**
	 * getter / setter
	 */
	public String getTransmissionCode() {
		return transmissionCode;
	}

	public void setTransmissionCode(String transmissionCode) {
		this.transmissionCode = transmissionCode;
	}

	public String getTransmissionName() {
		return transmissionName;
	}

	public void setTransmissionName(String transmissionName) {
		this.transmissionName = transmissionName;
	}

	
}
