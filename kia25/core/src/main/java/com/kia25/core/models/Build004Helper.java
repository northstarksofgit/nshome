package com.kia25.core.models;

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
import com.kia25.core.rest.client.service.Build004Service;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.Build004ServiceImpl;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build004Helper {

private final static Logger log = LoggerFactory.getLogger(Build004Helper.class);
	
	@OSGiService
	Build004Service service= new Build004ServiceImpl();
//	BuildYourCarService service;	

	@Inject
	private Resource resource;

	private CategoryListDto categoryList;

	@PostConstruct
	public void activate() throws Exception {
		categoryList = service.getCategoryList();
	
	}
	
	public CategoryListDto getCategoryList() {
		return categoryList;
	}

}
