package com.kia30.core.buildacar;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build001Helper {

	private final static Logger LOG = LoggerFactory.getLogger(Build001Helper.class);
	
	
	@Inject
	private Resource resource;

	
	private String harcodeData = "sample";
	

	@PostConstruct
	public void activate() throws  Exception {

		
		LOG.info("helper class 연결: "+harcodeData);
	}

	
	
	
	//getter 설정
	public String getHarcodeData() {
		return harcodeData;
	}


	
	
	
	
	
	
}
