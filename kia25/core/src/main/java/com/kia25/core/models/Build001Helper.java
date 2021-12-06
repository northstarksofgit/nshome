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
import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.impl.Build001ServiceImpl;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build001Helper {

	private final static Logger LOG = LoggerFactory.getLogger(Build001Helper.class);
	
	@OSGiService
	Build001Service service= new Build001ServiceImpl();
	
	
	//이 helperClass에서 전달해줄 data들...
	private CategoryListDto categoryList;
	
	
	@PostConstruct
	public void activate() throws  Exception {

		categoryList = service.getCategoryList();
		
		LOG.info(categoryList.getCategoryList().toString());
	}


	
	//getter랑 setter...
	
	public CategoryListDto getCategoryList() {
		return categoryList;
	}


	public void setCategoryList(CategoryListDto categoryList) {
		this.categoryList = categoryList;
	}

	
	
	
	
	
}
