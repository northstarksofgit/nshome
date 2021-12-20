package com.kia25.core.models;


import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.SummaryDto;


import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NaviModel {
	
	private final static Logger LOG = LoggerFactory.getLogger(NaviModel.class);
	
	@OSGiService
	BuildYourCarService service = new BuildYourCarServiceImpl();
	
	/*
	 * get 방식으로 넘어온 parameter를 처리하기 위함
	 */
	@Self
    private SlingHttpServletRequest request;
	
	
	/*
	 * node에 저장된 data를 가져온다
	 */
	@Inject
	private Resource resource;
	
	
	/*
	 * summary 데이터
	 */
	private SummaryDto summary;
	
	
	/*
	 * dilog한 데이터
	 */
	private String prePath;
	private String preStep;
	private String toGoPath;
	private String toGoStep;
	

	/*
	 * parameter로 넘어온 code
	 */
	String modelCode;
	String trimCode;
	String extCode;
	String intCode;
	String optionCode;
	
	
	@PostConstruct
	public void activate() throws  Exception {
		
		

		modelCode = request.getParameter("modelCode");
		trimCode = request.getParameter("modelCode");
		extCode = request.getParameter("ext");
		intCode = request.getParameter("intCode");
		optionCode = request.getParameter("option");
		
		
		ValueMap valueMap = resource.getValueMap();
		
		prePath = (String) valueMap.getOrDefault("prePath", "/");
		preStep = (String) valueMap.getOrDefault("preStep", "1");
		toGoPath = (String) valueMap.getOrDefault("toGoPath", "/");
		toGoStep  = (String) valueMap.getOrDefault("toGoStep", "1");
		
		LOG.info("toGoStep: "+toGoStep);		
		

		/*
		 * summary정보 호출
		 */
		
		summary = service.getSummaryAPI(toGoStep, modelCode, trimCode, extCode, intCode, optionCode);
		
		
		
	}

	
	
	
	
	
	
	
	
	
	

	public SummaryDto getSummary() {
		return summary;
	}


	public void setSummary(SummaryDto summary) {
		this.summary = summary;
	}


	public String getPrePath() {
		return prePath;
	}


	public void setPrePath(String prePath) {
		this.prePath = prePath;
	}


	public String getPreStep() {
		return preStep;
	}


	public void setPreStep(String preStep) {
		this.preStep = preStep;
	}

	public String getToGoPath() {
		return toGoPath;
	}

	public void setToGoPath(String toGoPath) {
		this.toGoPath = toGoPath;
	}

	public String getToGoStep() {
		return toGoStep;
	}

	public void setToGoStep(String toGoStep) {
		this.toGoStep = toGoStep;
	}



	
	
	

}
