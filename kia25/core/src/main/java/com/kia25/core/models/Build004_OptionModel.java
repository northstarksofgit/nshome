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

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.TrimModel.TrimDto;
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
	private List<TrimDto> trimList;
	private List<ColorDto> colorList;
	
	private String carModelName = null;
	private String carImage = null;
	private String trimName = null;
	private String modelColor = null;
	
	private String modelCode = null;
	private String trimCode = null;
	private String colorCode = null;
	
	
	
	@PostConstruct
	public void activate() throws Exception {
		
		modelCode = request.getParameter("modelCode");
		trimCode = request.getParameter("trimCode");
		colorCode = request.getParameter("colorCode");
		
		
		/**
		 * get Selected Model
		 * carImage :: select Car Model Image
		 * carModelName :: select Car Model Name
		 */
		modelList = service.getModelAPI().getModelList();
		for(ModelDto model : modelList) {
			if(model.getModelCode().equals(modelCode)) {
				carImage = model.getCarImage();
				carModelName = model.getCarModelName();
			}
		}

		
		/**
		 * get Selected Model-Trim
		 * trimName :: select Car Model-Trim Name
		 */
		trimList = buildYourCarService.getTrimListAPI().getTrimList();
		for(TrimDto trim : trimList) {
			if(trim.getTrimCode().equals(trimCode)) {
				trimName = trim.getTrimName();
			}
		}
		
		
		/**
		 * get Selected Model Color
		 * modelColor :: select Car Exterior Color Name
		 */
		colorList = buildYourCarService.getColorListAPI().getColorList();
		for(ColorDto color : colorList) {
			if(color.getTrimCode().equals(trimCode) && color.getColorCode().equals(colorCode) && color.getCarOptionCode().equals("E")) {
				modelColor = color.getColorName();
			}
		}
		
		
		/**
		 * get Print Model-Option List 
		 */
		optionList = buildYourCarService.getOptionlListAPI().getListOfOptions();
		
	}


	public List<OptionDto> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<OptionDto> optionList) {
		this.optionList = optionList;
	}
	
	public String getCarImage() {
		return carImage;
	}

	public String getTrimName() {
		return trimName;
	}

	public String getModelColor() {
		return modelColor;
	}


	public String getModelCode() {
		return modelCode;
	}

	public String getTrimCode() {
		return trimCode;
	}


	public String getColorCode() {
		return colorCode;
	}


	public String getCarModelName() {
		return carModelName;
	}
	
}
