package com.kia25.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.OptionDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build004_CRUD {
	
	private final static Logger log = LoggerFactory.getLogger(Build004_CRUD.class);
	CrudService service = new CrudServiceImpl();
	
	@Inject
	private Resource resource;
	
	@Self
    private SlingHttpServletRequest request;
	
	private OptionDto optionList[];
	
	
	@PostConstruct
	public void activate() throws Exception {

		log.info("start Model-Option");
		
		ValueMap valueMap = resource.getValueMap();
		
		try {
			
			/**
			 * get Print Model-Option List 
			 */
			optionList = service.getOptionListAPI(
													null, 
													request.getParameter("trimCode").toUpperCase(), 
													null, 
													null
												);

		
		} catch(Exception e) {
			e.printStackTrace();
		}

		log.info("end Model-Option");
		
	}


	public OptionDto[] getOptionList() {
		return optionList;
	}

	
	
}