package com.kia25.core.models.buildyourcar;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build004Helper {

	private final static Logger LOG = LoggerFactory.getLogger(Build004Helper.class);
	
	
	@Inject
	private Resource resource;

	

	@PostConstruct
	public void activate() throws  Exception {

		
		LOG.info("helper class 연결");
	}

	
	
	
	
	
}
