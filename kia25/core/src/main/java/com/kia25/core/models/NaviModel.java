package com.kia25.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.OptionDto;
import com.kia25.core.rest.client.dto.SummaryDto;
import com.kia25.core.rest.client.dto.TrimDto;

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
	 * 이동할 step
	 */
	private String step;
	
	/*
	 * 이동할 url
	 */
	private String nextUrl;
	
	/*
	 * 이전 url
	 */
	private String preUrl;
	
	
	/*
	 * trim code 사용 여부 
	 */
	private String trimCheck;
	
	/*
	 * color code 사용 여부
	 */
	private String colorCheck;
	
	/*
	 * option code 사용 여부
	 */
	private String optionCheck;
	
	
	/*
	 * parameter로 넘어온 code
	 */
	String modelCode;
	String trimCode;
	String ext;
	String intCode;
	String option;
	
	
	@PostConstruct
	public void activate() throws  Exception {
		
		

		modelCode = request.getParameter("modelCode");
		trimCode = request.getParameter("modelCode");
		ext = request.getParameter("ext");
		intCode = request.getParameter("intCode");
		option = request.getParameter("option");
		
		
		ValueMap valueMap = resource.getValueMap();
		
		
		step = (String) valueMap.getOrDefault("step", "2");
		nextUrl = (String) valueMap.getOrDefault("toGo", null);
		preUrl = (String) valueMap.getOrDefault("prePath", null);
		trimCheck = (String) valueMap.getOrDefault("trim", null);
		colorCheck = (String) valueMap.getOrDefault("color", null);
		optionCheck = (String) valueMap.getOrDefault("option", null);
		
		
		
		LOG.info("step: "+step);		
		
		

		/*
		 * summary정보 호출
		 */
		
		summary = service.getSummaryAPI(step);
		
		
		
	}

	
	
	
	
	
	
	
	
	
	

	public SummaryDto getSummary() {
		return summary;
	}


	public void setSummary(SummaryDto summary) {
		this.summary = summary;
	}


	public String getStep() {
		return step;
	}


	public void setStep(String step) {
		this.step = step;
	}



	public String getTrimCheck() {
		return trimCheck;
	}


	public void setTrimCheck(String trimCheck) {
		this.trimCheck = trimCheck;
	}


	public String getColorCheck() {
		return colorCheck;
	}


	public void setColorCheck(String colorCheck) {
		this.colorCheck = colorCheck;
	}


	public String getOptionCheck() {
		return optionCheck;
	}


	public void setOptionCheck(String optionCheck) {
		this.optionCheck = optionCheck;
	}


	public String getNextUrl() {
		return nextUrl;
	}


	public void setNextUrl(String nextUrl) {
		this.nextUrl = nextUrl;
	}


	public String getPreUrl() {
		return preUrl;
	}


	public void setPreUrl(String preUrl) {
		this.preUrl = preUrl;
	}
	
	

	
	
	

}
