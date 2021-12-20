package com.kia25.core.models;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CompleteListDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build006Helper {

	private static final Logger log = LoggerFactory.getLogger(Build006Helper.class);

	@OSGiService
	BuildYourCarService service = new BuildYourCarServiceImpl();

	@Self
	private SlingHttpServletRequest request;

	private CompleteListDto completeData;
	
	private String getModelCode = null;
	private String getTrimCode = null;
	private String getExtCode = null;
	private String getIntCode = null;
	private String getOptionCode = null;
 

	@PostConstruct
	public void activate() throws IOException {
		
		getModelCode = request.getParameter("modelCode").toUpperCase();
		getTrimCode = request.getParameter("trimCode");
		getExtCode = request.getParameter("ext");
		getIntCode = request.getParameter("int");
		getOptionCode = request.getParameter("option");

		completeData = service.getCompleteAPI(getModelCode, getTrimCode, getExtCode, getIntCode, getOptionCode).getData();
	}

	public CompleteListDto getCompleteData() {
		return completeData;
	}

}
