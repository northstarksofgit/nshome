package com.kia25.core.models;


import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.lucene.search.FieldCache.IntParser;
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
	 * dialog한 데이터
	 */
	private String prePath;
	private String nextPath;
	private String currentStep;
	

	/*
	 * parameter로 넘어온 code
	 */
	private String modelCode;
	private String modelYear;
	private String trimCode;
	private String extColorCode;
	private String intColorCode;
	private String optionCode;
	
	
	@PostConstruct
	public void activate() throws  Exception {
		
		
		/*
		 * url로 넘어온 파라미터
		 */
		modelCode = request.getParameter("modelCode");
		modelYear = request.getParameter("modelYear");
		trimCode = request.getParameter("trimCode");
		extColorCode = request.getParameter("extColorCode");
		intColorCode = request.getParameter("intColorCode");
		optionCode = request.getParameter("option");


		ValueMap valueMap = resource.getValueMap();
		
		/*
		 * dialog한 data
		 */
		prePath = (String) valueMap.getOrDefault("prePath", "/");
		nextPath = (String) valueMap.getOrDefault("nextPath", "/");
		currentStep  = (String) valueMap.getOrDefault("currentStep", "2");
			

		/*
		 * summary정보 API 호출
		 */

		if(Integer.parseInt(currentStep) == 2) {
			
			LOG.info("Summary API call 1");
			summary = service.getSummaryAPI(modelCode, modelYear, trimCode, extColorCode, intColorCode, optionCode);
			
		}else if(Integer.parseInt(currentStep) > 2 && !trimCode.equals("null")) {
			
			LOG.info("Summary API call 2");			
			summary = service.getSummaryAPI(modelCode, modelYear, trimCode, extColorCode, intColorCode, optionCode);
		}
		
		
		
		
	}

	
	
	
	
	
	
	
	
	
	

	public String getModelYear() {
		return modelYear;
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


	public String getNextPath() {
		return nextPath;
	}


	public void setNextPath(String nextPath) {
		this.nextPath = nextPath;
	}

	public String getCurrentStep() {
		return currentStep;
	}


	public void setCurrentStep(String currentStep) {
		this.currentStep = currentStep;
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

	public String getOptionCode() {
		return optionCode;
	}


	
	

}
