package com.kia25.core.models;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.inject.Inject;

import org.apache.felix.scr.annotations.Reference;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CategoryListModel {

	
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();

	private static final Logger LOG = LoggerFactory.getLogger(CategoryListModel.class);
	
	/**
	 * 카테고리 리스트
	 */
	private List<CategoryDto> categoryList;
	
	private int categoryCount;
	
	
    @PostConstruct
	public void activate() throws IOException {
    	categoryList = buildYourCarService.getCategoryAPI().getCategoryList();
    	LOG.debug("categoryList={}", categoryList.size());
    }


	public List<CategoryDto> getCategoryList() {
		return categoryList;
	}


	public int getCategoryCount() {
		return categoryCount;
	}


	public void setCategoryList(List<CategoryDto> categoryList) {
		this.categoryList = categoryList;
	}


	public void setCategoryCount(int categoryCount) {
		this.categoryCount = categoryCount;
	}

	
}
