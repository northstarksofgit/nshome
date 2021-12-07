package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.service.Build002Service;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.Build002ServiceImpl;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build002Helper {
	
	private final static Logger log = LoggerFactory.getLogger(Build002Helper.class);

	@OSGiService
	Build002Service service = new Build002ServiceImpl();
	
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();
	
	// 카테고리 리스트
	private CategoryListDto categoryList;
	
	private List<ModelDto> modelList;
	
	@PostConstruct
	public void activate() throws Exception{
		modelList = buildYourCarService.getModelListAPI().getModelList();
		log.info("getModelList :::: {}", modelList);
		
	}
	
	
	// getter, setter 메소드
	public CategoryListDto getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(CategoryListDto categoryList) {
		this.categoryList = categoryList;
	}


	public List<ModelDto> getModelList() {
		return modelList;
	}


	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}
	

}