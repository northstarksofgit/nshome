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
	
	@PostConstruct
	public void activate() throws  Exception {
		
		List<CategoryDto> result = service.getCategoryAPI();
		
		if(result == null) {
			LOG.info("null");
		}else {
			LOG.info("not null");
			
			for(CategoryDto c: result ) {
				LOG.info(c.getCategoryName());
			}
		}
		
	}

}
