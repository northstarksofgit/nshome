package com.kia25.core.models;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.impl.Build001ServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NaviModel {
	
	private final static Logger LOG = LoggerFactory.getLogger(NaviModel.class);
	
	/*
	@OSGiService
	Build001Service service = new Build001ServiceImpl();
	*/
	
	@PostConstruct
	public void activate() throws  Exception {
		
		LOG.info("navi helper connect");
		
	}

}
