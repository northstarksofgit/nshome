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

import com.adobe.cq.wcm.core.components.models.List;
import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003CrudModel {
	
	private final static Logger log = LoggerFactory.getLogger(Build003CrudModel.class);
	CrudService service = new CrudServiceImpl();
	
	@Inject
	private Resource resource;
	
	@Self
    private SlingHttpServletRequest request;
	
	private java.util.List<ColorDto> colorList;
	
	
	@PostConstruct
	public void activate() throws Exception {

		ValueMap valueMap = resource.getValueMap();
		
		try {
			
			String modelCode = request.getParameter("modelCode");
			String trimCode = request.getParameter("trimCode");
			String modelYear = request.getParameter("modelYear");
			
			colorList = service.getColorAPI(modelCode, trimCode, modelYear);
					

		
		} catch(Exception e) {
			e.printStackTrace();
		}

		log.info("end Model-Option");
		
	}


	public OptionDto[] getOptionList() {
		return optionList;
	}

	
	
}