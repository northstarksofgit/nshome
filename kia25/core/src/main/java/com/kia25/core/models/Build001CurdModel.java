package com.kia25.core.models;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build001CurdModel {
	
	private final static Logger LOG = LoggerFactory.getLogger(Build001CurdModel.class);
	
	@OSGiService
	BuildYourCarService service = new BuildYourCarServiceImpl();

	@Self
    private SlingHttpServletRequest request;
	
	@PostConstruct
	public void activate() throws  Exception {
		
		
	}

}
