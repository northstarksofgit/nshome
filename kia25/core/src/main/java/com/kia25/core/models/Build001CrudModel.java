package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CategoryDto;
import com.kia25.core.rest.client.dto.CategoryListDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build001CrudModel {
	
	private final static Logger LOG = LoggerFactory.getLogger(Build001CrudModel.class);
	
	@OSGiService
	CrudService service = new CrudServiceImpl();

	@Self
    private SlingHttpServletRequest request;
	
	
	private List<CategoryDto> categoryList;
	private List<ModelDto> modelList;
 	
	
	@PostConstruct
	public void activate() throws  Exception {
		
		
		/*
		 * 카테고리 리스트 출력
		 */
		categoryList = service.getCategoryAPI();
		
		
		/*
		 * 모델 리스트 출력
		 */
		String categoryCode = request.getParameter("categoryCode");
		
		modelList = (categoryCode != null) ? 
				service.getModelListAPI(categoryCode) : 
				service.getModelListAPI("001");
		
		
	}

	
	
	
	
	
	
	
	
	


	public List<CategoryDto> getCategoryList() {
		return categoryList;
	}


	public List<ModelDto> getModelList() {
		return modelList;
	}
	
	
	
	
	
	
	

}
