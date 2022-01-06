package com.kia25.core.models;

import java.util.Comparator;
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
		
		categoryList.sort(new Comparator<CategoryDto>() {
			
            @Override
            public int compare(CategoryDto arg0, CategoryDto arg1) {
                   
                   int age0 = arg0.getSortOrder();
                   int age1 = arg1.getSortOrder();
                   
                   if (age0 == age1)
                         return 0;
                   else if (age0 > age1 )
                         return 1;
                   else
                         return -1;
            }
        });
		
		
		
		
		
		
		/*
		 * 모델 리스트 출력
		 */
		String categoryCode = request.getParameter("cateSort");
		
		modelList = (categoryCode != null) ? 
				service.getModelListAPI(categoryCode) : 
				service.getModelListAPI("001");
		
		
		modelList.sort(new Comparator<ModelDto>() {
			
            @Override
            public int compare(ModelDto arg0, ModelDto arg1) {
                   
                   int age0 = arg0.getSortOrder();
                   int age1 = arg1.getSortOrder();
                   
                   if (age0 == age1)
                         return 0;
                   else if (age0 > age1)
                         return 1;
                   else
                         return -1;
            }
       });


		
		
		LOG.info("build 001 CRUD model");
		
	}

	
	
	
	
	
	
	
	
	


	public List<CategoryDto> getCategoryList() {
		return categoryList;
	}


	public List<ModelDto> getModelList() {
		return modelList;
	}
	
	
	
	
	
	
	

}
