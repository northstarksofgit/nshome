package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.option.OptionDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build004_OptionModel {

private final static Logger log = LoggerFactory.getLogger(Build004_OptionModel.class);
	
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();
	@Self
    private SlingHttpServletRequest request;

	private List<OptionDto> optionList;

	@PostConstruct
	public void activate() throws Exception {
//		String modelCode = request.getParameter("modelCode");
//		String trimCode = request.getParameter("trimCode");
		
		
		optionList = buildYourCarService.getOptionlListAPI().getListOfOptions();
		log.info("getOptionList :::: {}", optionList);
	}


	public List<OptionDto> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<OptionDto> optionList) {
		this.optionList = optionList;
	}


}
