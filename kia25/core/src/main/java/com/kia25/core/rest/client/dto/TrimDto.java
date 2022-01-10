package com.kia25.core.rest.client.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TrimDto {

	
	/**
	 * carGroup 코드
	 */
	private String carGroupCode;

	
	/**
	 * 변속기 코드
	 */
	private String transmissionCode;
	
	
	/**
	 * 트림코드
	 */
	private String trimCode;
	
	
	/**
	 * 트림명
	 */
	private String trimName;
	
	
	/**
	 * 상품번호
	 */
	private String productCode;
	
	
	/**
	 * 추천판매가격
	 */
	private int sellingPrice;
	
	
	/**
	 * 추천(베스트)여부
	 */
	private String bestYn;
	

	/**
	 * 변속기 이름
	 */
	private String gearboxName;
	

	/**
	 * 복합연비
	 */
	private String compoundFuelEconomy;
	
	
	/**
	 * 바디타입 이름
	 */
	private String bodyTypeName;
	
	
	/**
	 * 엔진용량 이름
	 */
	private String engineCapacityName;

	
	/**
	 * 정렬 순서
	 */
	private int sortOrder;
	
	
	/**
	 * 사용 유무
	 */
	private String useYn; 



	/**
	 * getter / setter
	 */
	
	public String getCarGroupCode() {
		return carGroupCode;
	}


	public void setCarGroupCode(String carGroupCode) {
		this.carGroupCode = carGroupCode;
	}

	public String getTransmissionCode() {
		return transmissionCode;
	}

	public void setTransmissionCode(String transmissionCode) {
		this.transmissionCode = transmissionCode;
	}

	public String getTrimCode() {
		return trimCode;
	}

	public void setTrimCode(String trimCode) {
		this.trimCode = trimCode;
	}

	public String getTrimName() {
		return trimName;
	}

	public void setTrimName(String trimName) {
		this.trimName = trimName;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public int getSellingPrice() {
		return sellingPrice;
	}

	public void setSellingPrice(int sellingPrice) {
		this.sellingPrice = sellingPrice;
	}

	public String getBestYn() {
		return bestYn;
	}

	public void setBestYn(String bestYn) {
		this.bestYn = bestYn;
	}
	
	public String getGearboxName() {
		return gearboxName;
	}

	public void setGearboxName(String gearboxName) {
		this.gearboxName = gearboxName;
	}

	public String getCompoundFuelEconomy() {
		return compoundFuelEconomy;
	}

	public void setCompoundFuelEconomy(String compoundFuelEconomy) {
		this.compoundFuelEconomy = compoundFuelEconomy;
	}

	public String getBodyTypeName() {
		return bodyTypeName;
	}

	public void setBodyTypeName(String bodyTypeName) {
		this.bodyTypeName = bodyTypeName;
	}

	public String getEngineCapacityName() {
		return engineCapacityName;
	}

	public void setEngineCapacityName(String engineCapacityName) {
		this.engineCapacityName = engineCapacityName;
	}
	
	public int getSortOrder() {
		return sortOrder;
	}

	public void setSortOrder(int sortOrder) {
		this.sortOrder = sortOrder;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}


}
