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

import com.kia25.core.rest.client.dto.categoryModel.ModelDto;
import com.kia25.core.rest.client.dto.option.OptionDto;
import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.Build001ServiceImpl;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build004_OptionModel {
	
	private final static Logger log = LoggerFactory.getLogger(Build004_OptionModel.class);
	BuildYourCarService buildYourCarService = new BuildYourCarServiceImpl();
	
	@OSGiService
	Build001Service service = new Build001ServiceImpl();
	
	@Self
    private SlingHttpServletRequest request;
	
	private List<OptionDto> optionList;
	private List<ModelDto> modelList;
	private ModelDto matchModel;
	
	private String modelImgPath = null;
	
	
	@PostConstruct
	public void activate() throws Exception {
		
		String modelCode = request.getParameter("modelCode");
		String trimCode = request.getParameter("trimCode");
		
		matchModel = new ModelDto();
		
		optionList = buildYourCarService.getOptionlListAPI().getListOfOptions();
		
		modelList = service.getModelAPI().getModelList();
		for(ModelDto model : modelList) {
			if(model.getModelCode().equals(modelCode)) {
				matchModel = model;
			}
		}
		log.info(matchModel.getCarImage());
		
		
	}


	public List<OptionDto> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<OptionDto> optionList) {
		this.optionList = optionList;
	}

	public ModelDto getMatchModel() {
		return matchModel;
	}

}
