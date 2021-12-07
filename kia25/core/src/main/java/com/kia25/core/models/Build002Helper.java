package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.service.Build002Service;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.Build002ServiceImpl;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;
import com.adobe.cq.sightly.WCMUsePojo;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build002Helper {
	
	private final static Logger log = LoggerFactory.getLogger(Build002Helper.class);
	
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();
	
	@Inject
	private Resource resource;
	
	private List<ModelDto> modelList;
	private WCMUsePojo a; 
	
	@PostConstruct
	public void activate() throws Exception{
		modelList = buildYourCarService.getModelListAPI().getModelList();
		log.info("getModelList :::: {}", modelList);
		
		
		String reqParam = (String) a.getSlingScriptHelper().getRequest().getParameter("modelId");
		log.info("getReqParam :::: {}", reqParam);
				
	}
	
	
	// getter, setter 메소드
	public List<ModelDto> getModelList() {
		return modelList;
	}

	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}
	

}