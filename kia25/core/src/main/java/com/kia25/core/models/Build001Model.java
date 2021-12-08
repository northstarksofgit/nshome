package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.categoryModel.CategoryDto;
import com.kia25.core.rest.client.dto.categoryModel.ModelDto;
import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.impl.Build001ServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build001Model {

	private final static Logger LOG = LoggerFactory.getLogger(Build001Model.class);
	
	
	
	
	@OSGiService
	Build001Service service = new Build001ServiceImpl();
	
	/*
	 * 차량 카테고리 리스트
	 */
	private List<CategoryDto> categoryList;
	
	
	/*
	 * 차량 모델 리스트 
	 */
	private List<ModelDto> modelList;
	
	
	@PostConstruct
	public void activate() throws  Exception {

		
		
		//카테고리 리스트를 가져옵니다.
		categoryList = service.getCategoryAPI().getCategoryList();
		
		
		//모델 리스트를 가져옵니다.
		modelList = service.getModelAPI().getModelList();
		
		
	}


	public List<CategoryDto> getCategoryList() {
		return categoryList;
	}


	public void setCategoryList(List<CategoryDto> categoryList) {
		this.categoryList = categoryList;
	}


	public List<ModelDto> getModelList() {
		return modelList;
	}


	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}


	
	
	
	
	

	
	
	
}
