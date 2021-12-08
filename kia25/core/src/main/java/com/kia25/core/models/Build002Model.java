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
public class Build002Model {
	
	private final static Logger log = LoggerFactory.getLogger(Build002Model.class);
	
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();
	
	// 파라미터 값을 받아오기 위해 선언
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
		
		// 파라미터 값 받아오는건 SlingScriptHelper 사용해서 넘겨도 가능함! 
		// 단, URL에서 editor.html 부분만 삭제해주면 
		// String modelid = (String) slingScriptHelper.getRequest().getParameter("modelid");
		
		log.info("getModelList :::: {}", modelList);
				
	}
	
	// getter, setter 메소드
	public List<ModelDto> getModelList() {
		return modelList;
	}

	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}
	

}