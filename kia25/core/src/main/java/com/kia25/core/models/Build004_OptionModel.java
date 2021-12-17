package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.OptionDto;
import com.kia25.core.rest.client.dto.OptionListDto;
import com.kia25.core.rest.client.dto.OptionListDtoResults;
import com.kia25.core.rest.client.dto.TrimDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build004_OptionModel {
	
	private final static Logger log = LoggerFactory.getLogger(Build004_OptionModel.class);
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();
	
	
	@Self
    private SlingHttpServletRequest request;
	
	private List<OptionDto> optionList;
	private OptionListDto optionData;
	private OptionListDtoResults optionResults;

	private String modelCode = null;
	private String trimCode = null;
	private String extColorCode = null;
	private String intColorCode = null;
	
	
	
	@PostConstruct
	public void activate() throws Exception {
		try {
			modelCode = request.getParameter("car").toUpperCase();
			trimCode = request.getParameter("trimCode");
			extColorCode = request.getParameter("ext");
			intColorCode = request.getParameter("int");
		} catch(Exception e) {
			
		}
		
		/**
		 * get Print Model-Option List 
		 */
//		optionList = buildYourCarService.getOptionlListAPI().getListOfOptions();
		optionResults = buildYourCarService.getOptionlListAPI(modelCode, trimCode, extColorCode, intColorCode);
		
		optionData = optionResults.getData();
		optionList = optionData.getListOfOptions();
	}


	public List<OptionDto> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<OptionDto> optionList) {
		this.optionList = optionList;
	}

	public String getModelCode() {
		return modelCode;
	}

	public String getTrimCode() {
		return trimCode;
	}

	public String getExtColorCode() {
		return extColorCode;
	}

	public String getIntColorCode() {
		return intColorCode;
	}

	public OptionListDto getOptionData() {
		return optionData;
	}

	public OptionListDtoResults getOptionResults() {
		return optionResults;
	}

	
	
}
