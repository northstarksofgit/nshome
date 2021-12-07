package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUsePojo;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build002Helper {
	
	private final static Logger log = LoggerFactory.getLogger(Build002Helper.class);
	
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();
	
	@Self
    private SlingHttpServletRequest request;
	
	
	@Inject
	private Resource resource;
	
	@Inject
	private SlingScriptHelper slingScriptHelper;
	
	private List<ModelDto> modelList;
	
	// SlingModel 로 진행하기 때문에 WCMUsePojo를 extends 하는 대신 import 하고 선언해줌
	private WCMUsePojo a; 
	 
	@PostConstruct
	public void activate() throws Exception{
		
		modelList = buildYourCarService.getModelListAPI().getModelList();
		//log.info("getModelList :::: {}", modelList);
		
		String modelid = request.getParameter("modelid");
		//reqParam = (String) slingScriptHelper.getRequest().getParameter("modelid");
		
		log.info("getModelId :::: {}", modelid);
				
	}
	
	
	// getter, setter 메소드
	public List<ModelDto> getModelList() {
		return modelList;
	}

	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}
	

}