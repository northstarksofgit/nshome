package com.kia25.core.models;

import java.util.List;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.Build001ServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build001Helper {

	private final static Logger LOG = LoggerFactory.getLogger(Build001Helper.class);
	
	@OSGiService
	Build001Service service = new Build001ServiceImpl();
	
	
	//이 helperClass에서 전달해줄 data들...
	private CategoryListDto categoryList;
	private ModelListDto modelList;
	
	
	@PostConstruct
	public void activate() throws  Exception {

		
		
		//카테고리 리스트를 가져옵니다.
		categoryList = service.getCategoryList();
		
		
		//모델 리스트를 가져옵니다.
		modelList = service.getModelList();
		
		
		
		if(modelList == null) {
			LOG.info("model list is null");
		}
		
		if(modelList != null) {
			LOG.info("model list is not null");
		}
		
		
		/*
		List<ModelDto> result = modelList.getModelDto();
		
		
		if(result == null) {
			LOG.info("result is null");
		}
		
		if(result != null) {
			LOG.info("result is not null");
		}
		*/
		

		
		
		
		
	}


	
	//getter랑 setter...
	
	public CategoryListDto getCategoryList() {
		return categoryList;
	}


	public void setCategoryList(CategoryListDto categoryList) {
		this.categoryList = categoryList;
	}

	
	
	
	
	
}
