package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CompleteListDto {

	private String modelName;

	private String carImagePath;

	private String trimName;

	private String trimPrice;
	
	private String Installment;

	private String exteriorColorName;

	private String exteriorColorPrice;

	private String exteriorColorPixel;

	private String interiorColorName;

	private String interiorColorPrice;

	private String interiorColorPixel;

	private String optionName;

	private String optionPrice;

	private String exemptionName;

	private String exemptionPrice;

	private String consignmentName;

	private String consignmentPrice;

	private String totalPriceName;

	private String totalPricePrice;

	private String consumptionTaxName;

	private String consumptionTaxPrice;

	private String orderPrice;

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getCarImagePath() {
		return carImagePath;
	}

	public void setCarImagePath(String carImagePath) {
		this.carImagePath = carImagePath;
	}

	public String getTrimName() {
		return trimName;
	}

	public void setTrimName(String trimName) {
		this.trimName = trimName;
	}

	public String getTrimPrice() {
		return trimPrice;
	}

	public void setTrimPrice(String trimPrice) {
		this.trimPrice = trimPrice;
	}

	public String getExteriorColorName() {
		return exteriorColorName;
	}

	public void setExteriorColorName(String exteriorColorName) {
		this.exteriorColorName = exteriorColorName;
	}

	public String getExteriorColorPrice() {
		return exteriorColorPrice;
	}

	public void setExteriorColorPrice(String exteriorColorPrice) {
		this.exteriorColorPrice = exteriorColorPrice;
	}

	public String getExteriorColorPixel() {
		return exteriorColorPixel;
	}

	public void setExteriorColorPixel(String exteriorColorPixel) {
		this.exteriorColorPixel = exteriorColorPixel;
	}

	public String getInteriorColorName() {
		return interiorColorName;
	}

	public void setInteriorColorName(String interiorColorName) {
		this.interiorColorName = interiorColorName;
	}

	public String getInteriorColorPrice() {
		return interiorColorPrice;
	}

	public void setInteriorColorPrice(String interiorColorPrice) {
		this.interiorColorPrice = interiorColorPrice;
	}

	public String getInteriorColorPixel() {
		return interiorColorPixel;
	}

	public void setInteriorColorPixel(String interiorColorPixel) {
		this.interiorColorPixel = interiorColorPixel;
	}

	public String getOptionName() {
		return optionName;
	}

	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}

	public String getOptionPrice() {
		return optionPrice;
	}

	public void setOptionPrice(String optionPrice) {
		this.optionPrice = optionPrice;
	}

	public String getExemptionName() {
		return exemptionName;
	}

	public void setExemptionName(String exemptionName) {
		this.exemptionName = exemptionName;
	}

	public String getExemptionPrice() {
		return exemptionPrice;
	}

	public void setExemptionPrice(String exemptionPrice) {
		this.exemptionPrice = exemptionPrice;
	}

	public String getConsignmentName() {
		return consignmentName;
	}

	public void setConsignmentName(String consignmentName) {
		this.consignmentName = consignmentName;
	}

	public String getConsignmentPrice() {
		return consignmentPrice;
	}

	public void setConsignmentPrice(String consignmentPrice) {
		this.consignmentPrice = consignmentPrice;
	}

	public String getTotalPriceName() {
		return totalPriceName;
	}

	public void setTotalPriceName(String totalPriceName) {
		this.totalPriceName = totalPriceName;
	}

	public String getTotalPricePrice() {
		return totalPricePrice;
	}

	public void setTotalPricePrice(String totalPricePrice) {
		this.totalPricePrice = totalPricePrice;
	}

	public String getConsumptionTaxName() {
		return consumptionTaxName;
	}

	public void setConsumptionTaxName(String consumptionTaxName) {
		this.consumptionTaxName = consumptionTaxName;
	}

	public String getConsumptionTaxPrice() {
		return consumptionTaxPrice;
	}

	public void setConsumptionTaxPrice(String consumptionTaxPrice) {
		this.consumptionTaxPrice = consumptionTaxPrice;
	}

	public String getorderPrice() {
		return orderPrice;
	}

	public void setorderPrice(String orderPrice) {
		this.orderPrice = orderPrice;
	}

	public String getInstallment() {
		return Installment;
	}

	public void setInstallment(String installment) {
		Installment = installment;
	}


}
