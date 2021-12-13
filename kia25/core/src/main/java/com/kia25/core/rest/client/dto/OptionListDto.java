package com.kia25.core.rest.client.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OptionListDto {
	
	
	/**
	 * selected Model Name
	 */
	private String modelName;
	
	
	/**
	 * selected Model Code
	 */
	private String modelCode;
	
	
	/**
	 * selected Trim Code
	 */
	private String trimCode;
	
	
	/**
	 * selected Trim Code
	 */
	private String trimName;
	
	
	/**
	 * selected Model Image
	 */
	private String carImagePath;	

	
	/**
	 * selected Exterior Color Name
	 */
	private String extColorName;
	
	
	/**
	 * selected Exterior Color Code
	 */
	private String extColorCode;
    
    
	/**
	 * selected Interior Color Name
	 */
    private String intColorName;
        
    
    /**
	 * selected Interior Color Name
	 */
    private String intColorCode;
    
    
	/**
	 * list-of-option
	 */
	private List<OptionDto> listOfOptions;

	
	
	
	
	public String getModelName() {
		return modelName;
	}
	

	public void setModelName(String modelName) {
		this.modelName = modelName;
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


	public String getModelCode() {
		return modelCode;
	}

	
	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}
	

	public String getCarImagePath() {
		return carImagePath;
	}

	public void setCarImagePath(String carImagePath) {
		this.carImagePath = carImagePath;
	}
	

	public String getExtColorName() {
		return extColorName;
	}
	

	public void setExtColorName(String extColorName) {
		this.extColorName = extColorName;
	}

	
	public String getExtColorCode() {
		return extColorCode;
	}

	public void setExtColorCode(String extColorCode) {
		this.extColorCode = extColorCode;
	}
	

	public String getIntColorName() {
		return intColorName;
	}

	
	public void setIntColorName(String intColorName) {
		this.intColorName = intColorName;
	}

	
	public String getIntColorCode() {
		return intColorCode;
	}

	
	public void setIntColorCode(String intColorCode) {
		this.intColorCode = intColorCode;
	}

	
	public List<OptionDto> getListOfOptions() {
		return listOfOptions;
	}

	
	public void setListOfOptions(List<OptionDto> listOfOptions) {
		this.listOfOptions = listOfOptions;
	}
	
	
}
