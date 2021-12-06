package com.kia25.core.models;

import java.io.IOException;

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
import com.kia25.core.rest.client.service.BuildYourCarService;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build004Helper {

	private final static Logger log = LoggerFactory.getLogger(Build004Helper.class);
	
	@OSGiService
	BuildYourCarService service;

	/**
	 * 카테고리 리스트
	 */
	private CategoryListDto categoryList;
	
	
    @PostConstruct
	public void activate() throws IOException {
    	categoryList = service.getCategoryList();
    	log.info("categoryList ::: {}", categoryList);
    }


	public CategoryListDto getCategoryList() {
		return categoryList;
	}
	
}
