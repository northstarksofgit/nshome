package com.kia25.core.models;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.dto.ColorListDtoResults;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003Helper {

	private static final Logger LOG = LoggerFactory.getLogger(Build003Helper.class);

	@OSGiService
	BuildYourCarService service = new BuildYourCarServiceImpl();

	@Self
	private SlingHttpServletRequest request;

	private List<ColorDto> colorList;
	private List<ColorDto> exteriorList;
	 
	private String premodelCode = null;
	private String pretrimName = null;
 

	@PostConstruct
	public void activate() throws IOException {
		colorList = service.getColorAPI().getColorList();
		exteriorList = service.getColorAPI().getExteriorList();
		
		premodelCode = service.getPreColorListAPI().getPremodelCode();
		pretrimName = service.getPreColorListAPI().getPretrimName();

	}

	public List<ColorDto> getColorList() {
		return colorList;
	}
	
	public void setColorList(List<ColorDto> colorList) {
		this.colorList = colorList;
	}
	
	public List<ColorDto> getExteriorList() {
		return exteriorList;
	}
	
	public void setExteriorList(List<ColorDto> exteriorList) {
		this.exteriorList = exteriorList;
	}

	public String getPreModelCode() {
		return premodelCode;
	}

	public String getPreTrimName() {
		return pretrimName;
	}


}
