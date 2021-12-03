package com.kia30.core.models.buildyourcar;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;

import com.kia30.core.rest.client.dto.CategoryListDto;
import com.kia30.core.rest.client.service.BuildYourCarService;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CategoryListModel {

	@OSGiService
	BuildYourCarService service;

	/**
	 * 카테고리 리스트
	 */
	private CategoryListDto categoryList;
	
	
    @PostConstruct
	public void activate() throws IOException {
    	
    	categoryList = service.getCategoryList();
    	
    }


	public CategoryListDto getCategoryList() {
		return categoryList;
	}
    
	
}
