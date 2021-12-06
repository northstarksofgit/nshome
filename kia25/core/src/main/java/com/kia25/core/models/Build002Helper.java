package com.kia25.core.models;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.service.Build002Service;
import com.kia25.core.rest.client.service.impl.Build002ServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, 
		defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
		)
public class Build002Helper {
	
	private final static Logger LOG = LoggerFactory.getLogger(Build002Helper.class);

	@OSGiService
	Build002Service service = new Build002ServiceImpl();
	
	// 카테고리 리스트
	private CategoryListDto categoryList;
	private ModelListDto modelList;
	
	@PostConstruct
	public void activate() throws Exception{
		
		modelList = service.getModelList();
		
	}
	
	
	// getter, setter 메소드
	public CategoryListDto getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(CategoryListDto categoryList) {
		this.categoryList = categoryList;
	}

	public ModelListDto getModelList() {
		return modelList;
	}

	public void setModelList(ModelListDto modelList) {
		this.modelList = modelList;
	}
	

}